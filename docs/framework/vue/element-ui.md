# 表格列宽度超限

## 异常现象
GitHub已有针对该异常的讨论，详见：[https://github.com/ElemeFE/element/issues/10308](https://github.com/ElemeFE/element/issues/10308)
<br />
具体异常现象可参看下图：
![Safari-show-overflow-tooltip.png](./images/Safari-show-overflow-tooltip.png)

## 追溯原因

经查验，当**width与show-overflow-tooltip同时存在**时，**el-tooltip未正确设置width行内样式**，主流浏览器均存在该情况，而Safari不兼容col列设置的宽度，内容过长时，会导致撑开列宽；

## 解决办法

两种解决办法：

### 一、源码（建议官方修复）
文件修改所在：[packages/table/src/table-body.js](https://github.com/ElemeFE/element/tree/master/packages/table/src/table-body.js)
````javascript
  getColspanRealWidth(columns, colspan, index) {
    if (colspan < 1) {
      return columns[index].realWidth;
    }
    const widthArr = columns.map(({ realWidth }) => realWidth).slice(index, index + colspan);

    // (修改前)存在widthArr => null
    // return widthArr.reduce((acc, width) => acc + width, -1);

    // (修改后)过滤非法值 null
    const validArr = widthArr.filter(item => item)
    return validArr.length ? validArr.reduce((acc, width) => acc + width, -1) : null;
  },
````

### 二、利用官方提供**cell-style**设置单元格样式
::: warning
注意：此类方法针对数据渲染较大时，对性能有较高要求，不建议可取
:::

````html
  <el-table :cell-style="getCellStyle">
    ...
  </el-table>
````

````javascript

  getCellStyle({ column }) {
    // TODO 针对Safari表格width与showOverflowTooltip暂不能共存异常
    const tempWidth = column.realWidth || column.width
    if (column.showOverflowTooltip) {
      return {
        minWidth: tempWidth + 'px',
        maxWidth: tempWidth + 'px'
      }
    }

    return {}
  }
````
