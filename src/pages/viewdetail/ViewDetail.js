import { getTable } from '../../service/index'
export default{
    name: 'view-detail',
    data() {
      return {
        options: [{
          value: '0',
          label: '西藏'
        }, {
          value: '1',
          label: '云南'
        }, {
          value: '2',
          label: '贵州'
        }, {
          value: '3',
          label: '四川'
        }, {
          value: '4',
          label: '广西'
        }],
        value4: '',
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
        value7: '',
        formInline: {
          user: '',
          region: ''
        },
        arrs: []
      }
    },
    created() {
      getTable(this.$route.params.id).then((res) => {
        console.log(res.data.data.array)
        this.arrs = res.data.data.array
      }).catch((err) => {
        console.log(err)
      })
      
    },
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      onSubmit() {
        console.log('submit!');
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