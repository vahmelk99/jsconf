export default {
  methods: {
    numberize() {
      const pre = document.getElementsByTagName('pre')
      const pl = pre.length
      for (let i = 0; i < pl; i++) {
        pre[i].innerHTML =
          '<span class="line-number"></span>' +
          pre[i].innerHTML +
          '<span class="cl"></span>'
        let num = pre[i].innerHTML.split(/\n/).length
        for (let j = 0; j < num; j++) {
          let line_num = pre[i].getElementsByTagName('span')[0]
          line_num.innerHTML += '<span>' + (j + 1) + '</span>'
        }
      }
    },
  },
  mounted() {
    this.numberize()
  },
}
