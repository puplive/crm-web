<template>
  <div class="footer">
    <div class="main-foot">
      <img class="foot-logo" src="@/assets/images/foot-logo.svg" alt="" />
      <div class="foot-right-main">
        <ul class="">
          <li><a href="https://scm.exposaas.com/web/oa-yun/about">公司信息</a></li>
          <li><a href="javascript:;" @click="contactRef.setShow(true)">联系我们</a></li>
        </ul>
        <ul class="">
          <li>
            <p>
              Copyright©2018&nbsp;&nbsp;&nbsp;ExpoSaaS(会展云) &nbsp;&nbsp;
              <span>京公网安备 11010502034153</span>&nbsp;&nbsp;
              <a href="https://beian.miit.gov.cn" target="_blank">京ICP备17015357号-2</a>
            </p>
          </li>
          <li><a href="https://scm.exposaas.com/web/terms/use">注册条款</a></li>
          <li><a href="https://scm.exposaas.com/web/terms/privacy">隐私条款</a></li>
          <li><a href="https://scm.exposaas.com/web/terms/safe">安全产品、服务和功能隐私声明</a></li>
          <li><a href="https://scm.exposaas.com/web/terms/coo-kie">Cookie声明</a></li>
        </ul>
      </div>
    </div>
  </div>
  <Contact ref="contactRef" />
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  import Contact from '@/components/Contacts/index.vue'

  let contactRef = ref(null)
  
</script>
<style scoped>
  .footer {
    background-color:rgba(56,56,56);
    color:var(--el-color-primary);
    padding: 30px 100px;
    .main-foot{
      display:flex;
      justify-content: center;
      align-items:center;
      .foot-logo{
        width:120px;
        /* height:38px */
      }
      
      .foot-right-main{
        margin-left:30px;
        padding-left:20px;
        height:133px;
        border-left:1px solid #d7d7d7;

        ul{
          margin-top:31px;
          display:flex;
          flex-wrap: wrap;
          align-items:center;
          li{
            padding:0 10px;
            font-size:14px;
            a{
              color:#fff;
              &:hover{color: var(--el-color-primary)}
            }
            p{color:#fff}
          }
        }
      }
    }
  }
</style>