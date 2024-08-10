<script lang="ts" setup>
import { ref, toRefs, defineProps, defineExpose, computed, watch } from 'vue'
import { getContractData, create, edit } from '@/api/Contract'
// import { booth } from '@/api/Order'

const props = defineProps({
  isEdit: {
    type: Boolean,
    default: false
  },
})
const emit = defineEmits(['update:isEdit'])
// console.log(props.isEdit)
const contract: any = ref({
  exhibitorName: '', //string 乙方必需
  discount: [], //array[string] 折扣数据 必需
  discountRatio: '', //integer 折扣比例 必需
  positionCode: '', //string 展位号 必需
  positionType: '', //integer 展位类型 必需，1标准，2特装
  positionUnitPrice: '', //string 单价 必需
  positionArea: '', //string 面积 必需
  finalPrice: '', //string 合计
  exitTime: '', //string 退场时间 必需
  payment: [{
    name: '', //string 付款名称 必需
    ratio: '', //integer 付款比率 必需
    price: '', //string 付款金额 必需
    time: '' //string 最迟付款时间 必需
  }], //array[string] 付款信息 必需
})

// toRef(contract)

const orderId: any = ref('')
// const boothData: any = ref({})
// const _date: any = ref(new Date().toLocaleDateString('zh-CN', { year: 'numeric',month: 'long',day: 'numeric', }))

const setData = (id: any) => {
  orderId.value = Number(id)
  getContractData({ orderId: id }).then((res: any) => {
    if (res.code === 0) {
      contract.value = res.data
    }
  })

  // booth.getDetail({id: id}).then((res: any) => {
  //   if (res.code === 0) {
  //     boothData.value = res.data
  //   }
  // })
}

const createContract = (templateId: any, callback: any) => {
  // console.log(contract.value)
  create({
    orderId: orderId.value,
    templateId: templateId,
    hallCode: contract.value.hallCode,
    positionCode: contract.value.positionCode,
    unitPrice: contract.value.positionUnitPrice,
    positionType: contract.value.positionType,
    positionArea: contract.value.positionArea,
    discountRatio: contract.value.discountRatio,
    amount: contract.value.finalPrice,
    discount: contract.value.discount,
    payment: contract.value.payment,
    exitTime: contract.value.exitTime
  }).then((res: any) => {
    if (res.code === 0) {
      ElMessage.success('签订成功')
      callback && callback()
    }else{
      ElMessage.error(res.msg)
    }
  })
}

const editContract = (templateId: any) => {
  edit({
    orderId: orderId.value,
    templateId: templateId,
    hallCode: contract.value.hallCode,
    positionCode: contract.value.positionCode,
    unitPrice: contract.value.positionUnitPrice,
    positionType: contract.value.positionType,
    positionArea: contract.value.positionArea,
    discountRatio: contract.value.discountRatio,
    amount: contract.value.finalPrice,
    discount: contract.value.discount,
    payment: contract.value.payment,
    exitTime: contract.value.exitTime
  }).then((res: any) => {
    if (res.code === 0) {
      ElMessage.success('编辑成功')
      setData(orderId.value)
      emit('update:isEdit', false)
    }else{
      if(res.code === 170201){
        emit('update:isEdit', false)
      }else{
        ElMessage.error(res.msg)
      }
    }
  })
}

const setPrice = () => {
  contract.value.finalPrice = (Number(contract.value.positionUnitPrice) * Number(contract.value.positionArea) * (1 - Number(contract.value.discountRatio) / 100)).toFixed(2)
  // contract.value.payment.forEach((item: any) => {
  //   item.price = Number(item.ratio) === 0? contract.value.finalPrice : (Number(contract.value.finalPrice) * Number(item.ratio) / 100).toFixed(2)
  // })
  // console.log(contract.value.finalPrice)
}

const setPrice2 = () => {
  // contract.value.finalPrice = (Number(contract.value.positionUnitPrice) * Number(contract.value.positionArea) * (1 - Number(contract.value.discountRatio) / 100)).toFixed(2)
  contract.value.payment.forEach((item: any) => {
    item.price = Number(item.ratio) === 0? contract.value.finalPrice : (Number(contract.value.finalPrice) * Number(item.ratio) / 100).toFixed(2)
  })
  // console.log(contract.value.finalPrice)
}

