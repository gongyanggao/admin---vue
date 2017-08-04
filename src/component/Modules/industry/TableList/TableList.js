import { mapGetters } from 'vuex';
export default {
  name: 'table-list',
  data() {
    return {
      isOpen: false,
      indeterminate: true,
      checkAll: false,
      tableColumnsChecked: [],
      tableData2: this.mockTableData2(),
      tableColoums: this.$store.getters.tableColoums,
      dragIndex: 0,
      dropIndex: 0
    }
  },
  computed: {
    ...mapGetters([
      'loading'
    ])
  },
  methods: {
    clickEvent () {
      console.log(this)
    },
    toLoading () {
        this.loading = true;
        this.$store.dispatch('save_coloums', this.tableColoums)
        setTimeout(function() {
          // this.$message({
          //   showClose: true,
          //   message: '保存成功！'
          // });
        }, 500)
    },
    handleCheckAll () {
        if (this.indeterminate) {
            this.checkAll = false;
        } else {
            this.checkAll = !this.checkAll;
        }
        this.indeterminate = false;

        if (this.checkAll) {
            this.tableColumnsChecked = ['show', 'weak', 'signin', 'click', 'active', 'day7', 'day30', 'tomorrow', 'day', 'week', 'month'];
        } else {
            this.tableColumnsChecked = [];
        }
        this.tableColoums = this.getTable2Columns();
    },
    mockTableData2() {
      let data = [];

      function getNum() {
        return Math.floor(Math.random() * 10000 + 1);
      }
      for (let i = 0; i < 10; i++) {
        data.push({
          name: '推广名称' + (i + 1),
          fav: 0,
          show: getNum(),
          weak: getNum(),
          signin: getNum(),
          click: getNum(),
          active: getNum(),
          day7: getNum(),
          day30: getNum(),
          tomorrow: getNum(),
          day: getNum(),
          week: getNum(),
          month: getNum()
        })
      }
      return data;
    },
    getTable2Columns() {
      const table2ColumnList = {
        name: {
          title: '名称',
          key: 'name',
          fixed: 'left',
          width: 200,
          render: (h, params) => {
            const fav = this.tableData2[params.index].fav;
            const style = fav === 0 ? {
              cursor: 'pointer'
            } : {
              cursor: 'pointer',
              color: '#f50'
            };

            return h('div', [
              h('Icon', {
                style: style,
                props: {
                  type: fav === 0 ? 'ios-star-outline' : 'ios-star'
                },
                nativeOn: {
                  click: () => {
                    this.toggleFav(params.index);
                  }
                }
              })
            ]);
          }
        },
        show: {
          title: '展示',
          key: 'show',
          width: 150,
          sortable: true
        },
        weak: {
          title: '唤醒',
          key: 'weak',
          width: 150,
          sortable: true
        },
        signin: {
          title: '登录',
          key: 'signin',
          width: 150,
          sortable: true
        },
        click: {
          title: '点击',
          key: 'click',
          width: 150,
          sortable: true
        },
        active: {
          title: '激活',
          key: 'active',
          width: 150,
          sortable: true
        },
        day7: {
          title: '7日留存',
          key: 'day7',
          width: 150,
          sortable: true
        },
        day30: {
          title: '30日留存',
          key: 'day30',
          width: 150,
          sortable: true
        },
        tomorrow: {
          title: '次日留存',
          key: 'tomorrow',
          width: 150,
          sortable: true
        },
        day: {
          title: '日活跃',
          key: 'day',
          width: 150,
          sortable: true
        },
        week: {
          title: '周活跃',
          key: 'week',
          width: 150,
          sortable: true
        },
        month: {
          title: '月活跃',
          key: 'month',
          width: 150,
          sortable: true
        }
      };

      let data = [table2ColumnList.name];
      let arr1 = this.tableColumnsChecked
      console.log(arr1)
      for(let i = 1; i < arr1.length; i++) {
        data.push(table2ColumnList[arr1[i]])
      }
      console.log(data)
      return data;
    },
    changeTableColumns(data) {
      this.tableColoums = this.getTable2Columns();
      this.bindDragEvent()
      if (this.tableColoums.length === 11) {
          this.indeterminate = false;
          this.checkAll = true;
      } else if (this.tableColoums.length > 0) {
          this.indeterminate = true;
          this.checkAll = false;
      } else {
          this.indeterminate = false;
          this.checkAll = false;
      }
    },
    toggleFav(index) {
      this.tableData2[index].fav = this.tableData2[index].fav === 0 ? 1 : 0;
    },
    drag(ev) {
      console.log(ev)
      // ev.dataTransfer.setData("Text",ev.target.id);
    },
    drop(ev) {
      console.log(ev)
    },
    propTransfer(str) {
      var arr = [{
        show: '展示'
      }, {
        weak: '唤醒'
      }, {
        signin: '登录'
      }, {
        click: '点击'
      }, {
        active: '激活'
      }, {
        day7: '7日留存'
      }, {
        day30: '30日留存'
      }, {
        tomorrow: '次日留存'
      }, {
        day: '日活跃'
      }, {
        week: '周活跃'
      }, {
        month: '月活跃'
      }]
      let key = '';
      for(let k in arr) {
        if (arr[k] === str) {
          key = k
        }
      }
      return key
    },
    bindDragEvent() {
      var _self = this
      this.$nextTick(function() {
        console.log($('.ivu-table-header th'))
        $('.ivu-table-header th').each(function(index, elem) {
          elem.draggable = true
          elem.ondragstart = function(ev) {
            _self.dragIndex = index
          }
          elem.ondragover = function(ev) {
            ev.preventDefault();
          }
          elem.ondrop = function(ev) {
            _self.dropIndex = index
            if (_self.dropIndex !== _self.dragIndex) {
              var oldVal = _self.tableColoums[_self.dragIndex],
                  newVal = _self.tableColoums[_self.dropIndex]
              _self.tableColoums[_self.dragIndex] = newVal
              _self.tableColoums[_self.dropIndex] = oldVal
              _self.tableColoums.push('fuck')
              _self.tableColoums.pop()
              // console.log(_self.tableColoums)

              let arr = _self.tableColoums
              _self.tableColumnsChecked = []
              for(let i = 0; i < arr.length; i++) {
                _self.tableColumnsChecked.push(arr[i].key)
              }
              console.log(_self.tableColumnsChecked)
            }
            // console.log(_self.dropIndex)
          }
        })
      })
    }
  },
  // watch: {
  //   dropIndex: function(newV) {
  //     var oldVal = this.tableColoums[this.dragIndex],
  //         newVal = this.tableColoums[newV]
  //     this.tableColoums[this.dragIndex] = newVal
  //     this.tableColoums[newV] = oldVal
  //     console.log(this.dragIndex, newV)
  //   }
  // },
  created() {
    let arr = this.tableColoums
    for(let i = 0; i < arr.length; i++) {
      this.tableColumnsChecked.push(arr[i].key)
    }
    if (this.tableColoums.length === 11) {
        this.indeterminate = false;
        this.checkAll = true;
    } else if (this.tableColoums.length > 0) {
        this.indeterminate = true;
        this.checkAll = false;
    } else {
        this.indeterminate = false;
        this.checkAll = false;
    }
  },
  mounted() {
    this.bindDragEvent()
  }
}