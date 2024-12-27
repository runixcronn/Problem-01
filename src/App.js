import Header from "./components/Header";
import Form from "./components/Form";
import Footer from "./components/Footer";

// Bütün yapı App bileşeninde tanımlanmıştır.
// App, Header ve Form bileşenlerini ayrı dosyalara ayırarak daha modüler bir yapı oluşturmanız bekleniyor.
// Her bir bileşeni ayrı bir dosyada tanımlayın ve uygun şekilde birleştirerek kullanın.

// Image bileşeni, Next.js'te görselleri optimize etmek için kullanılan yerleşik bir bileşen.
// Daha fazla bilgi için: https://nextjs.org/docs/api-reference/next/image

// Bileşenler Tailwind CSS class'ları kullanılarak stillendirildi.
// Bu sorular Tailwind egzersizlerinden ziyade React'ı baştan tekrar etmenizi sağlayacak egzersizlerdir.
// Asıl odağınız React üzerine yoğunlaşmak olmalı.

// Bununla birlikte, Tailwind CSS ile ilgili deneyimler kazanmanız için class yapıları üzerinde denemeler yapabilirsiniz.
// Tailwind CSS resmi dokümanını inceleyerek başlayalım: https://tailwindcss.com/docs
// Tailwind CSS IntelliSense uzantısını yükleyerek verimliliğinizi arttıracağız.
// IntelliSense, class isimleri için otomatik tamamlama, hata tespiti ve hızlı düzenleme özellikleri sunar.

export default function App() {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <Header />
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <Form />
        <Footer />
      </div>
    </div>
  );
}
