import { getTable } from '../../../../service/index'
export default{
    name: 'view-detail',
    data() {
      return {
        currentPageSize: 10,
        currentPageNumber: 1,
        pickerOptions2: {
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
        formInline: {
          user: '',
          region: '',
          date: ''
        },
        arrs: []
      }
    },
    created() {
      getTable(this.$route.params.id, 159).then((res) => {
        this.arrs = res.data.data.array
      }).catch((err) => {
        console.log(err)
      })
      
    },
    methods: {
      handleSizeChange(val) {
        this.currentPageSize = val
        console.log(this.currentPageSize)
      },
      handleCurrentChange(val) {
        this.currentPageNumber = val
        console.log(this.currentPageNumber)
      },
      onSubmit() {
        console.log(this.formInline);
      },
      filterTag(value, row) {
        return row.tag === value;
      },
      goBack() {
        history.go(-1)
      }
    },
    components: {
      
    }
  }