// defineProps({
//   contract: {
//     type: Object,
//     required: true
//   },
//   id: {
//     type: String,
//     required: true
//   },
//   templateId: {
//     type: String,
//     required: true
//   }
// })
// const _ratio = computed(() => {
//   (n:number)=>{return n*100}

// }) //
const _ratio = (n: number)=>{return n*100}
const input_ratio = (event: any, item: any) => {
    if (event.target) {
      item.ratio = event.target.value / 100;
    }
  }
defineExpose({
  setData,
  createContract,
  editContract,
})
</script>
<template>
  <div class="contract-template">
    <h3 class="title">中国特许加盟展参展协议</h3>
    <div class="d1">
      <div><b>甲方：北京智霖博雅展览有限公司</b></div>
      <div><b class="s-flex-row">乙方：{{contract.exhibitorName}}</b></div>
      <!-- <div><b class="s-flex-row">乙方：
        <input v-if="isEdit" class="input s-flex-grow" v-model="contract.exhibitorName">
        <template v-else>{{contract.exhibitorName}}</template>
      </b></div> -->
    </div>
    <p>根据《中华人民共和国民法典》《中华人民共和国广告法》及相关规定，甲乙双方本着诚实信用、平等互利的原则，就甲方为乙方提供服务事宜签订本合同。</p>
    <p><b>第一条 合作细则</b></p>
    <p>1、展会信息</p>
    <p>名 称：中国特许加盟展-2024北京站</p>
    <p>时 间：2025年3月14-16日</p>
    <p>地 点：国家会议中心</p>
    <p>2、优惠政策：</p>
    <p v-for="(item, index) in contract.discount" :key="index">{{ item }}</p>
    <!-- <p>□CCFA会员享受  5%  折扣；</p>
    <p>□上年度参展企业享受   5%  折扣；</p>
    <p>□展位面积在60㎡﹙含﹚-90㎡﹙不含﹚享受 5% 折扣；</p>
    <p>□展位面积在90㎡及以上享受 10% 折扣；</p>
    <p>□现场预订并支付定金享受 10% 折扣；</p> -->
    <p>3、乙方展位信息及费用清单</p>
    <!-- <div> -->
    <table>
      <thead>
        <tr>
          <th >展位号</th>
          <th style="width: 90px;">展位类型</th>
          <th style="width: 120px;">单价（RMB）</th>
          <th style="width: 120px;">面积（平米）</th>
          <th style="width: 130px;">折扣比例（%）</th>
          <th style="width: 120px;">合计（RMB）</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <input v-if="isEdit" v-model="contract.positionCode"/>
            <template v-else>{{contract.positionCode}}</template>
          </td>
          <td>{{ { 1: '标准', 2: '特装' }[contract.positionType as number] }}</td>
          <td>
            <input v-if="isEdit" v-model="contract.positionUnitPrice" @input="setPrice"/>
            <template v-else>{{contract.positionUnitPrice}}</template>
          </td>
          <td>
            <input v-if="isEdit" v-model="contract.positionArea" @input="setPrice"/>
            <template v-else>{{contract.positionArea}}</template>
          </td>
          <td>
            <input v-if="isEdit" v-model="contract.discountRatio" @input="setPrice"/>
            <template v-else>{{contract.discountRatio}}</template>
          </td>
          <td>
            <input v-if="isEdit" v-model="contract.finalPrice"/>
            <template v-else>{{contract.finalPrice}}</template>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- </div> -->
    <p>4、乙方付款方式</p>
    <!-- <div> -->
    <table>
      <thead>
        <tr>
          <th style="width: 90px;">款项名称</th>
          <th>付款比率（%）</th>
          <th>付款金额（RMB）</th>
          <th>最迟付款时间</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in contract.payment" :key="index">
          <td>
            <input v-if="isEdit" v-model="item.name"/>
            <template v-else>{{item.name}}</template>
          </td>
          <td>
            <!-- <template v-if="item.name !== '全款'"> -->
              <input v-if="isEdit" v-model="item.ratio" @input="setPrice2"/>
              <template v-else>{{item.ratio}}</template>
            <!-- </template>
            <template v-else>100</template> -->
          </td>
          <!-- <td><input :value="_ratio(item.ratio)" @input="(ev:any)=>{
            if (ev.target) {
              item.ratio = ev.target.value / 100;
            }
          }"/></td> -->
          <td>
            <input v-if="isEdit" v-model="item.price"/>
            <template v-else>{{item.price}}</template>
          </td>
          <td>
            <input v-if="isEdit" v-model="item.time" />
            <template v-else>{{item.time}}</template>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- </div> -->
    <p>5、展位说明：</p>
    <p>标准展位：包括3面围板、地毯、1个楣板、1张咨询台、2把椅子、1个5A/220V电源插座；围板高度2.5米。</p>
    <p>光地展位：为空地，不带任何配置、参展企业需自行设计展台及装修，并承担相关费用。</p>
    <p><b>第二条 附赠服务内容</b></p>
    <p>
      甲方将在中国特许加盟展网站（www.chinafranchiseexpo.com）、盟享加网站（www.mxj.com.cn）为乙方参展品牌提供免费宣传，乙方在签订参展协议后可登陆网站首页，点击右上角“注册|登录”自行上传品牌资料及招商信息。
    </p>
    <p class="page-break"><b>第三条 付款及退展</b></p>
    <p class="page-break">1、乙方于协议约定时间内以电汇方式支付全部款项，并将签字盖章的协议原件或扫描件给甲方；逾期未履行协议，视为自动放弃所选服务。对于乙方减少展示面积的，甲方有权重新安排位置。</p>
    <p class="page-break">2、乙方款项到达到甲方账户后，甲方向乙方开具正规增值税发票，按费用明细类别开据。</p>
    <p class="page-break">3、<b>协议签订后，如乙方在<input v-if="isEdit" class="input" style="text-align: center; font-weight: bold;" v-model="contract.exitTime" placeholder="例：2024-01-01" /><template v-else><b style="text-decoration: underline;">&ensp; {{ contract.exitTime }} &ensp;</b></template>后提出退展，则乙方无权要求退还展位费，甲方有权将展位另作安排。</b></p>
    <p class="page-break">4、如乙方未在约定时间内向甲方缴纳全部相关费用，则视为乙方自动放弃所选展位，甲方有权将展位另作安排。</p>
    <p class="page-break">5、指定收款账户信息（<b>必须公司付款，并在汇款时标明“2025北京站”</b>）</p>
    <p class="page-break"><b>户 名：北京智霖博雅展览有限公司</b></p>
    <p class="page-break"><b>开户行：招商银行北京阜外大街支行</b></p>
    <p class="page-break"><b>账 号：110909194610802</b></p>
    <p class="page-break"><b>第四条 权利与义务</b></p>
    <p class="page-break">1、甲方保证按时取得展览会批件，保证活动的合法性。</p>
    <p class="page-break">2、甲方将协助展馆做好秩序维护工作，并购买商业公众责任险，保障开展期间乙方以及来访者、参展人员的人身安全（以保险条款为准），保险范围以外的风险由来访者及参展人员自行承担。对于贵重、易损物品，乙方应自行妥善保管。</p>
    <p class="page-break">
      3、乙方在参展前需向甲方提供营业执照复印件、商标注册证复印件（乙方非商标权人的，还需同时提供商标许可使用授权书复印件）、店铺情况说明等参展申请材料，乙方应对材料的真实性、有效性负责。未经甲方同意，乙方在参展活动中不得出现未经甲方审核的品牌，否则甲方有权予以清理。
    </p>
    <p class="page-break">4、乙方必须保证其参展品牌符合《商业特许经营管理条例》和《广告法》的相关规定，一年之内不得出现相关投诉或者重大品牌负面舆论，否则甲方有权单方无条件解除本合同，不承担任何责任。</p>
    <p>5、按照商务部《展会知识产权保护办法》，如发生商标、品牌、专利、加盟商投诉等纠纷情况，第三方有专利、公证书等法律文件证明乙方明显侵权，甲方有权自行决定是否终止（或中止）乙方参展。</p>
    <p>6、甲乙双方均应自觉遵守展览会所在展馆的相关管理规定，配合展馆工作人员的管理工作。对各自的违法违规行为，需自行承担法律责任。</p>
    <p>
      7、乙方在展览现场展示的广告宣传资料包括文字、图片、宣传墙板，发放的宣传品必须符合《商业特许经营管理条例》《广告法》等相关法律法规和政策规定，不得出现虚假、夸大、误导等不符合上述规定要求的文字，误导投资人加盟；其发布的广告中不得含有宣传被特许人从事特许经营活动收益的内容。
    </p>
    <p>8、乙方保证其为符合中华人民共和国法律法规的合法经营主体并已取得经营相关业务的合法资质。甲方有权对其资质真实性进行核查。乙方按照甲方要求提供相关的真实、合法、有效的资质证明文件。</p>
    <p>9、为便于潜在加盟商了解参展品牌的基本情况，乙方应全力配合甲方完成参展品牌的入驻。</p>
    <p>
      10、乙方需对管理账户的用户名和密码的安全性负责，不能向任何人透露。乙方不得将甲方为乙方提供的管理账户及甲方在本合同和附加合同下的承诺和向其提供的服务及相关资源转卖、出租、出借给任何第三方。若乙方违反该规定，甲方将保留关闭服务账户及终止向乙方提供服务的权利。
    </p>
    <p>11、乙方应确保提供给甲方的信息具备合法性，甲方提供的业务范围需与其营业范围有关联性。</p>
    <p>11.1乙方保证对提供给甲方的全部信息拥有版权或其他合法权利，可以授权甲方使用该信息；</p>
    <p>11.2乙方提供给甲方的全部信息完整、真实、准确、合法，并且不会侵害任何第三方的合法权益；</p>
    <p>11.3乙方保证信息的著作权人（如乙方不是信息的著作权人）同意乙方签订和履行本合同并不要求甲方支付任何费用。</p>
    <p>12、乙方同意甲方可以因维护其管理账户目的或在得到乙方通知后（该通知可以为电话、传真或邮件等方式），对乙方管理账户内信息进行查阅、调整、修改、更新。</p>
    <p>13、展会现场禁止携带和使用任何扩音设备，如有特殊情况须在开展前向甲方提出申请，经甲方同意后方可使用，如有违反甲方有权终止（或中止）乙方参展。</p>
    <p class="page-break"><b>第五条违约责任 </b></p>
    <p class="page-break">
      1、甲方不履行或不完全履行本合同项下的相关义务（疫情等不可抗力因素除外），导致展会无法正常开展，从而影响乙方参展权益的，乙方有权书面通知其更正，甲方应在接到通知后十日内更正，逾期未更正的，且符合本合同约定的解除条件的，乙方有权解除本合同并要求退费。
    </p>
    <p class="page-break">2、乙方不履行或不完全履行本合同项下的任何义务，甲方有权书面通知其更正，乙方应在接到通知后十日内更正，逾期未更正的，甲方有权解除本合同并要求乙方赔偿损失。</p>
    <p class="page-break">3、因乙方原因导致甲方与第三方发生纠纷的，乙方应当承担甲方因处理纠纷所发生的一切费用。</p>
    <p class="page-break">4、乙方有以下行为的，甲方有权要求乙方停止不当行为，并可立即单方解除本合同，乙方应向甲方支付合同总金额29%的违约金，如造成甲方损失的，甲方有权要求乙方另行进行赔偿。</p>
    <p class="page-break">4.1乙方违反《商业特许经营管理条例》和《广告法》；</p>
    <p class="page-break">4.2乙方的行为损害到甲方的商业信誉的；</p>
    <p class="page-break">4.3乙方的行为导致甲方与第三人发生纠纷的；</p>
    <p class="page-break">4.4乙方的行为影响到展会秩序的；</p>
    <p class="page-break">4.5乙方向甲方提供虚假材料、信息的；</p>
    <p class="page-break">4.6乙方参展内容存在侵权的；</p>
    <p class="page-break">4.7乙方对甲方员工存在商业贿赂、腐败行为的。</p>
    <p class="page-break">5、如因乙方的过错，而导致甲方对第三方造成侵权的，全部责任由乙方承担。</p>
    <p class="page-break">6、如因乙方违约导致本合同解除的，甲方已经收取的费用不予退还。</p>
    <p class="page-break">7、违约方应当承担守约方因维权所支付的合理费用（包括但不限于：差旅费、公证费、鉴定费、审计费、律师费、诉讼费、仲裁费等合理开支）。</p>
    <p class="page-break"><b>第六条不可抗力约定</b></p>
    <p class="page-break">如发生不可抗力致使甲乙任何一方不能履行、延迟履行或不能完全履行本协议项下规定的义务时，遭遇不可抗力的一方应立即以书面形式通知对方。不可抗力发生后，甲乙双方应通过友好协商尽快决定是否继续履行本协议。</p>
    <p class="page-break"><b>第七条其他约定</b></p>
    <p class="page-break">
      1、在本协议履行期间，展览场地提供方遇临时其他重要活动而要求甲方改变展会日期和/或展会地点的，甲方应该提前20天通知乙方，乙方有权解除本协议，甲方退还已经收取的参展费。双方互不承担违约责任。乙方在收到通知后3日内不提出解除协议的，本协议继续履行。
    </p>
    <p class="page-break">2、本协议自双方签字盖章后生效，一式贰份，甲乙双方各执壹份，电子版扫描件具有同等法律效力。</p>
    <p class="page-break">3、本协议附件是本协议的组成部分，与本协议具有同等法律效力。</p>
    <p class="page-break">
      4、甲乙双方任何一方对于因签署或履行本协议,而了解或接触到本合同的内容和执行、对方的商业秘密及其他机密资料和信息,均应保守秘密，未经甲乙双方书面同意不得向任何第三方泄露。任何一方因违反保密义务而给另一方损失的应负相应的赔偿责任。无论本合同解除或终止本合同持续有效。
    </p>
    <p class="page-break">5、本合同未尽事宜甲乙双方共同协商解决，协商无法达成一致的，任何一方均有权向北京人民法院提出诉讼。</p>
    <div class="d1 page-break" style="margin-top: 50px; position: relative;">
      <img style="width: 200px;  object-fit: contain; border: none; position: absolute; top: -50px; left: 50px; z-index: -1" src="@/assets/images/ht2.png" alt="">
      <div>
        <div>甲方：北京智霖博雅展览有限公司</div>
        <div>代表（签字盖章）</div>
        <div>日期：{{ contract.signTime }} </div>
      </div>
      <div>
        <!-- <div>乙方：<input class="input s-flex-grow" :value="contract.exhibitorName"></div> -->
        <div>乙方：{{contract.exhibitorName}}</div>
        <div>代表（签字盖章）</div>
        <div>日期：</div>
        <!-- <div>日期：<input class="input s-flex-grow" :value="_date"></div> -->
      </div>
    </div>
    <div class="d2 page-break">
      <div>
        <b>添加企业微信</b>
        <div>为了更好地服务展商，请企业联系人（不限数量）添加中国特许加盟展展商服务企业微信号，添加时务必备注企业名称和联系人姓名。谢谢！</div>
      </div>
      <img src="@/assets/images/ht1.png" alt="">
    </div>
  </div>
