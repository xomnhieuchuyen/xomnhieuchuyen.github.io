// ============================================================
// FILE NÀY LÀ NƠI DUY NHẤT BẠN CẦN SỬA KHI THÊM TRUYỆN MỚI.
// Không cần biết code — chỉ cần copy 1 khối { ... } bên dưới,
// dán vào cuối mảng (trước dấu ] cuối cùng), rồi đổi nội dung.
// Xem hướng dẫn chi tiết trong file HUONG-DAN.txt
// ============================================================

const STORIES = [
  {
    // "slug" là phần đường dẫn, KHÔNG dấu, không khoảng trắng, không trùng nhau
    slug: "dem-mua-thang-nam",
    title: "Đêm mưa tháng Năm",
    date: "07/09/2026",
    excerpt: "Một cơn mưa bất chợt kéo hai người xa lạ về chung một mái hiên, và một câu chuyện cũ bất ngờ được kể lại.",

    // Mỗi dòng trong ngoặc kép là MỘT đoạn văn. Muốn xuống đoạn mới thì thêm dòng mới.
    paragraphs: [
      "Mưa đổ xuống thành phố lúc bảy giờ tối, đúng vào khoảng thời gian mà Hạ ghét nhất trong ngày — khi đèn đường vừa bật, còn bầu trời thì chưa chịu tối hẳn.",
      "Cô đứng nép vào mái hiên một tiệm sách cũ, nhìn dòng người vội vã băng qua những vũng nước phản chiếu ánh đèn neon. Bên cạnh cô, một người đàn ông trung niên cũng trú mưa, tay ôm một chồng sách buộc dây thun.",
      "\"Cô cũng chờ mưa tạnh à?\" — ông ta hỏi, giọng nhẹ như sợ phá vỡ tiếng mưa. Hạ gật đầu, không nói gì. Có những buổi tối, im lặng là câu trả lời an toàn nhất.",
      "Nhưng người đàn ông không cần câu trả lời. Ông bắt đầu kể, chậm rãi, về một đêm mưa khác, cách đây đã hai mươi năm, khi ông còn là một chàng trai trẻ đứng chờ ai đó không bao giờ đến.",
      "Hạ lắng nghe, và trong tiếng mưa rơi đều trên mái tôn, cô nhận ra câu chuyện của người lạ ấy, kỳ lạ thay, lại giống câu chuyện của chính mình đến từng chi tiết."
    ],

    // Để trống "" nếu truyện này chưa có audio hoặc video
    audio: "audio/dem-mua-thang-nam.mp3",
    youtube: "dQw4w9WgXcQ"
  },

  {
    slug: "nguoi-giu-vuon",
    title: "Người giữ vườn",
    date: "01/09/2026",
    excerpt: "Ông lão giữ khu vườn bỏ hoang cuối phố mang một bí mật mà chỉ lũ trẻ trong xóm mới đủ can đảm hỏi.",
    paragraphs: [
      "Khu vườn cuối con phố nhỏ đã không còn ai lui tới từ rất lâu, ngoại trừ ông Tư — người mà lũ trẻ trong xóm vẫn gọi là \"ông giữ vườn\", dù chẳng ai thuê ông làm việc đó cả.",
      "Mỗi sáng, ông đều ra tưới những gốc cây đã chết khô từ mùa hạn trước. Không ai hiểu vì sao, cho đến ngày con bé út nhà bác Ba đánh liều bước qua hàng rào gãy để hỏi ông một câu."
    ],
    audio: "",
    youtube: ""
  }
];
