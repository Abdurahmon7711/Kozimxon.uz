import * as React from "react";
import "./KouchAccor.css";
import { styled } from "@mui/material/styles";
import { Link } from "@mui/material";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import logo from "../../assets/navbarLogo/Logo.png";
import pdf from "../../assets/pdf/kozimxon.pdf";

// Icons

import { AiOutlineArrowDown } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<AiOutlineArrowRight sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
    fill: "#28468C",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

function KouchAccor() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className="bigBox" id="bigBox">
      <div className="container KouchAccor" id="KOuchAccorc">
        <div className="partTitle">
          <h3 className="KouchDasturi">
            Korporativ boshqaruv
            <br />
            va HR kursi modullar
          </h3>
        </div>
        <div className="KouchAccor__inner">
          <div className="KouchAccor__accordionPart">
            <Accordion
              className="KouchAccor__accordion"
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
            >
              <AccordionSummary
                aria-controls="panel1d-content"
                id="panel1d-header"
              >
                <Typography
                  className="accordion__title kouchAccTitleBl "
                  component={"div"}
                >
                  01 — HR Audit orqali kompaniyadagi kamchiliklarni aniqlash
                </Typography>
              </AccordionSummary>
              <AccordionDetails className="accordionInner">
                <Typography className="innerAcc__text" component={"div"}>
                  <div className="accTextPart">
                    Kurs boshlanishida trener bilan birgalikda kompaniyangizdagi
                    HR tizmini tahlil qilish.
                    <br />
                    HR tizimi to'g'ri joriy qilinmaganligi, kompaniyaga qancha
                    zarar keltirganligini raqamlarda hisoblash.
                    <br />
                    HR bo'limining asosiy vazifalari qanday muammolarga yechim
                    bera olishi
                  </div>
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion
              className="KouchAccor__accordion"
              expanded={expanded === "panel2"}
              onChange={handleChange("panel2")}
            >
              <AccordionSummary
                aria-controls="panel2d-content"
                id="panel2d-header"
              >
                <Typography
                  className="accordion__title kouchAccTitleBl "
                  component={"div"}
                >
                  02 — Kompaniyani missiyasi, qadriyatlari va maqsadlari
                </Typography>
              </AccordionSummary>
              <AccordionDetails className="accordionInner">
                <Typography className="innerAcc__text" component={"div"}>
                  <div className="accTextPart">
                    Kompaniya missiyasi (oliy maqsadini) aniqlash.
                    <br />
                    SMART tizimi bo'yicha maqsadlar qo'yish.
                    <br />
                    Kompaniya qadriyatlarini ishlab chiqish va ularning
                    muximligi.
                    <br />
                    Biznesni tizimli boshqarishda biznes egasi bilishi kerak
                    bo'lgan metrikalar (statistik ma'lumotlar).
                  </div>
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion
              className="KouchAccor__accordion"
              expanded={expanded === "panel3"}
              onChange={handleChange("panel3")}
            >
              <AccordionSummary
                aria-controls="panel3d-content"
                id="panel3d-header"
              >
                <Typography
                  className="accordion__title kouchAccTitleBl "
                  component={"div"}
                >
                  03 — Korporativ boshqaruv
                </Typography>
              </AccordionSummary>
              <AccordionDetails className="accordionInner">
                <Typography className="innerAcc__text" component={"div"}>
                  <div className="accTextPart">
                    Kompaniyani boshqarishda xalqaro tajribaga asoslangan
                    amalyotlar va jarayonlar tizimi.
                    <br />
                    Ijrochi derektor (SEO)dan va HR menejerdan talab qilinishi
                    kerak bo'lgan vazifalar va ularga qo'yiladigan metrikalar.
                    <br />
                    Korporativ boshqaruvda direktorlar kengashining tuzilmasi va
                    vazifalari.
                  </div>
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion
              className="KouchAccor__accordion"
              expanded={expanded === "panel4"}
              onChange={handleChange("panel4")}
            >
              <AccordionSummary
                aria-controls="panel4d-content"
                id="panel4d-header"
              >
                <Typography
                  className="accordion__title kouchAccTitleBl "
                  component={"div"}
                >
                  04 — Kompaniyada tizimlashtirish
                </Typography>
              </AccordionSummary>
              <AccordionDetails className="accordionInner">
                <Typography className="innerAcc__text" component={"div"}>
                  <div className="accTextPart">
                    Biznesni tizimlashtirish jarayonlari nimalardan iborat va
                    uni qanday amalga oshirish mumkin.
                    <br />
                    Kompaniyani tashkiliy tuzulmasini yaratish va har bir
                    lavozim uchun lavozim yo'riqnomasini ishlab chiqish.
                    <br />
                    Ichki nizomlar va standart operasion proseduralarni ishlab
                    chiqish.
                    <br />
                    Kompaniyada Checks & Balances (nazorat) tizimini yo'lga
                    qo'yish.
                  </div>
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion
              className="KouchAccor__accordion"
              expanded={expanded === "panel5"}
              onChange={handleChange("panel5")}
            >
              <AccordionSummary
                aria-controls="panel5d-content"
                id="panel5d-header"
              >
                <Typography
                  className="accordion__title kouchAccTitleBl "
                  component={"div"}
                >
                  05 — HR rejalash (HR Planning)
                </Typography>
              </AccordionSummary>
              <AccordionDetails className="accordionInner">
                <Typography className="innerAcc__text" component={"div"}>
                  <div className="accTextPart">
                    Kompaniya maqsadlariga erishish uchun qancha xodim olish
                    kerak
                    <br />
                    Kompaniyada kelajakda ochilishi mumkin bo'lgan ish
                    o'rinlarini obyektiv tahlil qilish.
                    <br />
                    Kompaniyada qancha ishchi kerakligini aniqlash bo'yicha
                    amaliy mashg'lot.
                  </div>
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion
              className="KouchAccor__accordion"
              expanded={expanded === "panel6"}
              onChange={handleChange("panel6")}
            >
              <AccordionSummary
                aria-controls="panel6d-content"
                id="panel6d-header"
              >
                <Typography
                  className="accordion__title kouchAccTitleBl "
                  component={"div"}
                >
                  06 — Kompaniyada samarali ishga olish tizimini o'rnatish
                </Typography>
              </AccordionSummary>
              <AccordionDetails className="accordionInner">
                <Typography className="innerAcc__text" component={"div"}>
                  <div className="accTextPart">
                    Ishga qabul qilish tartibi uchun "Ish anketa"sini tuzish
                    <br />
                    Yangi xodimni saralashda va ishga qabul qilishda amaliy
                    instrumentlar
                    <br />
                    Xalqaro kompaniyalarda qo'llaniladigan STAR tizimi bo'yicha
                    intervyu o'tkazish (amaliy mashg'ulotlar)
                  </div>
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion
              className="KouchAccor__accordion"
              expanded={expanded === "panel7"}
              onChange={handleChange("panel7")}
            >
              <AccordionSummary
                aria-controls="panel7d-content"
                id="panel7d-header"
              >
                <Typography
                  className="accordion__title kouchAccTitleBl "
                  component={"div"}
                >
                  07 — Yangi kelganlar uchun samarali moslashish / (adaptasiya)
                  jarayonini qurish
                </Typography>
              </AccordionSummary>
              <AccordionDetails className="accordionInner">
                <Typography className="innerAcc__text" component={"div"}>
                  <div className="accTextPart">
                    Kompaniyaga yangi kelganlar uchun moslashish rejalarini
                    ishlab chiqish
                    <br />
                    Tanishtiruv prezentatsiyasiyaga nimalar kiritilishi kerak
                    <br />
                    Adaptasiya treninglari samarali o'tganligini aniqlash
                    yo'llari
                  </div>
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion
              className="KouchAccor__accordion"
              expanded={expanded === "panel8"}
              onChange={handleChange("panel8")}
            >
              <AccordionSummary
                aria-controls="panel8d-content"
                id="panel8d-header"
              >
                <Typography
                  className="accordion__title kouchAccTitleBl "
                  component={"div"}
                >
                  08 — Xodimlarni baholash tizimini joriy qilish (Performance
                  Review)
                </Typography>
              </AccordionSummary>
              <AccordionDetails className="accordionInner">
                <Typography className="innerAcc__text" component={"div"}>
                  <div className="accTextPart">
                    Xodimlarning faoliyatlarini tahlil qilish va baholash
                    <br />
                    Shaxsiy ish rejasi va ummumiy biznes-rejani qanday bog'lash
                    mumkin?
                    <br />
                    Kompaniyada rivojlanish standart tartibini ishlab chiqish
                    yo'llari
                  </div>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              className="KouchAccor__accordion"
              expanded={expanded === "panel9"}
              onChange={handleChange("panel9")}
            >
              <AccordionSummary
                aria-controls="panel9d-content"
                id="panel9d-header"
              >
                <Typography
                  className="accordion__title kouchAccTitleBl "
                  component={"div"}
                >
                  09 — Maosh va intiyozlar tizimi
                </Typography>
              </AccordionSummary>
              <AccordionDetails className="accordionInner">
                <Typography className="innerAcc__text" component={"div"}>
                  <div className="accTextPart">
                    Maosh belgilashda inobatga olish kerak bo'lgan omillar
                    <br />
                    Lavozim qiymatini belgilash tizimi
                    <br />
                    Imtiyozlar tizimini to'g'ri joriy qilish
                    <br />
                    Grading (lavozim toifalari) tizimini joriy qilish
                  </div>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              className="KouchAccor__accordion"
              expanded={expanded === "panel10"}
              onChange={handleChange("panel10")}
            >
              <AccordionSummary
                aria-controls="panel10d-content"
                id="panel10d-header"
              >
                <Typography
                  className="accordion__title kouchAccTitleBl "
                  component={"div"}
                >
                  10 — KPI tizimini joriy qilish
                </Typography>
              </AccordionSummary>
              <AccordionDetails className="accordionInner">
                <Typography className="innerAcc__text" component={"div"}>
                  <div className="accTextPart">
                    Kompaniyaning asosiy muvaffaqiyat omillarini aniqlash
                    <br />
                    Xodimlarga to'g'ri maqsad va rejalar qo'yish <br />
                    Ish faoliyati va natijaga bog'liq bo'lgan bonus tizimini
                    yaratish (Pay for Performance)
                    <br />
                    KPI tizimdagi salbiy oqibatlarni oldini olish
                    <br />
                    Biznesni tizimli boshqarishda biznes egasi bilishi kerak
                    bo'lgan metrikalar
                  </div>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              className="KouchAccor__accordion"
              expanded={expanded === "panel11"}
              onChange={handleChange("panel11")}
            >
              <AccordionSummary
                aria-controls="panel11d-content"
                id="panel11d-header"
              >
                <Typography
                  className="accordion__title kouchAccTitleBl "
                  component={"div"}
                >
                  11 — Xodimlarning kasbiy va shaxsiy rivojlanishi
                </Typography>
              </AccordionSummary>
              <AccordionDetails className="accordionInner">
                <Typography className="innerAcc__text" component={"div"}>
                  <div className="accTextPart">
                    Kompaniyadagi ta'lim ehtiyojlarini aniqlash
                    <br />
                    Xodimlarni rivojlantirish ehtiyojlariga ko'ra o'quv
                    dasturlarini ishlab chiqish <br />
                    Korporativ trening tashkil qilish inobatga olinishi kerak
                    bo'lgan omillar
                  </div>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              className="KouchAccor__accordion"
              expanded={expanded === "panel12"}
              onChange={handleChange("panel12")}
            >
              <AccordionSummary
                aria-controls="panel12d-content"
                id="panel12d-header"
              >
                <Typography
                  className="accordion__title kouchAccTitleBl "
                  component={"div"}
                >
                  12 — Real hayotda ishlaydigan motivasiya dasturlari
                </Typography>
              </AccordionSummary>
              <AccordionDetails className="accordionInner">
                <Typography className="innerAcc__text" component={"div"}>
                  <div className="accTextPart">
                    Qanday turdagi motivasiya dasturlari mavjud?
                    <br />
                    Xodimlarni rag'batlantirish uchun kompaniyada obyektiv
                    baholash mezonlarini qanday yaratish kerak
                    <br />
                    Motivasiya dasturlarini qo'llagan xolda xodimlarni
                    samaradorligini oshirish va kompaniya da olib qolish
                    rejasini tuzib chiqish
                    <br />
                    Xodimlarni tizimli boshqarishda ularning mamnunlilik
                    darajalarini bilish va tahlil qilish yo'llari
                  </div>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              className="KouchAccor__accordion"
              expanded={expanded === "panel13"}
              onChange={handleChange("panel13")}
            >
              <AccordionSummary
                aria-controls="panel13d-content"
                id="panel13d-header"
              >
                <Typography
                  className="accordion__title kouchAccTitleBl "
                  component={"div"}
                >
                  13 — Kompaniyada o'zgarishlarni samarali boshqarish (Change
                  Managment)
                </Typography>
              </AccordionSummary>
              <AccordionDetails className="accordionInner">
                <Typography className="innerAcc__text" component={"div"}>
                  <div className="accTextPart">
                    Kompaniyadagi yangi tizimlarni joriy qilishda bo'ladigan
                    qarshiliklarni samarali hal etish <br />
                    Xodimlarni komfort zonalaridan chiqib o'zgarishlarga tez
                    moslashishlarini ta'minlash usullari
                    <br />
                    O'zgarishlarni samarali tadbiq qilish yo'llari
                  </div>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              className="KouchAccor__accordion"
              expanded={expanded === "panel14"}
              onChange={handleChange("panel14")}
            >
              <AccordionSummary
                aria-controls="panel14d-content"
                id="panel14d-header"
              >
                <Typography
                  className="accordion__title kouchAccTitleBl "
                  component={"div"}
                >
                  14 — Yaponiyaning KAIZEN tizimi.
                </Typography>
              </AccordionSummary>
              <AccordionDetails className="accordionInner">
                <Typography className="innerAcc__text" component={"div"}>
                  <div className="accTextPart">
                    Davomiy o'sish va rivojlanish uchun KAIZEN tizimini joriy
                    qilish
                    <br />
                    Kundalik hayotda va ish jarayonida qo'llaniladigan KAIZEN
                    misollar
                    <br />
                    Ish joyini tartibga soluvchi 5S tizimi
                    <br />
                    Vizual boshqaruv orqali samaradorlikni oshirish
                  </div>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              className="KouchAccor__accordion"
              expanded={expanded === "panel15"}
              onChange={handleChange("panel15")}
            >
              <AccordionSummary
                aria-controls="panel15d-content"
                id="panel15d-header"
              >
                <Typography
                  className="accordion__title kouchAccTitleBl "
                  component={"div"}
                >
                  15 — Muzokara olib borish sanati
                </Typography>
              </AccordionSummary>
              <AccordionDetails className="accordionInner">
                <Typography className="innerAcc__text" component={"div"}>
                  <div className="accTextPart">
                    Xodimlar bilan samarali kelishuv qilish yo'llari <br />
                    Samarali muzokara olib borishda inobatga olinadigan muxim
                    omillar <br />
                    Biznesda Win/Win qoidasidan samarali foydalanish usullari
                  </div>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              className="KouchAccor__accordion"
              expanded={expanded === "panel16"}
              onChange={handleChange("panel16")}
            >
              <AccordionSummary
                aria-controls="panel16d-content"
                id="panel16d-header"
              >
                <Typography
                  className="accordion__title kouchAccTitleBl "
                  component={"div"}
                >
                  16 — Yaponiya tajribasi asosida sifatli xizmat ko'rsatish
                  tizimini joriy qilish
                </Typography>
              </AccordionSummary>
              <AccordionDetails className="accordionInner">
                <Typography className="innerAcc__text" component={"div"}>
                  <div className="accTextPart">
                    Xizmat ko'rsatishdagi oltin qoidalar <br />
                    Xizmat ko'rsatishdagi ta'qiqlangan amallar <br />
                    Yaponiyaning xizmat ko'rsatish tizimi va undan olish mumkin
                    bo'lgan insaytlar <br />
                    Mijozlarni qaytib kelishini ta'minlovchi xizmat ko'rsatish
                    tizimi
                  </div>
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className="KouchAccor__cardPart  ">
            <Box>
              <Card
                className="Kouch__card  kouchCardRight KouchAccor__cardPartBl"
                variant="outlined"
              >
                <React.Fragment>
                  <CardContent>
                    <Typography className="Kouch__cardTitle" variant="h5">
                      Kurs o‘quv dasturining elektron PDF varianti
                    </Typography>
                    <Typography
                      sx={{ fontSize: 14 }}
                      className="Kouch__cardContent"
                      color="text.secondary"
                      gutterBottom
                    >
                      Kursimiz dasturi haqida to'liq ma'lumot bilan quyidagi Pdf
                      faylda tanishib chiqishingiz mumkin.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <a
                      className="Kouch__cardLink"
                      href={pdf}
                      download="Kurs o‘quv dasturining elektron PDF varianti "
                    >
                      PDF yuklab olish →
                    </a>
                    {/* <Link to="#" className='Kouch__cardLink'>PDF yuklab olish → </Link> */}
                  </CardActions>
                </React.Fragment>
              </Card>
            </Box>
            <Box>
              <Card className="Kouch__card  kouchCardRight " variant="outlined">
                <React.Fragment>
                  <CardContent>
                    <Typography className="Kouch__cardTitle" variant="h5">
                      Kouching dasturimizda o‘qish uchun ro‘yxatdan o‘ting!
                    </Typography>
                    <Typography
                      sx={{ fontSize: 14 }}
                      className="Kouch__cardContent"
                      color="text.secondary"
                      gutterBottom
                    >
                      O'z biznesingizdagi muammolarni mutaxasis bilan hal
                      qiling.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    {/* <Link to="#Footer" className='Kouch__cardLink'>Ro‘yxatdan o‘tish →</Link> */}
                    <a href="#Footer" className="Kouch__cardLink">
                      Ro‘yxatdan o‘tish →
                    </a>
                  </CardActions>
                </React.Fragment>
              </Card>
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
}

export default KouchAccor;
