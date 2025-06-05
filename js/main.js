// Khai báo mảng obj
const projects = [
  {
    title: "CV CÁ NHÂN",
    goals: ["Tạo CV online đẹp mắt.", "Giới thiệu thông tin cá nhân."],
    scope: ["FUNiX", "Cá nhân"],
    team: ["Hoàng", "Nam"],
    primary: ["Trang chủ", "Thông tin cá nhân"],
    timeline: ["01/2021", "03/2021"],
  },
  {
    title: "TRANG WEB QUẢN LÝ THÚ CƯNG",
    goals: ["Quản lý thú cưng hiệu quả.", "Theo dõi sức khỏe vật nuôi."],
    scope: ["FUNiX", "Đội phát triển"],
    team: ["Trang", "Huy"],
    primary: ["Danh sách", "Thêm mới", "Tìm kiếm"],
    timeline: ["04/2021", "06/2021"],
  },
  {
    title: "TRANG WEB XEM TIN TỨC",
    goals: ["Cập nhật tin tức nhanh.", "Đa dạng nguồn tin."],
    scope: ["FUNiX", "Cộng đồng"],
    team: ["Thảo", "Khoa"],
    primary: ["Trang chủ", "Danh mục tin tức"],
    timeline: ["07/2021", "09/2021"],
  },
];

// Khai báo func global
function setProject(index) {
  localStorage.setItem("selectedProject", JSON.stringify(projects[index]));
}

$(document).ready(function () {
  // form check auth
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  $("#form-auth").submit(function (e) {
    e.preventDefault(); // Ngăn submit mặc định

    const emailInput = $("#email").val().trim();
    const errorMessage = $("#error-message");
    const detailPersonal = $(".detail-personal");

    if (regex.test(emailInput)) {
      // Email hợp lệ
      errorMessage.text("");
      errorMessage.removeClass("text-danger");
      detailPersonal.removeClass("d-none");
      // Ẩn form xác thực
      $(".check-auth").hide();
    } else {
      // Email không hợp lệ
      errorMessage.text("Email không đúng định dạng. Vui lòng nhập lại!");
      errorMessage.addClass("text-danger");
      detailPersonal.addClass("d-none");
    }
  });

  // hinden and show detail personal
  $(".resume-item").hover(
    function () {
      $(this).find(".view-more").show();
    },
    function () {
      $(this).find(".view-more").hide();
    }
  );
  $(".view-more").click(function () {
    $(this).next(".hidden").toggleClass("d-block");
    if ($(this).next(".hidden").hasClass("d-block")) {
      $(this).text("View less");
    } else {
      $(this).text("View more");
    }
  });
});
