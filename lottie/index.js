class LikeButton {
  constructor () {
    this.initializeAnimation()
    this.bindClickEvent()
  }
  initializeAnimation () {
    this.isLiked = false
    const animationParameter = {
      container: document.getElementById('lottie'),
      path: './lottie/animation-w100-h100.json',
      render: 'svg/canvas/html',
      loop: false,
      autoplay: false
    }
    this.animation = bodymovin.loadAnimation(animationParameter)
  }
  bindClickEvent () {
    window.addEventListener('click', () => {
      this.isLiked = !this.isLiked
      if (this.isLiked) {
        this.like()
      } else {
        this.notLike()
      }
    })
  }
  like () {
    this.animation.play()
    this.animation.addEventListener('complete', () => {
      this.animation.pause()
    })
  }
  notLike () {
    this.animation.stop()
  }
}

(() => {
  new LikeButton()
})()
