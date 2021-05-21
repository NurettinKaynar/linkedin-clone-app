import { Info, FiberManualRecord } from "@material-ui/icons";
import React from "react";
import "./Widgets.css";
function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecord />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn Haberler</h2>
        <Info />
      </div>
      {newsArticle(
        "Linkedin Uygulaması tamamlandı",
        "15. proje olan bu uygulamayı tamamlamak benim için bir onurdur dedi Nurettin KAYNAR"
      )}
      {newsArticle(
        "Türkiye Covidde Tam Kapanmaya Gidiyor",
        "29 Nisandan itibaren 18 gün boyunca türkiye tam kapanacağını duyurdu"
      )}
      {newsArticle(
        "Türk SİHA'ları büyük bir eşiği geçiyor",
        "Türk savunma sanayisi, silahlı insansız hava araçlarının (SİHA) kullanabileceği mühimmatlar arasına Kanatlı Güdüm Kiti Silah Sistemi'ni (KGK) eklemeyi başardı."
      )}
      {newsArticle(
        "ABD'li teknoloji şirketleri net kar ve gelirlerini artırdı ",
        "Microsoft'un geliri ocak-mart döneminde geçen yılın aynı dönemine kıyasla yüzde 19 artışla 41,7 milyar dolara ulaşırken, karı yüzde 44 artarak 15,5 milyar dolara yükseldi."
      )}
      {newsArticle(
        "PlayStation Network çöktü! Servise erişilemiyor ",
        "PlayStation oyuncularının buluşma noktası olan PlayStation Network çöktü mü? Servislere erişilemiyor oluşu PlayStation oyuncularını paniğe sürükledi."
      )}
      {newsArticle(
        "MIUI 12.5’li Redmi K40 Gaming Edition tanıtıldı ",
        "Xiaomi'nin alt markası olarak faaliyet gösteren Redmi, ilk oyuncu telefonu Redmi K40 Gaming Edition modelini duyurdu. İşte cihazın fiyatı ve özellikleri..."
      )}
      {newsArticle(
        "Toyota’dan sürücüsüz otomobil için dev hamle ",
        "esla ile elektrikli ve otonom araç sektöründe büyük sıçrayışlar yaşanması, diğer otomobil üreticilerini de bu alanda çalışmaya zorlandı..."
      )}
    </div>
  );
}

export default Widgets;
