 let horizontalStatus = {
   heart: {
     ios: "ios-heart",
     android: "md-heart"
   },
   heart_outline: {
    ios: "ios-heart-outline",
    android: "md-heart-outline"
   }
 }
 let flatListData = [
  {
    key: "d1luu",
    name: "Snow Dog",
    country: "Chó có bộ lông trắng như tuyết",
    imageUrl: "https://images.pexels.com/photos/356378/pexels-photo-356378.jpeg?auto=compress&cs=tinysrgb&h=350",
    status: horizontalStatus.heart
  },
  {
    key: "d2luu",
    name: "Puggle",
    country: "Giống chó nhỏ, nguồn gốc từ Mỹ",
    imageUrl: "https://images.pexels.com/photos/59523/pexels-photo-59523.jpeg?auto=compress&cs=tinysrgb&h=350",
    status: horizontalStatus.heart_outline
  },
  {
    key: "d3luu",
    name: "Rottweiler",
    country: "Giống chó Đức, có hàm răng rất khoẻ, thường được huấn luyện để chiến đấu",
    imageUrl: "http://www.dogbreedslist.info/uploads/allimg/dog-pictures/Rottweiler-1.jpg",
    status: horizontalStatus.heart
  },
  {
    key: 4,
    name: "SheepDog",
    country: "Giống chó nguồn gốc từ Nhật, hiền lành và trung thành",
    imageUrl: "https://i.pinimg.com/originals/4d/62/02/4d6202a54680cd24c9566668c41aa99b.jpg",
    status: horizontalStatus.heart_outline
  },
  {
    key: 5,
    name: "Child Dog",
    country: "Chó con :D",
    imageUrl: "https://www.nationalgeographic.com/content/dam/animals/thumbs/rights-exempt/mammals/d/domestic-dog_thumb.jpg",
    status: horizontalStatus.heart
  },
  {
    key: 6,
    name: "Doberman",
    country: "1 giống chó khác đến từ Đức, được huấn luyện để đi săn",
    imageUrl: "http://www.cheatsheet.com/wp-content/uploads/2017/05/doberman-dog-outdoors-640x427.jpg",
    status: horizontalStatus.heart
  },
  {
    key: 7,
    name: "Husky",
    country: "Con này thì quá nổi tiếng rồi :))",
    imageUrl: "http://www.dogbazar.org/wp-content/uploads/2015/07/alaskan-malamute-pup.jpg",
    status: horizontalStatus.heart_outline
  },
];
module.exports = flatListData;
export {horizontalStatus};