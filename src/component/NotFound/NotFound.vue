<template>
    <section class="content">
      <div class="error-page">
        <h2 class="headline text-yellow"> 404</h2>

        <div class="error-content">
          <h3><i class="fa fa-warning text-yellow"></i> Oops! Page not found.</h3>

          <p>
            页面无法找到，你可以点击 <a href="./example">返回页面示例</a> 或者尝试搜索
          </p>

          <form class="search-form">
            <div class="input-group">
              <input type="text" name="search" class="form-control" placeholder="Search">

              <div class="input-group-btn">
                <button type="submit" name="submit" class="btn btn-warning btn-flat"><i class="fa fa-search"></i>
                </button>
              </div>
            </div>
            <!-- /.input-group -->
          </form>
        </div>
        <!-- /.error-content -->
      </div>
      <!-- /.error-page -->
    <div style="padding: 10px 0px; text-align: center;"><div class="text-muted">Excuse the ads! We need some help to keep our site up.</div><div class="visible-xs visible-sm"><iframe src="//rcm-na.amazon-adsystem.com/e/cm?o=1&amp;p=12&amp;l=ur1&amp;category=software&amp;banner=07Y2YZSQM9W1DW3Z4ER2&amp;f=ifr&amp;linkID=7eef6c42a8007bcd1b9e2cd188918118&amp;t=adminlteio-20&amp;tracking_id=adminlteio-20" width="300" height="250" scrolling="no" border="0" marginwidth="0" style="border:none;" frameborder="0"></iframe></div><div class="hidden-xs hidden-sm"><iframe src="//rcm-na.amazon-adsystem.com/e/cm?o=1&amp;p=48&amp;l=ur1&amp;category=software&amp;banner=0E8NERW3F9QFPDGBRT02&amp;f=ifr&amp;linkID=1b440cce608fcf721f6055a23113f23c&amp;t=adminlteio-20&amp;tracking_id=adminlteio-20" width="728" height="90" scrolling="no" border="0" marginwidth="0" style="border:none;" frameborder="0"></iframe></div></div></section>
</template>

<script>
    export default {
        name: 'not-found',
        data () {
            return {
                
            }
        },
        methods:{
             
        },
        created(){
        },
        mounted(){

        }
    }
</script>

<style scoped lang='less'>
    
</style>
