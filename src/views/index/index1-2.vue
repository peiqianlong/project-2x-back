<template>
  <div class="home">
    <div class="mainbox">
      <div class="editor">
        <editor
          style="height:100%"
          api-key="1lzod4sidk60oiu5ljguaw3vel0o9s119nymdttn0f8lkegi"
          :init="editorinit"
          v-model="content"
        ></editor>
      </div>
      <div class="mainright">
        <h4 class="tit">权限设置</h4>
        <div class="switchopen">
          <span>自动保存</span>
          <el-switch v-model="value" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
        </div>
        <div class="switchopen">
          <span>评论</span>
          <el-switch v-model="value2" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
        </div>
        <div class="switchopen">
          <span>点赞</span>
          <el-switch v-model="value3" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
        </div>
        <div class="switchopen">
          <span>可见性</span>
          <el-switch v-model="value4" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
        </div>
        <div class="switchopen">
          <span>转发</span>
          <el-switch v-model="value5" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
        </div>
        <h4 class="tit">博文分类</h4>
        <el-select v-model="value7" placeholder="请选择">
          <el-option
            v-for="item in options1"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
        <h4 class="tit">标签</h4>
        <el-select
          v-model="value6"
          multiple
          filterable
          allow-create
          default-first-option
          placeholder="请选择文章标签"
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </div>
    </div>
  </div>
</template>

<script>
import Editor from "../../../static/tinymce/tinymce-vue/lib/cjs";
export default {
  name: "index1-2",
  components: {
    editor: Editor
  },
  data() {
    return {
      content: "",
      editorinit: {
        selector: "textarea#full-featured",
        plugins:
          "wordcount link image print preview fullpage powerpaste searchreplace autolink directionality advcode visualblocks visualchars fullscreen image link media mediaembed template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount tinymcespellchecker a11ychecker imagetools textpattern help formatpainter permanentpen pageembed mentions linkchecker",
        language_url: `../../../static/tinymce/langs/zh_CN.js`,
        language: "zh_CN",
        toolbar:
          "formatselect | bold italic strikethrough forecolor backcolor permanentpen formatpainter | link image media pageembed | alignleft aligncenter alignright alignjustify  | numlist bullist outdent indent | removeformat | addcomment",
        image_advtab: true,
        content_css: [
          "//fonts.googleapis.com/css?family=Lato:300,300i,400,400i",
          "//www.tiny.cloud/css/codepen.min.css"
        ]
      },
      value: true,
      value2: true,
      value3: true,
      value4: true,
      value5: true,
      options: [
        {
          value: "HTML",
          label: "HTML"
        },
        {
          value: "CSS",
          label: "CSS"
        },
        {
          value: "JavaScript",
          label: "JavaScript"
        }
      ],
      value6: [],
      options1: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      value7: ""
    };
  }
};
</script>
<style lang="less" scoped>
.home {
  flex: 1;
}
.mainbox {
  height: 80%;
  display: flex;
  .editor {
    width: 85%;
    height: 100%;
  }
  .mainright {
    width: 15%;
    height: 100%;
    background: #fff;
    box-sizing: border-box;
    padding: 15px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    .tit {
      margin: 5px 0;
      margin-bottom: 15px;
      text-align: left;
    }
    .switchopen {
      display: flex;
      margin-left: 25px;
      span {
        width: 80px;
        display: flex;
        margin: 5px 0;
      }
    }
  }
}
</style>