</template>

<style scoped>
.contract-template {
  padding: 30px;
  width: 760px;
  color: #000000;
  font-family: SimSun, NSimSun, STSong,  FangSong_GB2312, FangSong;
  .title{
    font-size: 22px;
    margin-bottom: 30px;
    font-weight: bold;
  }
  .input{ 
    border: none;
    border-bottom: 1px solid #000000; 
    outline: none;
    /* min-width: 0;
    flex: 1; */
  }
  
  &>h3 {
    font-weight: bold;
    text-align: center;
  }

  &>div,
  &>p {
    text-indent: 20px;
  }

  b {
    font-weight: bold
  }

  table {
    /* border-right: 1px solid #000000; */
    border: 1px solid #000000;
    text-align: center;
    border-collapse: collapse;
    width: 100%;

    th {
      font-weight: bold;
      padding: 5px 10px;
      border: 1px solid #000000;
    }

    td {
      border: 1px solid #000000;
      /* padding: 2px 10px; */
      min-height: 40px;
      /* border-top: 1px solid #000000; */
      input{
        border: none;
        width: 100%;
        outline: none;
        padding: 2px 10px;
        text-align: center;
        height: 20px;
      }
    }
  }

  .d1 {
    display: flex;

    >div {
      min-width: 0;
      flex: 1;
    }
  }

  .d2 {
    display: flex;
    align-items: center;

    >div {
      flex: 1;
      min-width: 0;
    }

    img {
      width: 180px;
      height: 180px;
      margin-left: 20px;
      object-fit: contain;
      border: none;
    }
  }
}
</style>