import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import "./FAQs.css";
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
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

function FAQs() {
  const createContent = (title, text) => {
    return { title, text };
  };

  const content1 = [
    createContent(
      " Bu kursda qatnashib qanday ko'nikmalar olaman? ",
      "Har bir modul bo'yicha keyslar real misollar bilan tanishasiz har bir dars amaliy mashg'ulotlarni (praktikani) o'z ichiga oladi. Bundan tashqari ishtirokchilar olgan bilimlarini o'z kompaniyalarida va ish joylarida qo'llashlari uchun haftalik uy vazifalar yuboriladi hamda mentorlar tomonidan tekshirilib amaliy tavsiyalar beriladi"
    ),
    createContent(
      " Kurs qaysi kunlarni necha soatdan bo'lib o'tadi?  ",
      " Kursimizning aniq sanasi va vaqti bo'yicha bilish uchun konsultantlarimizga murojat qiling.  "
    ),
    createContent(
      " STANDART - tarifi  ",
      " 5 haftalik kurs. Tarqatma materiallar (Prezintatsiya slaydlari, o'quv qo'llanma, ruchka). Shablonlardan foydalanish imkoniyati. Uy vazifasini bajarishda mentorlar yordami"
    ),
  ];
  const content2 = [
    createContent(
      " To'lov turi qanday?  ",
      " Online Pay me, Click hamda bank orqali "
    ),
    createContent(
      " Kursga offline kelib qatnashish imkoni bo'lmasa nima bo'ladi? ",
      " Kurslarimiz offline shaklda boladi. Online kurslarimiz maxsus ameen.uz pratformasida ko'rish imkoni bor. "
    ),
    createContent(
      ` PREMIUM - tarifi `,
      ` STANDART tarifidagi imkoniyatlar va uy vazifalarini shaxsan Kozimoxon To'raev tomonidan tekshirilishi va tavsiyalar berilishi. Kurs davomida 3 marotaba (juma kunlari ) biznes tushlik doirasida mutaxassis trenerlardan dars olish va netvorking qilish. Kaizen darsiga 2ta xodim olib kelish. Yaponiya tajribasi asosida sifatli xizmat ko'rsatish tizimini joriy qilish darsga 2 ta xodim olib kelish. `
    ),
  ];

  const content3 = [
    createContent(
      " Chegirma olish tartibi qanday?  ",
      " Berilgan muddatlarda yoki dastlabki ro'yxatdan o'tgan mijozlar uchun chegirmalar bo'lishi mumkin"
    ),
    createContent(
      " Kursda qanday tariflar bor ? ",
      " Kursimiz 4 ta STANDART, PREMIUM va VIP tariflari mavjud. "
    ),
    createContent(
      " VIP - tarifi ",
      " PREMIUM tarifidagi barcha imkoniyatlar va Kozimxon To'rayev tomonidan 1 oy davomida HR tizimini yo'lga qo'yishda amaliy yordam berish (3 marotaba tashrif). Kursdan so'ng kompaniyada HR audit o'tkazib berish (Kozimxon To'rayev boshchiligida)."
    ),
  ];

  const contentTab1 = [
    createContent(
      " Kursda qatnashish necha \n pul turadi ? ",
      " Kursimizda qatnashish istagida bo‘lganlar, pastda ko‘rsatilgan raqamlarga murojaat qilishingiz mumkin. Oldindan ro‘yhatdan o‘tgan ishtirokchilarimiz uchun chegirmalarimiz mavjud. "
    ),
    createContent(
      " Chegirma olish tartibi qanday ?  ",
      " Kursimizda qatnashish istagida bo‘lganlar, pastda ko‘rsatilgan raqamlarga murojaat qilishingiz mumkin. Oldindan ro‘yhatdan o‘tgan ishtirokchilarimiz uchun chegirmalarimiz mavjud. "
    ),
    createContent(
      " To‘lov turi qanday? ",
      " Naqd va pul o'tkazish yo'li bilan. "
    ),
    createContent(
      " Kursda qatnashib, qanday amaliy ko‘nikmalar olaman ? ",
      " Har bir modul bo‘yicha hayotiy keyslar, real misollar bilan tanishasiz. "
    ),
    createContent(
      " Kursdan qoniqmagan taqdirimda to‘lovni qaytarishim mumkinmi ? ",
      " Kursdan qoniqmagan taqdirda, pulni qaytarish mumkin, faqat maxsus intervyu orqali qaytariladi. "
    ),
  ];

  const contentTab2 = [
    createContent(
      " Ushbu biznes dasturni qanday paketlarda sotib olish mumkin ? ",
      " 3 xil paketlarimiz mavjud: Korporativ paket, Standart paket, Premium paket. "
    ),
    createContent(
      " Viloyatdan “Zoom” orqali onlayn qatnashish mumkinmi ? ",
      " Xa mumkin. “Zoom” yoki boshqa mahsus platforma orqali qatnashish mumkin bo‘ladi. "
    ),
    createContent(
      " Kurs qaysi kunlari, necha soatdan bo‘lib o‘tadi ? ",
      " Kursimiz shanba va yakshanba kunlari bo'ladi. "
    ),
    createContent(
      " Dastur ishtirokchilariga konsultatsiya xizmati mavjudmi ? ",
      " Ha, premium tarifda mavjud, standart tarifda qatnashsangiz konsultatsiya hizmati uchun 50% chegirmaga ega bo‘lasiz. "
    ),
  ];

  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className="FaqCont">
      <div className="bigBoxFaq">
        <div className="container faqsCont" id="faqsCont">
          <h3 className="partTitle">
            Ko‘p beriladigan <br /> savollar
          </h3>

          <div className="faqsContBox">
            <div className="leftBox">
              {content1.map((el, ind) => {
                return (
                  <Accordion
                    component="div"
                    className="KouchAccor__accordionFaq"
                    expanded={expanded === `panel${ind}`}
                    onChange={handleChange(`panel${ind}`)}
                  >
                    <AccordionSummary
                      className="AccSummFaq"
                      component="div"
                      aria-controls="panel1d-content"
                      id="panel1d-header"
                    >
                      <Typography
                        component="span"
                        className="accordion__title faqAccTitle"
                        id="FaqTitle"
                      >
                        {el.title}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails className="accordionInner">
                      <Typography component="span" className="innerAcc__text">
                        <div className="accTextPartFaq">{el.text}</div>
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                );
              })}
            </div>
            <div className="centerBox">
              {content2.map((el, ind) => {
                return (
                  <Accordion
                    component="div"
                    className="KouchAccor__accordionFaq"
                    expanded={expanded === `panel${ind + 3}`}
                    onChange={handleChange(`panel${ind + 3}`)}
                  >
                    <AccordionSummary
                      className="AccSummFaq"
                      component="div"
                      aria-controls="panel1d-content"
                      id="panel1d-header"
                    >
                      <Typography
                        component="span"
                        className="accordion__title faqAccTitle"
                        id="FaqTitle"
                      >
                        {el.title}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails className="accordionInner">
                      <Typography component="span" className="innerAcc__text">
                        <div className="accTextPartFaq">{el.text}</div>
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                );
              })}
            </div>
            <div className="rightBox">
              {content3.map((el, ind) => {
                return (
                  <Accordion
                    component="div"
                    className="KouchAccor__accordionFaq"
                    expanded={expanded === `panel${ind + 6}`}
                    onChange={handleChange(`panel${ind + 6}`)}
                  >
                    <AccordionSummary
                      className="AccSummFaq"
                      component="div"
                      aria-controls="panel1d-content"
                      id="panel1d-header"
                    >
                      <Typography
                        component="span"
                        className="accordion__title faqAccTitle"
                        id="FaqTitle"
                      >
                        {el.title}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails className="accordionInner">
                      <Typography component="span" className="innerAcc__text">
                        <div className="accTextPartFaq">{el.text}</div>
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                );
              })}
            </div>
          </div>

          <div className="faqsContBoxTablet">
            <div className="leftBox">
              {contentTab1.map((el, ind) => {
                return (
                  <Accordion
                    component="div"
                    className="KouchAccor__accordionFaq"
                    expanded={expanded === `panel${ind}`}
                    onChange={handleChange(`panel${ind}`)}
                  >
                    <AccordionSummary
                      className="AccSummFaq"
                      component="div"
                      aria-controls="panel1d-content"
                      id="panel1d-header"
                    >
                      <Typography
                        component="span"
                        className="accordion__title faqAccTitle"
                        id="FaqTitle"
                      >
                        {el.title}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails className="accordionInner">
                      <Typography component="span" className="innerAcc__text">
                        <div className="accTextPartFaq">{el.text}</div>
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                );
              })}
            </div>
            <div className="rightBox">
              {contentTab2.map((el, ind) => {
                return (
                  <Accordion
                    component="div"
                    className="KouchAccor__accordionFaq"
                    expanded={expanded === `panel${ind + 15}`}
                    onChange={handleChange(`panel${ind + 15}`)}
                  >
                    <AccordionSummary
                      className="AccSummFaq"
                      component="div"
                      aria-controls="panel1d-content"
                      id="panel1d-header"
                    >
                      <Typography
                        component="span"
                        className="accordion__title faqAccTitle"
                        id="FaqTitle"
                      >
                        {el.title}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails className="accordionInner">
                      <Typography component="span" className="innerAcc__text">
                        <div className="accTextPartFaq">{el.text}</div>
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default FAQs;
