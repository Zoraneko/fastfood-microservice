export const getChatbotReply = (message: string): string => {
  const lower = message.toLowerCase();
  if (lower.includes('menu')) return 'Đây là menu cho bạn: Pizza, Burger, Drink.';
  if (lower.includes('đặt')) return 'Bạn có thể đặt mòn qua ứng dụng của chúng tôi!';
  return 'Xin lỗi, tôi không hiểu bạn đang đề cập về gì. Tôi có thể giúp bạn giải đáp thắc mắc về menu và đặt hàng.';
};
