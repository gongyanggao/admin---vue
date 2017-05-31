const cityOptions = ['上海', '北京', '广州', '深圳'];
export default {
  name: 'check-box',
  data() {
    return {
      checkAll: true,
      checkedCities: ['上海', '北京'],
      cities: cityOptions,
      isIndeterminate: true
    };
  },
  methods: {
    handleCheckAllChange(event) {
      this.checkedCities = event.target.checked ? cityOptions : [];
      this.isIndeterminate = false;
    },
    handleCheckedCitiesChange(value) {
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.cities.length;
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
    }
  }
}