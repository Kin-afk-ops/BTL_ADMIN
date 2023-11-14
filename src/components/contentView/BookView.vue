<template>
  <div
    class="book__view main__container row"
    :class="{ hidden: !viewBookMode }"
  >
    <div class="col c-5 book__view--left">
      <div class="book__view--img">
        <img
          src="https://cdn0.fahasa.com/media/catalog/product/8/9/8935278607311.jpg"
          alt=""
        />
      </div>
    </div>
    <div class="col c-7 book__view--right">
      <h1 class="book__view--title">
        Không Diệt Không Sinh Đừng Sợ Hãi (Tái Bản 2022)
      </h1>
      <div class="row no-gutters book__view--content">
        <div class="book__view--content-left">
          <div class="book__view--star">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <span>(0 đánh giá)</span>
          </div>

          <div class="book__view--price">
            <span class="book__view--price-buy">66.000 đ</span>
            <span class="book__view--price-cost">110.000đ </span>
            <span class="book__view--price-percent">-40%</span>
          </div>
          <div class="book__view--content row no-gutters">
            <div class="row no-gutters book__view--top">
              <div class="col c-6 book__view--top-left">
                <p>Mã hàng</p>
                <p>Tên nhà cung cấp</p>
                <p>Tác giả</p>
                <p>Nhà xuất bản</p>
                <p>Năm xuất bản</p>
                <p>Trọng lượng</p>
                <p>Kích thước bao bì</p>
                <p>Số trang</p>
                <p>Hình thức</p>
              </div>
              <div class="col c-6">
                <p>8935278607311</p>
                <p>Saigon Book</p>
                <p>Thích Nhất Hạnh</p>
                <p>Thế Giới</p>
                <p>2022</p>
                <p>250</p>
                <p>20.5 x 13 cm x 1.2</p>
                <p>224</p>
                <p>Bìa Mềm</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="book__desc--content" ref="productDescContent">
        <p>
          Nhiều người trong chúng ta tin rằng cuộc đời của ta bắt đầu từ lúc
          chào đời và kết thúc khi ta chết. Chúng ta tin rằng chúng ta tới từ
          cái Không, nên khi chết chúng ta cũng không còn lại gì hết. Và chúng
          ta lo lắng vì sẽ trở thành hư vô.
        </p>
        <p>
          Bụt có cái hiểu rất khác về cuộc đời. Ngài hiểu rằng sống và chết chỉ
          là những ý niệm không có thực. Coi đó là sự thực, chính là nguyên do
          gây cho chúng ta khổ não. Bụt dạy không có sinh, không có diệt, không
          tới cũng không đi, không giống nhau cũng không khác nhau, không có cái
          ngã thường hằng cũng không có hư vô. Chúng ta thì coi là Có hết mọi
          thứ. Khi chúng ta hiểu rằng mình không bị hủy diệt thì chúng ta không
          còn lo sợ. Đó là sự giải thoát. Chúng ta có thể an hưởng và thưởng
          thức đời sống một cách mới mẻ.
        </p>
        <p>
          Không diệt Không sinh Đừng sợ hãi là tựa sách được Thiền sư Thích Nhất
          Hạnh viết nên dựa trên kinh nghiệm của chính mình. Ở đó, Thầy Nhất
          Hạnh đã đưa ra một thay thế đáng ngạc nhiên cho hai triết lý trái
          ngược nhau về vĩnh cửu và hư không: “Tự muôn đời tôi vẫn tự do. Tử
          sinh chỉ là cửa ngõ ra vào, tử sinh là trò chơi cút bắt. Tôi chưa bao
          giờ từng sinh cũng chưa bao giờ từng diệt” và “Nỗi khổ lớn nhất của
          chúng ta là ý niệm về đến-đi, lui-tới.”
        </p>
        <p>
          Được lặp đi lặp lại nhiều lần, Thầy khuyên chúng ta thực tập nhìn sâu
          để chúng ta hiểu được và tự mình nếm được sự tự do của con đường chính
          giữa, không bị kẹt vào cả hai ý niệm của vĩnh cửu và hư không. Là một
          thi sĩ nên khi giải thích về các sự trái ngược trong đời sống, Thầy đã
          nhẹ nhàng vén bức màn vô minh ảo tưởng dùm chúng ta, cho phép chúng ta
          (có lẽ lần đầu tiên trong đời) được biết rằng sự kinh hoàng về cái
          chết chỉ có nguyên nhân là các ý niệm và hiểu biết sai lầm của chính
          mình mà thôi.
        </p>
        <p>
          Tri kiến về sống, chết của Thầy vô cùng vi tế và đẹp đẽ. Cũng như
          những điều vi tế, đẹp đẽ khác, cách thưởng thức hay nhất là thiền quán
          trong thinh lặng. Lòng nhân hậu và từ bi phát xuất từ suối nguồn thâm
          tuệ của Thiền sư Thích Nhất Hạnh là một loại thuốc chữa lành những vết
          thương trong trái tim chúng ta.
        </p>
      </div>
    </div>

    <div class="book__view--cancel">
      <i class="fa-regular fa-rectangle-xmark" @click="viewHidden"></i>
    </div>
  </div>
</template>
<script>
export default {
  props: ["viewBookMode"],
  methods: {
    viewHidden() {
      this.$emit("hidden");
    },
  },
};
</script>
<style>
.book__view {
  padding: 20px;
  position: absolute;
  z-index: 999;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  border: 1px solid #ccc;
  width: 100%;
}

.book__view--left {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.book__view--img {
  border: 1px solid #ccc;
  border-radius: 10px;
  overflow: hidden;
}

.book__view--img img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.book__view--right {
  width: 80%;
}

.book__view--title {
  font-size: 25px;
  font-weight: 500;
}

.book__view--content-left p {
  padding-bottom: 10px;
}

.book__view--content-right {
  padding-bottom: 10px;
}

.book__view--star i {
  color: #ccc;
}

.book__view--star span {
  color: coral;
}

.book__view--price {
  display: flex;
  align-items: center;
}

.book__view--price span {
  margin-right: 20px;
}

.book__view--price-buy {
  font-size: 35px;
  font-weight: 700;
  color: var(--primary-color);
}

.book__view--price-cost {
  text-decoration: line-through;
}

.book__view--price-percent {
  padding: 10px;
  background-color: var(--primary-color);
  color: white;
  border-radius: 10px;
}

.book__view--content {
  display: flex;
  flex-direction: column;
  font-size: 14px;
  padding: 20px;
}

.book__view--top p {
  font-size: 15px;

  padding-bottom: 10px;
  color: #333;
}

.book__view--cancel {
  padding: 10px;
  font-size: 25px;
  cursor: pointer;
  position: absolute;
  top: 0px;
  right: 5px;
  transition: 0.3s linear;
}

.book__view--cancel:hover {
  color: var(--primary-color);
}

.book__desc--content {
  padding: 20px;
  font-size: 16px;
  transition: 0.3s linear;
}

.book__desc--content p {
  text-align: justify;
  margin-bottom: 20px;
  word-spacing: 2px;
  color: #333;
}
</style>
