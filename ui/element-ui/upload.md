# upload自定义上传组件问题
1. 自定义上传方法
```js
// 依赖
import axios from 'axios'
```
```html
<el-upload
    ref="upload"
    class="upload-demo"
    action="none"
    :file-list="fileList"
    :before-upload="handleBefore"
    :http-request="filter_request"
    :limit="1"
    accept=".pkg"
    >
    <el-button type="primary" :loading="uploadLoading" :disabled="uploadLoading">上传</el-button>
    <el-progress class="upload-progress" v-if="showProgress" :percentage="progressPercent"></el-progress>
</el-upload>
```
<!-- action必填 -->

```js
filter_request(param:any){
  let _this = this
  let formData = new FormData();
  formData.append('file',param.file)
  formData.append('name',param.file.name)
  // onUploadProgress 必须为这个名字
  (axios as any).post(
    "/upgrade",
    formData,
    {onUploadProgress:function(event:any){

      _this.progressPercent = Number((event.loaded/event.total*100).toFixed(1))
    }
  }).then(()=>{
    (this.$refs.upload as any).clearFiles()
  }).catch(()=>{
    (this.$refs.upload as any).clearFiles()
  })

}
```