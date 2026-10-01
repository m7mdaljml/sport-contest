import type { WhoAmIPlayer } from "../meta/i-who-am-i";

import messiImg from "../../assets/images/players/messi.jpg";
import ronaldoCr7Img from "../../assets/images/players/ronaldo_cr7.jpg";
import ronaldoNazarioImg from "../../assets/images/players/ronaldo_nazario.jpg";
import peleImg from "../../assets/images/players/pele.jpg";
import maradonaImg from "../../assets/images/players/maradona.jpg";
import zidaneImg from "../../assets/images/players/zidane.jpg";
import mbappeImg from "../../assets/images/players/mbappe.jpg";
import salahImg from "../../assets/images/players/salah.jpg";
import haalandImg from "../../assets/images/players/haaland.jpg";
import henryImg from "../../assets/images/players/henry.jpg";
import ronaldinhoImg from "../../assets/images/players/ronaldinho.jpg";
import beckhamImg from "../../assets/images/players/beckham.jpg";
import maldiniImg from "../../assets/images/players/maldini.jpg";
import pirloImg from "../../assets/images/players/pirlo.jpg";
import lewandowskiImg from "../../assets/images/players/lewandowski.jpg";
import maneImg from "../../assets/images/players/mane.jpg";
import neymarImg from "../../assets/images/players/neymar.jpg";
import ibrahimovicImg from "../../assets/images/players/ibrahimovic.jpg";
import cruyffImg from "../../assets/images/players/cruyff.jpg";
import gullitImg from "../../assets/images/players/gullit.jpg";
import hagiImg from "../../assets/images/players/hagi.jpg";
import shevchenkoImg from "../../assets/images/players/shevchenko.jpg";
import rossiImg from "../../assets/images/players/rossi.jpg";
import klinsmannImg from "../../assets/images/players/klinsmann.jpg";
import cechImg from "../../assets/images/players/cech.jpg";
import schmeichelImg from "../../assets/images/players/schmeichel.jpg";
import modricImg from "../../assets/images/players/modric.jpg";
import benzemaImg from "../../assets/images/players/benzema.jpg";
import ramosImg from "../../assets/images/players/ramos.jpg";
import vanDijkImg from "../../assets/images/players/van-dijk.jpg";
import deBruyneImg from "../../assets/images/players/de-bruyne.jpg";
import iniestaImg from "../../assets/images/players/iniesta.jpg";
import xaviImg from "../../assets/images/players/xavi.jpg";
import suarezImg from "../../assets/images/players/suarez.jpg";
import buffonImg from "../../assets/images/players/buffon.jpg";
import delPieroImg from "../../assets/images/players/del-piero.jpg";
import lampardImg from "../../assets/images/players/lampard.jpg";
import gerrardImg from "../../assets/images/players/gerrard.jpg";
import kaneImg from "../../assets/images/players/kane.jpg";
import baggioImg from "../../assets/images/players/baggio.jpg";
import robertoCarlosImg from "../../assets/images/players/roberto-carlos.jpg";
import vanBastenImg from "../../assets/images/players/van-basten.jpg";
import bergkampImg from "../../assets/images/players/bergkamp.jpg";
import yashinImg from "../../assets/images/players/yashin.jpg";
import puskasImg from "../../assets/images/players/puskas.jpg";
import eusebioImg from "../../assets/images/players/eusebio.jpg";
import zoffImg from "../../assets/images/players/zoff.jpg";
import banksImg from "../../assets/images/players/banks.jpg";
import platiniImg from "../../assets/images/players/platini.jpg";
import tottiImg from "../../assets/images/players/totti.jpg";

const WHO_AM_I_PLAYERS: WhoAmIPlayer[] = [
  {
    id: "messi",
    name: { en: "Lionel Messi", ar: "ليونيل ميسي" },
    aliases: ["leo messi", "lm10", "messi"],
    image: messiImg,
    nationality: { code: "AR", name: { en: "Argentina", ar: "الأرجنتين" } },
    position: { code: "FW", name: { en: "Forward", ar: "مهاجم" } },
    difficulty: "easy",
    clues: [
      {
        type: "birthplace",
        text: {
          en: "I was born in Rosario, Argentina.",
          ar: "وُلدت في روزاريو، الأرجنتين.",
        },
      },
      {
        type: "club",
        text: {
          en: "I joined FC Barcelona's academy at the age of 13.",
          ar: "انضممت إلى أكاديمية برشلونة في سن الثالثة عشرة.",
        },
      },
      {
        type: "record",
        text: {
          en: "I became my club's all-time leading goalscorer.",
          ar: "أصبحت الهداف التاريخي لنادي.",
        },
      },
      {
        type: "trophy",
        text: {
          en: "I won the 2022 FIFA World Cup.",
          ar: "فزت بكأس العالم 2022.",
        },
      },
      {
        type: "achievement",
        text: {
          en: "I have won the Ballon d'Or eight times.",
          ar: "فزت بالكرة الذهبية ثماني مرات.",
        },
      },
    ],
  },
  {
    id: "ronaldo-cr7",
    name: { en: "Cristiano Ronaldo", ar: "كريستيانو رونالدو" },
    aliases: ["cr7", "c ronaldo", "cristiano"],
    image: ronaldoCr7Img,
    nationality: { code: "PT", name: { en: "Portugal", ar: "البرتغال" } },
    position: { code: "FW", name: { en: "Forward", ar: "مهاجم" } },
    difficulty: "easy",
    clues: [
      {
        type: "birthplace",
        text: {
          en: "I was born on the island of Madeira, Portugal.",
          ar: "وُلدت في جزيرة ماديرا، البرتغال.",
        },
      },
      {
        type: "transfer",
        text: {
          en: "I left Sporting CP for Manchester United in 2003.",
          ar: "غادرت سبورتينغ سي بي إلى مانشستر يونايتد عام 2003.",
        },
      },
      {
        type: "transfer",
        text: {
          en: "I moved to Real Madrid in 2009.",
          ar: "انتقلت إلى ريال مدريد عام 2009.",
        },
      },
      {
        type: "international",
        text: {
          en: "I captained Portugal to the 2016 European Championship.",
          ar: "قدت البرتغال إلى لقب كأس أمم أوروبا 2016.",
        },
      },
      {
        type: "achievement",
        text: {
          en: "I have won the Ballon d'Or five times.",
          ar: "فزت بالكرة الذهبية خمس مرات.",
        },
      },
    ],
  },
  {
    id: "pele",
    name: { en: "Pele", ar: "بيليه" },
    aliases: ["edison", "o rei", "king pelé"],
    image: peleImg,
    nationality: { code: "BR", name: { en: "Brazil", ar: "البرازيل" } },
    position: { code: "FW", name: { en: "Forward", ar: "مهاجم" } },
    difficulty: "easy",
    clues: [
      {
        type: "birthplace",
        text: {
          en: "I was born in Três Corações, a small town in Brazil.",
          ar: "وُلدت في تريس كوراسويس، مدينة صغيرة في البرازيل.",
        },
      },
      {
        type: "career",
        text: {
          en: "I made my first-team debut for Santos in 1956.",
          ar: "خضت أول مباراة لي مع سانتوس عام 1956.",
        },
      },
      {
        type: "record",
        text: {
          en: "I am the only player with three World Cup titles.",
          ar: "أنا اللاعب الوحيد الفائز بثلاثة ألقاب لكأس العالم.",
        },
      },
      {
        type: "competition",
        text: {
          en: "I captained Brazil at the 1970 World Cup in Mexico.",
          ar: "قُدت البرازيل في كأس العالم 1970 بالمكسيك.",
        },
      },
      {
        type: "club",
        text: {
          en: "I ended my career playing for the New York Cosmos.",
          ar: "أنهيت مسيرتي مع نيويورك كوزموس.",
        },
      },
    ],
  },
  {
    id: "maradona",
    name: { en: "Diego Maradona", ar: "دييغو مارادونا" },
    aliases: ["diego armando", "el pibe de oro", "maradona"],
    image: maradonaImg,
    nationality: { code: "AR", name: { en: "Argentina", ar: "الأرجنتين" } },
    position: { code: "MF", name: { en: "Midfielder", ar: "لاعب وسط" } },
    difficulty: "easy",
    clues: [
      {
        type: "birthplace",
        text: {
          en: "I was born in Lanús, just outside Buenos Aires.",
          ar: "وُلدت في لانوس، على مشارف بوينس آيرس.",
        },
      },
      {
        type: "club",
        text: {
          en: "I became a legend at Napoli in the 1980s.",
          ar: "أصبحت أسطورة في نابولي خلال الثمانينيات.",
        },
      },
      {
        type: "competition",
        text: {
          en: "I scored the 'Goal of the Century' against England in 1986.",
          ar: "سجّلت «هدف القرن» أمام إنجلترا عام 1986.",
        },
      },
      {
        type: "trophy",
        text: {
          en: "I captained Argentina to the 1986 FIFA World Cup.",
          ar: "قدت الأرجنتين إلى كأس العالم 1986.",
        },
      },
      {
        type: "competition",
        text: {
          en: "I lost the 1990 World Cup final to West Germany.",
          ar: "خسرت نهائي كأس العالم 1990 أمام ألمانيا الغربية.",
        },
      },
    ],
  },
  {
    id: "zidane",
    name: { en: "Zinedine Zidane", ar: "زين الدين زيدان" },
    aliases: ["zinedine", "zizou", "zidane"],
    image: zidaneImg,
    nationality: { code: "FR", name: { en: "France", ar: "فرنسا" } },
    position: { code: "MF", name: { en: "Midfielder", ar: "لاعب وسط" } },
    difficulty: "easy",
    clues: [
      {
        type: "birthplace",
        text: {
          en: "I was born in Marseille, France.",
          ar: "وُلدت في مرسيليا، فرنسا.",
        },
      },
      {
        type: "transfer",
        text: {
          en: "I joined Juventus from Bordeaux in 1996.",
          ar: "انضممت إلى يوفنتوس من بوردو عام 1996.",
        },
      },
      {
        type: "record",
        text: {
          en: "I am one of only two players sent off twice at a World Cup.",
          ar: "أنا واحد من لاعبين فقط تم طردهما مرتين في كأس العالم.",
        },
      },
      {
        type: "competition",
        text: {
          en: "My last game for France was the 2006 final, where I was sent off.",
          ar: "كانت آخر مباراة لي مع فرنسا هي نهائي 2006، وقد طُردت فيها.",
        },
      },
      {
        type: "manager",
        text: {
          en: "I later managed Real Madrid and won three La Liga titles.",
          ar: "أدرت ريال مدريد لاحقًا وفزت بثلاثة ألقاب في الليغا.",
        },
      },
    ],
  },
  {
    id: "mbappe",
    name: { en: "Kylian Mbappe", ar: "كيليان مبابي" },
    aliases: ["kylian", "donatello", "mbappé"],
    image: mbappeImg,
    nationality: { code: "FR", name: { en: "France", ar: "فرنسا" } },
    position: { code: "FW", name: { en: "Forward", ar: "مهاجم" } },
    difficulty: "easy",
    clues: [
      {
        type: "birthplace",
        text: {
          en: "I was born in Paris, France.",
          ar: "وُلدت في باريس، فرنسا.",
        },
      },
      {
        type: "career",
        text: {
          en: "I made my senior debut for Monaco at 16.",
          ar: "خضت أول مباراة لي مع موناكو في سن السادسة عشرة.",
        },
      },
      {
        type: "transfer",
        text: {
          en: "I was loaned to Borussia Dortmund for the 2017-18 season.",
          ar: "انتقلت على سبيل الإعارة إلى بوروسيا دورتموند في موسم 2017-18.",
        },
      },
      {
        type: "competition",
        text: {
          en: "I scored in the 2018 World Cup final to win it for France.",
          ar: "سجّلت في نهائي كأس العالم 2018 لأسفر عن فوز فرنسا.",
        },
      },
      {
        type: "transfer",
        text: {
          en: "I joined Paris Saint-Germain in 2018.",
          ar: "انضممت إلى باريس سان جيرمان عام 2018.",
        },
      },
    ],
  },
  {
    id: "salah",
    name: { en: "Mohamed Salah", ar: "محمد صلاح" },
    aliases: ["mo", "salah", "egypt king"],
    image: salahImg,
    nationality: { code: "EG", name: { en: "Egypt", ar: "مصر" } },
    position: { code: "FW", name: { en: "Forward", ar: "مهاجم" } },
    difficulty: "easy",
    clues: [
      {
        type: "birthplace",
        text: {
          en: "I was born in Nagrig, a village in Egypt.",
          ar: "وُلدت في نجرير، وهي قرية في مصر.",
        },
      },
      {
        type: "club",
        text: {
          en: "I made my Premier League debut for Chelsea.",
          ar: "خضت أول مباراة لي في الدوري الإنجليزي مع تشيلسي.",
        },
      },
      {
        type: "transfer",
        text: {
          en: "I joined Liverpool in 2016 from Roma.",
          ar: "انضممت إلى ليفربول عام 2016 من روما.",
        },
      },
      {
        type: "competition",
        text: {
          en: "I scored a hat-trick in the 2022 Champions League final.",
          ar: "سجّلت هاتريك في نهائي دوري الأبطال 2022.",
        },
      },
      {
        type: "trophy",
        text: {
          en: "I won the Premier League Golden Boot with 37 goals.",
          ar: "فزت بالحذاء الذهبي للدوري الإنجليزي برصيد 37 هدفًا.",
        },
      },
    ],
  },
  {
    id: "haaland",
    name: { en: "Erling Haaland", ar: "إيرلينغ هالاند" },
    aliases: ["erling", "erl", "haaland"],
    image: haalandImg,
    nationality: { code: "NO", name: { en: "Norway", ar: "النرويج" } },
    position: { code: "FW", name: { en: "Forward", ar: "مهاجم" } },
    difficulty: "easy",
    clues: [
      {
        type: "birthplace",
        text: {
          en: "I was born in Leeds, England, but I represent Norway.",
          ar: "وُلدت في ليدز، إنجلترا، لكنني ألعب لمنتخب النرويج.",
        },
      },
      {
        type: "transfer",
        text: {
          en: "I joined Manchester City in 2022.",
          ar: "انضممت إلى مانشستر سيتي عام 2022.",
        },
      },
      {
        type: "trophy",
        text: {
          en: "I won the treble with Manchester City in 2022-23.",
          ar: "فزت بالثلاثي مع مانشستر سيتي في موسم 2022-23.",
        },
      },
      {
        type: "competition",
        text: {
          en: "I scored twice in the 2023 Champions League final.",
          ar: "سجّلت هدفين في نهائي دوري الأبطال 2023.",
        },
      },
      {
        type: "record",
        text: {
          en: "I scored 36 Premier League goals in my debut season.",
          ar: "سجّلت 36 هدفًا في الدوري الإنجليزي في موسمّ الأول.",
        },
      },
    ],
  },
  {
    id: "henry",
    name: { en: "Thierry Henry", ar: "تييري هنري" },
    aliases: ["thierry", "henry", "tw"],
    image: henryImg,
    nationality: { code: "FR", name: { en: "France", ar: "فرنسا" } },
    position: { code: "FW", name: { en: "Forward", ar: "مهاجم" } },
    difficulty: "easy",
    clues: [
      {
        type: "birthplace",
        text: {
          en: "I was born in Juvisy-sur-Orge, on the outskirts of Paris.",
          ar: "وُلدت في جوفيزي سور أورج، على أطراف باريس.",
        },
      },
      {
        type: "club",
        text: {
          en: "I began my senior career at Monaco.",
          ar: "بدأت مسيرتي الاحترافية مع موناكو.",
        },
      },
      {
        type: "transfer",
        text: {
          en: "I joined Arsenal in 1999 for a then record fee.",
          ar: "انضممت إلى أرسنال عام 1999 مقابل رقم قياسي وقتها.",
        },
      },
      {
        type: "trophy",
        text: {
          en: "I played in Arsenal's unbeaten 2003-04 league season.",
          ar: "لعبت في موسم أرسنال الخالي من الهزائم 2003-04.",
        },
      },
      {
        type: "record",
        text: {
          en: "I won the Premier League Golden Boot four times.",
          ar: "فزت بالحذاء الذهبي للدوري الإنجليزي أربع مرات.",
        },
      },
    ],
  },
  {
    id: "ronaldo-nazario",
    name: { en: "Ronaldo Nazario", ar: "رونالدو نازاريو" },
    aliases: ["r9", "ronaldo fenomeno", "nazario"],
    image: ronaldoNazarioImg,
    nationality: { code: "BR", name: { en: "Brazil", ar: "البرازيل" } },
    position: { code: "FW", name: { en: "Forward", ar: "مهاجم" } },
    difficulty: "medium",
    clues: [
      {
        type: "birthplace",
        text: {
          en: "I was born in Rio de Janeiro, Brazil.",
          ar: "وُلدت في ريو دي جانيرو، البرازيل.",
        },
      },
      {
        type: "transfer",
        text: {
          en: "I started my European career at PSV Eindhoven in 1994.",
          ar: "بدأت مسيرتي الأوروبية في أيندهوفن عام 1994.",
        },
      },
      {
        type: "record",
        text: {
          en: "I won the Ballon d'Or twice.",
          ar: "فزت بالكرة الذهبية مرتين.",
        },
      },
      {
        type: "competition",
        text: {
          en: "I missed the 2002 World Cup group stage with a knee injury.",
          ar: "فاتتني مرحلة المجموعات من كأس العالم 2002 بسبب إصابة في الركبة.",
        },
      },
      {
        type: "trophy",
        text: {
          en: "I won the 1998 FIFA World Cup with Brazil.",
          ar: "فزت بكأس العالم 1998 مع البرازيل.",
        },
      },
    ],
  },
  {
    id: "ronaldinho",
    name: { en: "Ronaldinho", ar: "رونالدينيو" },
    aliases: ["dinho", "r10", "gaucho"],
    image: ronaldinhoImg,
    nationality: { code: "BR", name: { en: "Brazil", ar: "البرازيل" } },
    position: { code: "MF", name: { en: "Midfielder", ar: "لاعب وسط" } },
    difficulty: "medium",
    clues: [
      {
        type: "birthplace",
        text: {
          en: "I was born in Porto Alegre, Brazil.",
          ar: "وُلدت في بورتو أليغري، البرازيل.",
        },
      },
      {
        type: "club",
        text: {
          en: "I started my European career in France with PSG.",
          ar: "بدأت مسيرتي الأوروبية في فرنسا مع باريس سان جيرمان.",
        },
      },
      {
        type: "trophy",
        text: {
          en: "I won the Champions League with Barcelona in 2006.",
          ar: "فزت بدوري الأبطال مع برشلونة عام 2006.",
        },
      },
      {
        type: "achievement",
        text: {
          en: "I won both the Ballon d'Or and the FIFA World Player award in 2005.",
          ar: "فزت بالكرة الذهبية وجائزة أفضل لاعب في العالم عام 2005.",
        },
      },
      {
        type: "trophy",
        text: {
          en: "I won the 2002 FIFA World Cup with Brazil.",
          ar: "فزت بكأس العالم 2002 مع البرازيل.",
        },
      },
    ],
  },
  {
    id: "beckham",
    name: { en: "David Beckham", ar: "ديفيد بيكهام" },
    aliases: ["david", "daddy beckham", "beckham"],
    image: beckhamImg,
    nationality: { code: "GB-ENG", name: { en: "England", ar: "إنجلترا" } },
    position: { code: "MF", name: { en: "Midfielder", ar: "لاعب وسط" } },
    difficulty: "medium",
    clues: [
      {
        type: "birthplace",
        text: {
          en: "I was born in London, England.",
          ar: "وُلدت في لندن، إنجلترا.",
        },
      },
      {
        type: "club",
        text: {
          en: "I came through the Manchester United academy.",
          ar: "تخرّجت من أكاديمية مانشستر يونايتد.",
        },
      },
      {
        type: "trophy",
        text: {
          en: "I won six Premier League titles with Manchester United.",
          ar: "فزت بستة ألقاب في الدوري الإنجليزي مع مانشستر يونايتد.",
        },
      },
      {
        type: "international",
        text: {
          en: "My free-kick in the Euro 2004 semi-final sent England to the final.",
          ar: "ركلتي الحرة في نصف نهائي كأس أمم أوروبا 2004 أوصت إنجلترا إلى النهائي.",
        },
      },
      {
        type: "transfer",
        text: {
          en: "I joined Inter Miami in 2020.",
          ar: "انضممت إلى إنتر ميامي عام 2020.",
        },
      },
    ],
  },
  {
    id: "maldini",
    name: { en: "Paolo Maldini", ar: "باولو مالديلي" },
    aliases: ["paolo", "maldini"],
    image: maldiniImg,
    nationality: { code: "IT", name: { en: "Italy", ar: "إيطاليا" } },
    position: { code: "DF", name: { en: "Defender", ar: "مدافع" } },
    difficulty: "medium",
    clues: [
      {
        type: "birthplace",
        text: {
          en: "I was born in Trieste, Italy.",
          ar: "وُلدت في ترييستي، إيطاليا.",
        },
      },
      {
        type: "career",
        text: {
          en: "I spent 25 seasons with AC Milan and never played in the league for another club.",
          ar: "أمضيت 25 موسمًا مع ميلان ولم ألعب في الدوري لأي نادٍ آخر.",
        },
      },
      {
        type: "teammate",
        text: {
          en: "My father Cesare captained Italy at the 1962 World Cup.",
          ar: "قاد أبي تشيزاري إيطاليا في كأس العالم 1962.",
        },
      },
      {
        type: "trophy",
        text: {
          en: "I captained Milan to Champions League titles in 2003 and 2007.",
          ar: "قدت ميلان إلى لقبَي دوري الأبطال في 2003 و2007.",
        },
      },
      {
        type: "trophy",
        text: {
          en: "I won five Serie A titles with Milan.",
          ar: "فزت بخمسة ألقاب في الدوري الإيطالي مع ميلان.",
        },
      },
    ],
  },
  {
    id: "pirlo",
    name: { en: "Andrea Pirlo", ar: "أندريا بيرلو" },
    aliases: ["pirlo", "il maestro"],
    image: pirloImg,
    nationality: { code: "IT", name: { en: "Italy", ar: "إيطاليا" } },
    position: { code: "MF", name: { en: "Midfielder", ar: "لاعب وسط" } },
    difficulty: "medium",
    clues: [
      {
        type: "birthplace",
        text: {
          en: "I was born in Brescia, Italy.",
          ar: "وُلدت في بريشا، إيطاليا.",
        },
      },
      {
        type: "club",
        text: {
          en: "I played at AC Milan from 2002 to 2005, then moved to Inter.",
          ar: "لعبت في ميلان من 2002 إلى 2005، ثم انتقلت إلى إنتر.",
        },
      },
      {
        type: "international",
        text: {
          en: "I was part of Italy's 2006 World Cup-winning squad.",
          ar: "كنت ضمن منتخب إيطاليا الذي فاز بكأس العالم 2006.",
        },
      },
      {
        type: "trophy",
        text: {
          en: "I won the Champions League with Milan in 2007.",
          ar: "فزت بدوري الأبطال مع ميلان عام 2007.",
        },
      },
      {
        type: "trophy",
        text: {
          en: "I joined Juventus in 2012 and won two Serie A titles.",
          ar: "انضممت إلى يوفنتوس عام 2012 وفزت ب لقبين في الدوري الإيطالي.",
        },
      },
    ],
  },
  {
    id: "lewandowski",
    name: { en: "Robert Lewandowski", ar: "روبرت ليفاندوفسكي" },
    aliases: ["lewangoalski", "robert", "lewa"],
    image: lewandowskiImg,
    nationality: { code: "PL", name: { en: "Poland", ar: "بولندا" } },
    position: { code: "FW", name: { en: "Forward", ar: "مهاجم" } },
    difficulty: "easy",
    clues: [
      {
        type: "birthplace",
        text: {
          en: "I was born in Warsaw, Poland.",
          ar: "وُلدت في وارسو، بولندا.",
        },
      },
      {
        type: "club",
        text: {
          en: "I started my professional career at Lech Poznan.",
          ar: "بدأت مسيرتي الاحترافية في ليخ بوزنان.",
        },
      },
      {
        type: "transfer",
        text: {
          en: "I joined Borussia Dortmund in 2008 and won two Bundesliga titles.",
          ar: "انضممت إلى بوروسيا دورتموند عام 2008 وفزت ب لقبين في البوندسليغ.",
        },
      },
      {
        type: "trophy",
        text: {
          en: "I joined Bayern Munich in 2015 and won the treble in 2020.",
          ar: "انضممت إلى بايرن ميونخ عام 2015 وفزت بالثلاثي عام 2020.",
        },
      },
      {
        type: "transfer",
        text: {
          en: "I moved to FC Barcelona in 2022.",
          ar: "انتقلت إلى برشلونة عام 2022.",
        },
      },
    ],
  },
  {
    id: "mane",
    name: { en: "Sadio Mane", ar: "ساديو ماني" },
    aliases: ["sadio", "mane"],
    image: maneImg,
    nationality: { code: "SN", name: { en: "Senegal", ar: "السنغال" } },
    position: { code: "FW", name: { en: "Forward", ar: "مهاجم" } },
    difficulty: "medium",
    clues: [
      {
        type: "birthplace",
        text: {
          en: "I was born in Dakar, Senegal.",
          ar: "وُلدت في داكار، السنغال.",
        },
      },
      {
        type: "club",
        text: {
          en: "I began my European career at Red Bull Salzburg.",
          ar: "بدأت مسيرتي الأوروبية في ريد بول سالزبورغ.",
        },
      },
      {
        type: "transfer",
        text: {
          en: "I joined Liverpool in 2014 from Southampton.",
          ar: "انضممت إلى ليفربول عام 2014 من ساوثهامبتون.",
        },
      },
      {
        type: "trophy",
        text: {
          en: "I won the Premier League with Liverpool in 2020.",
          ar: "فزت بالدوري الإنجليزي مع ليفربول عام 2020.",
        },
      },
      {
        type: "international",
        text: {
          en: "I won the Africa Cup of Nations with Senegal in 2021.",
          ar: "فزت بكأس الأمم الأفريقية مع السنغال عام 2021.",
        },
      },
    ],
  },
  {
    id: "neymar",
    name: { en: "Neymar", ar: "نيمار" },
    aliases: ["neymar jr", "neyminho"],
    image: neymarImg,
    nationality: { code: "BR", name: { en: "Brazil", ar: "البرازيل" } },
    position: { code: "FW", name: { en: "Forward", ar: "مهاجم" } },
    difficulty: "medium",
    clues: [
      {
        type: "birthplace",
        text: {
          en: "I was born in Mogi das Cruzes, Brazil.",
          ar: "وُلدت في موجي داس كروزيس، البرازيل.",
        },
      },
      {
        type: "record",
        text: {
          en: "I scored for Brazil at 16 and became the youngest scorer in their history.",
          ar: "سجّلت للبرازيل وعمره 16 عامًا وأصبح أصغر هدّاف في تاريخهم.",
        },
      },
      {
        type: "trophy",
        text: {
          en: "I won the Champions League with Barcelona in 2015.",
          ar: "فزت بدوري الأبطال مع برشلونة عام 2015.",
        },
      },
      {
        type: "competition",
        text: {
          en: "I won the Golden Ball at the 2014 World Cup.",
          ar: "فزت بالكرة الذهبية في كأس العالم 2014.",
        },
      },
      {
        type: "transfer",
        text: {
          en: "I joined Paris Saint-Germain in 2017.",
          ar: "انضممت إلى باريس سان جيرمان عام 2017.",
        },
      },
    ],
  },
  {
    id: "ibrahimovic",
    name: { en: "Zlatan Ibrahimovic", ar: "زلان إبراهيموفيتش" },
    aliases: ["zlatan", "ibra", "zlatanović"],
    image: ibrahimovicImg,
    nationality: { code: "SE", name: { en: "Sweden", ar: "السويد" } },
    position: { code: "FW", name: { en: "Forward", ar: "مهاجم" } },
    difficulty: "medium",
    clues: [
      {
        type: "birthplace",
        text: {
          en: "I was born in Malmo, Sweden.",
          ar: "وُلدت في مالمو، السويد.",
        },
      },
      {
        type: "club",
        text: {
          en: "My first club in Europe was Ajax.",
          ar: "كان ناديي الأول في أوروبا أياكس.",
        },
      },
      {
        type: "competition",
        text: {
          en: "I scored twice against England at Euro 2012.",
          ar: "سجّلت هدفين أمام إنجلترا في كأس أمم أوروبا 2012.",
        },
      },
      {
        type: "trophy",
        text: {
          en: "I won the treble with Inter in 2010.",
          ar: "فزت بالثلاثي مع إنتر عام 2010.",
        },
      },
      {
        type: "trophy",
        text: {
          en: "I won another treble with Barcelona in 2011.",
          ar: "فزت بثلاثي آخر مع برشلونة عام 2011.",
        },
      },
    ],
  },
  {
    id: "cruyff",
    name: { en: "Johan Cruyff", ar: "يوهان كرويف" },
    aliases: ["johan", "cruijff", "the ic"],
    image: cruyffImg,
    nationality: { code: "NL", name: { en: "Netherlands", ar: "هولندا" } },
    position: { code: "FW", name: { en: "Forward", ar: "مهاجم" } },
    difficulty: "hard",
    clues: [
      {
        type: "birthplace",
        text: {
          en: "I was born in Amsterdam, the Netherlands.",
          ar: "وُلدت في أمستردام، هولندا.",
        },
      },
      {
        type: "record",
        text: {
          en: "I won three Ballon d'Or awards.",
          ar: "فزت بالكرة الذهبية ثلاث مرات.",
        },
      },
      {
        type: "trophy",
        text: {
          en: "I captained the Netherlands to the 1974 World Cup.",
          ar: "قدت هولندا إلى كأس العالم 1974.",
        },
      },
      {
        type: "trophy",
        text: {
          en: "I won three European Cups with Ajax.",
          ar: "فزت بثلاثة ألقاب في دوري الأبطال مع أياكس.",
        },
      },
      {
        type: "manager",
        text: {
          en: "As Barcelona's manager I won four La Liga titles and one European Cup.",
          ar: "كمدير لبرشلونة فزت بأربعة ألقاب في الليغا ولقب واحد في دوري الأبطال.",
        },
      },
    ],
  },
  {
    id: "gullit",
    name: { en: "Ruud Gullit", ar: "روود خوليت" },
    aliases: ["ruud", "gullit", "rudi"],
    image: gullitImg,
    nationality: { code: "NL", name: { en: "Netherlands", ar: "هولندا" } },
    position: { code: "MF", name: { en: "Midfielder", ar: "لاعب وسط" } },
    difficulty: "hard",
    clues: [
      {
        type: "birthplace",
        text: {
          en: "I was born in Amsterdam, the Netherlands.",
          ar: "وُلدت في أمستردام، هولندا.",
        },
      },
      {
        type: "club",
        text: {
          en: "I played in England for Chelsea, Newcastle and Manchester City.",
          ar: "لعبت في إنجلترا مع تشيلسي ونيوكاسل ومانشستر سيتي.",
        },
      },
      {
        type: "trophy",
        text: {
          en: "I won the 1988 European Cup with PSV Eindhoven.",
          ar: "فزت بكأس أوروبا 1988 مع أيندهوفن.",
        },
      },
      {
        type: "trophy",
        text: {
          en: "I lifted the 1990 FIFA World Cup with the Netherlands.",
          ar: "رفعت كأس العالم 1990 مع هولندا.",
        },
      },
      {
        type: "achievement",
        text: {
          en: "I won the Ballon d'Or in 1991.",
          ar: "فزت بالكرة الذهبية عام 1991.",
        },
      },
    ],
  },
  {
    id: "hagi",
    name: { en: "Gheorghe Hagi", ar: "جيوغره هاغي" },
    aliases: ["hagi", "ghio", "gheorghe"],
    image: hagiImg,
    nationality: { code: "RO", name: { en: "Romania", ar: "رومانيا" } },
    position: { code: "MF", name: { en: "Midfielder", ar: "لاعب وسط" } },
    difficulty: "hard",
    clues: [
      {
        type: "birthplace",
        text: {
          en: "I was born in Sacele, Romania.",
          ar: "وُلدت في ساسيلي، رومانيا.",
        },
      },
      {
        type: "teammate",
        text: {
          en: "My son Ianis Hagi also plays as an attacking midfielder.",
          ar: "ابني يانيس هاغي يلعب أيضًا في مركز الوسط الهجومي.",
        },
      },
      {
        type: "record",
        text: {
          en: "I was the top scorer of the 1987-88 European Cup.",
          ar: "كنت هدّاف كأس أوروبا 1987-88.",
        },
      },
      {
        type: "achievement",
        text: {
          en: "I was named Romanian Footballer of the Year seven times.",
          ar: "حصلت على جائزة أفضل لاعب في رومانيا سبع مرات.",
        },
      },
      {
        type: "club",
        text: {
          en: "I finished my playing career with Galatasaray in Turkey.",
          ar: "أنهيت مسيرتي مع غلطة سراي في تركيا.",
        },
      },
    ],
  },
  {
    id: "shevchenko",
    name: { en: "Andriy Shevchenko", ar: "أندري شيفتشينكو" },
    aliases: ["sheva", "shevchenko"],
    image: shevchenkoImg,
    nationality: { code: "UA", name: { en: "Ukraine", ar: "أوكرانيا" } },
    position: { code: "FW", name: { en: "Forward", ar: "مهاجم" } },
    difficulty: "hard",
    clues: [
      {
        type: "birthplace",
        text: {
          en: "I was born in Kryvyi Rih, Ukraine.",
          ar: "وُلدت في كريفي ريه، أوكرانيا.",
        },
      },
      {
        type: "achievement",
        text: {
          en: "I won the 1999 Ballon d'Or after leading Dynamo Kyiv to the Champions League semi-finals.",
          ar: "فزت بالكرة الذهبية 1999 بعد أن قُدت دينامو كييف إلى نصف نهائي دوري الأبطال.",
        },
      },
      {
        type: "transfer",
        text: {
          en: "I joined AC Milan in 1999.",
          ar: "انضممت إلى ميلان عام 1999.",
        },
      },
      {
        type: "trophy",
        text: {
          en: "I won the Serie A title with Milan in 2003-04.",
          ar: "فزت بلقب الدوري الإيطالي مع ميلان في موسم 2003-04.",
        },
      },
      {
        type: "manager",
        text: {
          en: "I later managed AC Milan.",
          ar: "أدرت ميلان لاحقًا.",
        },
      },
    ],
  },
  {
    id: "rossi",
    name: { en: "Paolo Rossi", ar: "باولو روسي" },
    aliases: ["rossi", "pablito"],
    image: rossiImg,
    nationality: { code: "IT", name: { en: "Italy", ar: "إيطاليا" } },
    position: { code: "FW", name: { en: "Forward", ar: "مهاجم" } },
    difficulty: "hard",
    clues: [
      {
        type: "birthplace",
        text: {
          en: "I was born in Prato, Italy.",
          ar: "وُلدت في براتو، إيطاليا.",
        },
      },
      {
        type: "club",
        text: {
          en: "I won three Serie A titles with Juventus.",
          ar: "فزت بثلاثة ألقاب في الدوري الإيطالي مع يوفنتوس.",
        },
      },
      {
        type: "competition",
        text: {
          en: "I won the Golden Boot at the 1982 World Cup.",
          ar: "فزت بالحذاء الذهبي في كأس العالم 1982.",
        },
      },
      {
        type: "career",
        text: {
          en: "I was banned for life over match-fixing, and my ban was lifted in 1989.",
          ar: "حُظرت مدى الحياة بسبب شبكة تلاعب بالنتائج، ورُفع الحظر عام 1989.",
        },
      },
      {
        type: "achievement",
        text: {
          en: "I won the Ballon d'Or in 1993, shared with Roberto Baggio.",
          ar: "فزت بالكرة الذهبية عام 1993، مناصفةً مع روبرتو باجيو.",
        },
      },
    ],
  },
  {
    id: "klinsmann",
    name: { en: "Jürgen Klinsmann", ar: "يورغن كلينسمان" },
    aliases: ["klinsmann", "juergen", "jürgen"],
    image: klinsmannImg,
    nationality: { code: "DE", name: { en: "Germany", ar: "ألمانيا" } },
    position: { code: "FW", name: { en: "Forward", ar: "مهاجم" } },
    difficulty: "hard",
    clues: [
      {
        type: "birthplace",
        text: {
          en: "I was born in Göppingen, West Germany.",
          ar: "وُلدت في غوبينغن، ألمانيا الغربية.",
        },
      },
      {
        type: "international",
        text: {
          en: "I was part of the West Germany team that won the 1990 World Cup.",
          ar: "كنت ضمن منتخب ألمانيا الغربية الذي فاز بكأس العالم 1990.",
        },
      },
      {
        type: "transfer",
        text: {
          en: "I left Inter for Tottenham Hotspur in 1995.",
          ar: "غادرت إنتر إلى توتنهام هوتسبير عام 1995.",
        },
      },
      {
        type: "trophy",
        text: {
          en: "I won the Bundesliga with Bayern Munich in 1998.",
          ar: "فزت بالدوري الألماني مع بايرن ميونخ عام 1998.",
        },
      },
      {
        type: "trophy",
        text: {
          en: "I won the UEFA Cup with Inter in 1998.",
          ar: "فزت بكأس الاتحاد الأوروبي مع إنتر عام 1998.",
        },
      },
    ],
  },
  {
    id: "cech",
    name: { en: "Petr Cech", ar: "بيتتش تشيك" },
    aliases: ["cech", "petr", "czech"],
    image: cechImg,
    nationality: { code: "CZ", name: { en: "Czechia", ar: "التشيك" } },
    position: { code: "GK", name: { en: "Goalkeeper", ar: "حارس مرمى" } },
    difficulty: "hard",
    clues: [
      {
        type: "birthplace",
        text: {
          en: "I was born in Plzen, then in Czechoslovakia.",
          ar: "وُلدت في بلزِن، 당시 في تشيكوسلوفاكيا.",
        },
      },
      {
        type: "club",
        text: {
          en: "I joined Chelsea in 2004 and stayed for fifteen seasons.",
          ar: "انضممت إلى تشيلسي عام 2004 وبقيت خمسة عشر موسمًا.",
        },
      },
      {
        type: "competition",
        text: {
          en: "I saved Cristiano Ronaldo's penalty in the 2008 Champions League final.",
          ar: "تصديت لركلة كريستيانو رونالدو في نهائي دوري الأبطال 2008.",
        },
      },
      {
        type: "trophy",
        text: {
          en: "I kept a clean sheet in the 2012 final, which Chelsea won on penalties.",
          ar: "حافظت على شباك نظيفة في نهائي 2012، الذي فاز به تشيلسي على ركلات الترجيح.",
        },
      },
      {
        type: "career",
        text: {
          en: "After retiring from football I played professional ice hockey.",
          ar: "بعد اعتزالي من كرة القدم لعبت هوكي الجليد الاحترافي.",
        },
      },
    ],
  },
  {
    id: "schmeichel",
    name: { en: "Lars Schmeichel", ar: "لارس شميخل" },
    aliases: ["schmeichel", "lars"],
    image: schmeichelImg,
    nationality: { code: "DK", name: { en: "Denmark", ar: "الدنمارك" } },
    position: { code: "GK", name: { en: "Goalkeeper", ar: "حارس مرمى" } },
    difficulty: "hard",
    clues: [
      {
        type: "birthplace",
        text: {
          en: "I was born in Gladsaxe, Denmark.",
          ar: "وُلدت في غلادساكس، الدنمارك.",
        },
      },
      {
        type: "teammate",
        text: {
          en: "My father Peter lifted the 1990 World Cup with Denmark.",
          ar: "أبي بيتر رفع كأس العالم عام 1990 مع الدنمارك.",
        },
      },
      {
        type: "achievement",
        text: {
          en: "I won the Premier League in 2008, 2009 and 2011.",
          ar: "فزت بالدوري الإنجليزي في 2008 و2009 و2011.",
        },
      },
      {
        type: "trophy",
        text: {
          en: "I won the Premier League and the Champions League with Manchester United in 1999.",
          ar: "فزت بالدوري الإنجليزي ودوري الأبطال مع مانشستر يونايتد عام 1999.",
        },
      },
      {
        type: "club",
        text: {
          en: "I played for Manchester City before Aston Villa and Leicester City.",
          ar: "لعبت مع مانشستر سيتي قبل أستون فيلا وليستر سيتي.",
        },
      },
    ],
  },
  {
    id: "modric",
    name: { en: "Luka Modrić", ar: "لوكا مودريتش" },
    aliases: ["modric", "luka"],
    image: modricImg,
    nationality: { code: "HR", name: { en: "Croatia", ar: "كرواتيا" } },
    position: { code: "MF", name: { en: "Midfielder", ar: "لاعب وسط" } },
    difficulty: "easy",
    clues: [
      {
        type: "birthplace",
        text: {
          en: "I was born in Zadar, Croatia.",
          ar: "وُلدت في زادار، كرواتيا.",
        },
      },
      {
        type: "club",
        text: {
          en: "I played for Real Madrid from 2012 to 2025.",
          ar: "لعبت مع ريال مدريد من 2012 إلى 2025.",
        },
      },
      {
        type: "trophy",
        text: {
          en: "I won the 2018 FIFA World Cup with Croatia.",
          ar: "فزت بكأس العالم 2018 مع كرواتيا.",
        },
      },
      {
        type: "achievement",
        text: {
          en: "I won the FIFA World Player of the Year award in 2018.",
          ar: "فزت بجائزة أفضل لاعب في العالم عام 2018.",
        },
      },
      {
        type: "international",
        text: {
          en: "I captained Croatia at the 2022 FIFA World Cup.",
          ar: "كنت قائدًا لمنتخب كرواتيا في كأس العالم 2022.",
        },
      },
    ],
  },
  {
    id: "benzema",
    name: { en: "Karim Benzema", ar: "كريم بنزيما" },
    aliases: ["karim", "benzema"],
    image: benzemaImg,
    nationality: { code: "FR", name: { en: "France", ar: "فرنسا" } },
    position: { code: "FW", name: { en: "Forward", ar: "مهاجم" } },
    difficulty: "easy",
    clues: [
      {
        type: "birthplace",
        text: {
          en: "I was born in Lyon, France.",
          ar: "وُلدت في ليون، فرنسا.",
        },
      },
      {
        type: "club",
        text: {
          en: "I joined Real Madrid in 2009.",
          ar: "انضممت إلى ريال مدريد عام 2009.",
        },
      },
      {
        type: "trophy",
        text: {
          en: "I won the 2022 FIFA World Cup with France.",
          ar: "فزت بكأس العالم 2022 مع فرنسا.",
        },
      },
      {
        type: "achievement",
        text: {
          en: "I won the Ballon d'Or in 2022.",
          ar: "فزت بالكرة الذهبية عام 2022.",
        },
      },
      {
        type: "record",
        text: {
          en: "I am Real Madrid's second-highest all-time goalscorer.",
          ar: "أنا ثاني أعلى هداف في تاريخ ريال مدريد.",
        },
      },
    ],
  },
  {
    id: "ramos",
    name: { en: "Sergio Ramos", ar: "سيرجيو راموس" },
    aliases: ["sergio", "ramos"],
    image: ramosImg,
    nationality: { code: "ES", name: { en: "Spain", ar: "إسبانيا" } },
    position: { code: "DF", name: { en: "Defender", ar: "مدافع" } },
    difficulty: "easy",
    clues: [
      {
        type: "birthplace",
        text: {
          en: "I was born in Camas, near Seville, Spain.",
          ar: "وُلدت في كاماس قرب إشبيلية، إسبانيا.",
        },
      },
      {
        type: "club",
        text: {
          en: "I spent fifteen seasons with Real Madrid.",
          ar: "قضيت خمسة عشر موسمًا مع ريال مدريد.",
        },
      },
      {
        type: "trophy",
        text: {
          en: "I won four UEFA Champions League titles with Real Madrid.",
          ar: "فزت بدوري الأبطال أربع مرات مع ريال مدريد.",
        },
      },
      {
        type: "international",
        text: {
          en: "I captained Spain at the 2018 FIFA World Cup.",
          ar: "كنت قائدًا لإسبانيا في كأس العالم 2018.",
        },
      },
      {
        type: "formerClub",
        text: {
          en: "I later played for Paris Saint-Germain.",
          ar: "لعبت لاحقًا مع باريس سان جيرمان.",
        },
      },
    ],
  },
  {
    id: "van-dijk",
    name: { en: "Virgil van Dijk", ar: "فيرجيل فان دايك" },
    aliases: ["virgil", "van dijk", "vvd"],
    image: vanDijkImg,
    nationality: { code: "NL", name: { en: "Netherlands", ar: "هولندا" } },
    position: { code: "DF", name: { en: "Defender", ar: "مدافع" } },
    difficulty: "easy",
    clues: [
      {
        type: "birthplace",
        text: {
          en: "I was born in Oisterwijk, the Netherlands.",
          ar: "وُلدت في أوسترفايك، هولندا.",
        },
      },
      {
        type: "club",
        text: {
          en: "I joined Liverpool in 2018.",
          ar: "انضممت إلى ليفربول عام 2018.",
        },
      },
      {
        type: "trophy",
        text: {
          en: "I won the 2019 UEFA Champions League with Liverpool.",
          ar: "فزت بدوري الأبطال عام 2019 مع ليفربول.",
        },
      },
      {
        type: "achievement",
        text: {
          en: "I captained Liverpool to the Premier League title in 2020.",
          ar: "قدت ليفربول إلى لقب الدوري الإنجليزي عام 2020.",
        },
      },
      {
        type: "record",
        text: {
          en: "I finished second for the Ballon d'Or in 2019.",
          ar: "حصلت على المركز الثاني في الكرة الذهبية عام 2019.",
        },
      },
    ],
  },
  {
    id: "de-bruyne",
    name: { en: "Kevin De Bruyne", ar: "كيفن دي بروين" },
    aliases: ["kevin", "de bruyne", "kdb"],
    image: deBruyneImg,
    nationality: { code: "BE", name: { en: "Belgium", ar: "بلجيكا" } },
    position: { code: "MF", name: { en: "Midfielder", ar: "لاعب وسط" } },
    difficulty: "easy",
    clues: [
      {
        type: "birthplace",
        text: {
          en: "I was born in Drongen, Belgium.",
          ar: "وُلدت في درونغن، بلجيكا.",
        },
      },
      {
        type: "club",
        text: {
          en: "I joined Manchester City in 2017.",
          ar: "انضممت إلى مانشستر سيتي عام 2017.",
        },
      },
      {
        type: "achievement",
        text: {
          en: "I was named Premier League Player of the Season in 2020 and 2022.",
          ar: "حصلت على جائزة أفضل لاعب في الدوري الإنجليزي عامي 2020 و2022.",
        },
      },
      {
        type: "trophy",
        text: {
          en: "I have won Premier League and Champions League titles with Manchester City.",
          ar: "فزت بألقاب الدوري الإنجليزي ودوري الأبطال مع مانشستر سيتي.",
        },
      },
      {
        type: "international",
        text: {
          en: "I represented Belgium at three FIFA World Cups.",
          ar: "مثلت بلجيكا في ثلاث نسخ من كأس العالم.",
        },
      },
    ],
  },
  {
    id: "iniesta",
    name: { en: "Andrés Iniesta", ar: "أندريس إنييستا" },
    aliases: ["andres", "iniesta", "el ilusionista"],
    image: iniestaImg,
    nationality: { code: "ES", name: { en: "Spain", ar: "إسبانيا" } },
    position: { code: "MF", name: { en: "Midfielder", ar: "لاعب وسط" } },
    difficulty: "medium",
    clues: [
      {
        type: "birthplace",
        text: {
          en: "I was born in Fuentealbilla, Spain.",
          ar: "وُلدت في فوينتيالبانيا، إسبانيا.",
        },
      },
      {
        type: "club",
        text: {
          en: "I spent my whole senior career at Barcelona, then joined Vissel Kobe.",
          ar: "أمضيت مسيرتي في برشلونة، ثم انضممت إلى فيسيل كوبي.",
        },
      },
      {
        type: "trophy",
        text: {
          en: "I won the 2010 FIFA World Cup with Spain.",
          ar: "فزت بكأس العالم 2010 مع إسبانيا.",
        },
      },
      {
        type: "record",
        text: {
          en: "I scored the winning goal in the 2010 World Cup final.",
          ar: "سجلت هدف الفوز في نهائي كأس العالم 2010.",
        },
      },
      {
        type: "achievement",
        text: {
          en: "I won the Ballon d'Or in 2008.",
          ar: "فزت بالكرة الذهبية عام 2008.",
        },
      },
    ],
  },
  {
    id: "xavi",
    name: { en: "Xavi Hernández", ar: "تشافي هيرنانديز" },
    aliases: ["xavi"],
    image: xaviImg,
    nationality: { code: "ES", name: { en: "Spain", ar: "إسبانيا" } },
    position: { code: "MF", name: { en: "Midfielder", ar: "لاعب وسط" } },
    difficulty: "medium",
    clues: [
      {
        type: "birthplace",
        text: {
          en: "I was born in Terrassa, Spain.",
          ar: "وُلدت في تيراسا، إسبانيا.",
        },
      },
      {
        type: "club",
        text: {
          en: "I spent seventeen seasons at Barcelona.",
          ar: "قضيت سبعة عشر موسمًا مع برشلونة.",
        },
      },
      {
        type: "trophy",
        text: {
          en: "I won the 2010 FIFA World Cup with Spain.",
          ar: "فزت بكأس العالم 2010 مع إسبانيا.",
        },
      },
      {
        type: "trophy",
        text: {
          en: "I won four UEFA Champions League titles with Barcelona.",
          ar: "فزت بدوري الأبطال أربع مرات مع برشلونة.",
        },
      },
      {
        type: "achievement",
        text: {
          en: "I won the Ballon d'Or in 2008.",
          ar: "فزت بالكرة الذهبية عام 2008.",
        },
      },
    ],
  },
  {
    id: "suarez",
    name: { en: "Luis Suárez", ar: "لويس سواريز" },
    aliases: ["luis", "suarez", "el flecha"],
    image: suarezImg,
    nationality: { code: "UY", name: { en: "Uruguay", ar: "الأوروغواي" } },
    position: { code: "FW", name: { en: "Forward", ar: "مهاجم" } },
    difficulty: "medium",
    clues: [
      {
        type: "birthplace",
        text: {
          en: "I was born in Salto, Uruguay.",
          ar: "وُلدت في سالتو، الأوروغواي.",
        },
      },
      {
        type: "club",
        text: {
          en: "I played for Liverpool, Barcelona and Atlético Madrid.",
          ar: "لعبت مع ليفربول وبرشلونة وأتليتيكو مدريد.",
        },
      },
      {
        type: "trophy",
        text: {
          en: "I won the Copa América with Uruguay in 2011.",
          ar: "فزت بكأس أمريكا مع الأوروغواي عام 2011.",
        },
      },
      {
        type: "record",
        text: {
          en: "I won the Premier League Golden Boot in 2014.",
          ar: "فزت بالحذاء الذهبي في الدوري الإنجليزي عام 2014.",
        },
      },
      {
        type: "record",
        text: {
          en: "I won the European Golden Shoe in 2014 and 2016.",
          ar: "فزت بالحذاء الذهبي الأوروبي عامي 2014 و2016.",
        },
      },
    ],
  },
  {
    id: "buffon",
    name: { en: "Gianluigi Buffon", ar: "جانلويجي بوفون" },
    aliases: ["gianluigi", "buffon", "il gigante"],
    image: buffonImg,
    nationality: { code: "IT", name: { en: "Italy", ar: "إيطاليا" } },
    position: { code: "GK", name: { en: "Goalkeeper", ar: "حارس مرمى" } },
    difficulty: "medium",
    clues: [
      {
        type: "birthplace",
        text: {
          en: "I was born in Carrara, Italy.",
          ar: "وُلدت في كرارا، إيطاليا.",
        },
      },
      {
        type: "trophy",
        text: {
          en: "I won twelve Serie A titles with Juventus.",
          ar: "فزت باثني عشر لقبًا في الدوري الإيطالي مع يوفنتوس.",
        },
      },
      {
        type: "international",
        text: {
          en: "I was Italy's captain at the 2006 FIFA World Cup.",
          ar: "كنت قائد إيطاليا في كأس العالم 2006.",
        },
      },
      {
        type: "formerClub",
        text: {
          en: "I later played for Paris Saint-Germain.",
          ar: "لعبت لاحقًا مع باريس سان جيرمان.",
        },
      },
      {
        type: "achievement",
        text: {
          en: "I was named to the FIFA World Cup All-Star Team in 2006.",
          ar: "ضُممت إلى فريق كأس العالم الأول عام 2006.",
        },
      },
    ],
  },
  {
    id: "del-piero",
    name: { en: "Alessandro Del Piero", ar: "أليساندرو دل بييرو" },
    aliases: ["alessandro", "del piero", "il capitano"],
    image: delPieroImg,
    nationality: { code: "IT", name: { en: "Italy", ar: "إيطاليا" } },
    position: { code: "FW", name: { en: "Forward", ar: "مهاجم" } },
    difficulty: "medium",
    clues: [
      {
        type: "birthplace",
        text: {
          en: "I was born in Conegliano, Italy.",
          ar: "وُلدت في كونيليانو، إيطاليا.",
        },
      },
      {
        type: "club",
        text: {
          en: "I spent almost twenty seasons at Juventus.",
          ar: "قضيت نحو عشرين موسمًا مع يوفنتوس.",
        },
      },
      {
        type: "record",
        text: {
          en: "I am Juventus' all-time leading goalscorer.",
          ar: "أنا الهداف التاريخي لنادي يوفنتوس.",
        },
      },
      {
        type: "trophy",
        text: {
          en: "I won the 1996 UEFA European Championship with Italy.",
          ar: "فزت بالبطولة الأوروبية عام 1996 مع إيطاليا.",
        },
      },
      {
        type: "trophy",
        text: {
          en: "I won the 2006 FIFA World Cup with Italy.",
          ar: "فزت بكأس العالم 2006 مع إيطاليا.",
        },
      },
    ],
  },
  {
    id: "lampard",
    name: { en: "Frank Lampard", ar: "فرانك لامبارد" },
    aliases: ["frank", "lampard", "lights"],
    image: lampardImg,
    nationality: { code: "EN", name: { en: "England", ar: "إنجلترا" } },
    position: { code: "MF", name: { en: "Midfielder", ar: "لاعب وسط" } },
    difficulty: "medium",
    clues: [
      {
        type: "birthplace",
        text: {
          en: "I was born in Romford, England.",
          ar: "وُلدت في رومفورد، إنجلترا.",
        },
      },
      {
        type: "club",
        text: {
          en: "I spent thirteen seasons at Chelsea.",
          ar: "قضيت ثلاثة عشر موسمًا مع تشيلسي.",
        },
      },
      {
        type: "record",
        text: {
          en: "I am Chelsea's all-time leading goalscorer.",
          ar: "أنا الهداف التاريخي لنادي تشيلسي.",
        },
      },
      {
        type: "trophy",
        text: {
          en: "I won the UEFA Champions League with Chelsea in 2012.",
          ar: "فزت بدوري الأبطال مع تشيلسي عام 2012.",
        },
      },
      {
        type: "international",
        text: {
          en: "I scored 11 goals in 106 appearances for England.",
          ar: "سجلت 11 هدفًا في 106 مباراة مع إنجلترا.",
        },
      },
    ],
  },
  {
    id: "gerrard",
    name: { en: "Steven Gerrard", ar: "ستيفن جيرارد" },
    aliases: ["steven", "gerrard", "steve"],
    image: gerrardImg,
    nationality: { code: "EN", name: { en: "England", ar: "إنجلترا" } },
    position: { code: "MF", name: { en: "Midfielder", ar: "لاعب وسط" } },
    difficulty: "medium",
    clues: [
      {
        type: "birthplace",
        text: {
          en: "I was born in Dagenham, England.",
          ar: "وُلدت في ديجنهام، إنجلترا.",
        },
      },
      {
        type: "club",
        text: {
          en: "I spent my whole career at Liverpool.",
          ar: "أمضيت مسيرتي كاملة مع ليفربول.",
        },
      },
      {
        type: "trophy",
        text: {
          en: "I won the 2005 UEFA Champions League with Liverpool.",
          ar: "فزت بدوري الأبطال عام 2005 مع ليفربول.",
        },
      },
      {
        type: "career",
        text: {
          en: "I slipped while dribbling in the 2014 title race against Chelsea.",
          ar: "انزلقت أثناء المراوغة في السباق على اللقب عام 2014 أمام تشيلسي.",
        },
      },
      {
        type: "record",
        text: {
          en: "I never won the Premier League as a Liverpool player.",
          ar: "لم أفز بالدوري الإنجليزي كلاعب في ليفربول.",
        },
      },
    ],
  },
  {
    id: "kane",
    name: { en: "Harry Kane", ar: "هاري كين" },
    aliases: ["harry", "kane"],
    image: kaneImg,
    nationality: { code: "EN", name: { en: "England", ar: "إنجلترا" } },
    position: { code: "FW", name: { en: "Forward", ar: "مهاجم" } },
    difficulty: "medium",
    clues: [
      {
        type: "birthplace",
        text: {
          en: "I was born in Walthamstow, London.",
          ar: "وُلدت في وولثامستو، لندن.",
        },
      },
      {
        type: "transfer",
        text: {
          en: "I moved from Tottenham Hotspur to Bayern Munich in 2023.",
          ar: "انتقلت من توتنهام هوتسبير إلى بايرن ميونخ عام 2023.",
        },
      },
      {
        type: "record",
        text: {
          en: "I became Tottenham's all-time leading goalscorer.",
          ar: "أصبحت الهداف التاريخي لنادي توتنهام.",
        },
      },
      {
        type: "record",
        text: {
          en: "I am England's all-time leading goalscorer.",
          ar: "أنا الهداف التاريخي لمنتخب إنجلترا.",
        },
      },
      {
        type: "trophy",
        text: {
          en: "I won the Bundesliga with Bayern Munich in 2023.",
          ar: "فزت بالدوري الألماني مع بايرن ميونخ عام 2023.",
        },
      },
    ],
  },
  {
    id: "baggio",
    name: { en: "Roberto Baggio", ar: "روبرتو باجيو" },
    aliases: ["baggio", "il divinino"],
    image: baggioImg,
    nationality: { code: "IT", name: { en: "Italy", ar: "إيطاليا" } },
    position: { code: "FW", name: { en: "Forward", ar: "مهاجم" } },
    difficulty: "hard",
    clues: [
      {
        type: "birthplace",
        text: {
          en: "I was born in Calcinate, Italy.",
          ar: "وُلدت في كالتشيناتي، إيطاليا.",
        },
      },
      {
        type: "club",
        text: {
          en: "I played for Juventus, Inter Milan and Fiorentina.",
          ar: "لعبت مع يوفنتوس وإنتر ميلان وفيورنتينا.",
        },
      },
      {
        type: "achievement",
        text: {
          en: "I won the 1993 Ballon d'Or.",
          ar: "فزت بالكرة الذهبية عام 1993.",
        },
      },
      {
        type: "record",
        text: {
          en: "I scored the equalizer in the 1994 World Cup final.",
          ar: "سجلت هدف التعادل في نهائي كأس العالم 1994.",
        },
      },
      {
        type: "career",
        text: {
          en: "I missed the deciding penalty in the 1994 World Cup final shootout.",
          ar: "أهدرت الركلة الحاسمة في ركلات الترجيح بنهائي كأس العالم 1994.",
        },
      },
    ],
  },
  {
    id: "roberto-carlos",
    name: { en: "Roberto Carlos", ar: "روبرتو كارلوس" },
    aliases: ["rc", "roberto carlos da silva"],
    image: robertoCarlosImg,
    nationality: { code: "BR", name: { en: "Brazil", ar: "البرازيل" } },
    position: { code: "DF", name: { en: "Defender", ar: "مدافع" } },
    difficulty: "hard",
    clues: [
      {
        type: "birthplace",
        text: {
          en: "I was born in Garça, Brazil.",
          ar: "وُلدت في غارسا، البرازيل.",
        },
      },
      {
        type: "club",
        text: {
          en: "I had two spells at Real Madrid.",
          ar: "لعبت مع ريال مدريد على مرحلتين.",
        },
      },
      {
        type: "trophy",
        text: {
          en: "I won the Champions League with Real Madrid in 2002.",
          ar: "فزت بدوري الأبطال مع ريال مدريد عام 2002.",
        },
      },
      {
        type: "record",
        text: {
          en: "My long-range goal against Manchester United in 2003 is famous.",
          ar: "هدفي البعيد ضد مانشستر يونايتد عام 2003 من أشهر أهدافي.",
        },
      },
      {
        type: "trophy",
        text: {
          en: "I also won the Champions League with Bayern Munich in 2013.",
          ar: "فزت أيضًا بدوري الأبطال مع بايرن ميونخ عام 2013.",
        },
      },
    ],
  },
  {
    id: "van-basten",
    name: { en: "Marco van Basten", ar: "ماركو فان باستن" },
    aliases: ["marco", "van basten"],
    image: vanBastenImg,
    nationality: { code: "NL", name: { en: "Netherlands", ar: "هولندا" } },
    position: { code: "FW", name: { en: "Forward", ar: "مهاجم" } },
    difficulty: "hard",
    clues: [
      {
        type: "birthplace",
        text: {
          en: "I was born in Utrecht, the Netherlands.",
          ar: "وُلدت في أوتريخت، هولندا.",
        },
      },
      {
        type: "club",
        text: {
          en: "I played for Ajax, Milan and Manchester United.",
          ar: "لعبت مع أياكس وميلان ومانشستر يونايتد.",
        },
      },
      {
        type: "trophy",
        text: {
          en: "I won the 1988 European Championship with the Netherlands.",
          ar: "فزت بالبطولة الأوروبية عام 1988 مع هولندا.",
        },
      },
      {
        type: "achievement",
        text: {
          en: "I won the Ballon d'Or three times.",
          ar: "فزت بالكرة الذهبية ثلاث مرات.",
        },
      },
      {
        type: "career",
        text: {
          en: "A serious ankle injury cut my career short.",
          ar: "أدّت إصابة كاحل خطيرة إلى إنهاء مسيرتي مبكرًا.",
        },
      },
    ],
  },
  {
    id: "bergkamp",
    name: { en: "Dennis Bergkamp", ar: "دينيس بيرخكامب" },
    aliases: ["dennis", "bergkamp"],
    image: bergkampImg,
    nationality: { code: "NL", name: { en: "Netherlands", ar: "هولندا" } },
    position: { code: "MF", name: { en: "Midfielder", ar: "لاعب وسط" } },
    difficulty: "hard",
    clues: [
      {
        type: "birthplace",
        text: {
          en: "I was born in Amsterdam, the Netherlands.",
          ar: "وُلدت في أمستردام، هولندا.",
        },
      },
      {
        type: "club",
        text: {
          en: "I played for Ajax, Inter Milan and Arsenal.",
          ar: "لعبت مع أياكس وإنتر ميلان وأرسنال.",
        },
      },
      {
        type: "trophy",
        text: {
          en: "I won three Premier League titles with Arsenal.",
          ar: "فزت بثلاثة ألقاب في الدوري الإنجليزي مع أرسنال.",
        },
      },
      {
        type: "achievement",
        text: {
          en: "I was named Premier League Player of the Year three times.",
          ar: "حصلت على جائزة أفضل لاعب في الدوري الإنجليزي ثلاث مرات.",
        },
      },
      {
        type: "achievement",
        text: {
          en: "My statue stands outside Arsenal's stadium.",
          ar: "تمثالي يقف خارج ملعب أرسنال.",
        },
      },
    ],
  },
  {
    id: "yashin",
    name: { en: "Lev Yashin", ar: "ليف ياشين" },
    aliases: ["lev", "yashin", "lev yasin"],
    image: yashinImg,
    nationality: {
      code: "SU",
      name: { en: "Soviet Union", ar: "الاتحاد السوفيتي" },
    },
    position: { code: "GK", name: { en: "Goalkeeper", ar: "حارس مرمى" } },
    difficulty: "hard",
    clues: [
      {
        type: "birthplace",
        text: {
          en: "I was born in Moscow, Soviet Union.",
          ar: "وُلدت في موسكو، الاتحاد السوفيتي.",
        },
      },
      {
        type: "club",
        text: {
          en: "I spent my whole career with Dynamo Moscow.",
          ar: "أمضيت مسيرتي كاملة مع دينامو موسكو.",
        },
      },
      {
        type: "achievement",
        text: {
          en: "I was the only goalkeeper named FIFA World Player of the Year.",
          ar: "كنت الحارس الوحيد الذي فاز بجائزة أفضل لاعب في العالم.",
        },
      },
      {
        type: "trophy",
        text: {
          en: "I won the European Cup with Dynamo Moscow in 1960.",
          ar: "فزت بكأس أوروبا مع دينامو موسكو عام 1960.",
        },
      },
      {
        type: "trophy",
        text: {
          en: "I won Olympic football gold for the Soviet Union in 1956.",
          ar: "فزت بالميدالية الذهبية في كرة القدم الأولمبية عام 1956 مع الاتحاد السوفيتي.",
        },
      },
    ],
  },
  {
    id: "puskas",
    name: { en: "Ferenc Puskás", ar: "فيرينك بوشكاش" },
    aliases: ["ferenc", "puskas", "galloping major"],
    image: puskasImg,
    nationality: { code: "HU", name: { en: "Hungary", ar: "المجر" } },
    position: { code: "FW", name: { en: "Forward", ar: "مهاجم" } },
    difficulty: "hard",
    clues: [
      {
        type: "birthplace",
        text: {
          en: "I was born in Budapest, Hungary.",
          ar: "وُلدت في بودابست، المجر.",
        },
      },
      {
        type: "club",
        text: {
          en: "I played for Real Madrid from 1956 to 1966.",
          ar: "لعبت مع ريال مدريد من 1956 إلى 1966.",
        },
      },
      {
        type: "record",
        text: {
          en: "I scored 84 goals in 84 league games for Real Madrid.",
          ar: "سجلت 84 هدفًا في 84 مباراة في الدوري مع ريال مدريد.",
        },
      },
      {
        type: "international",
        text: {
          en: "I captained Hungary's Golden Team.",
          ar: "كنت قائد «الفريق الذهبي» للمجر.",
        },
      },
      {
        type: "competition",
        text: {
          en: "I played in the 1954 World Cup final.",
          ar: "لعبت في نهائي كأس العالم 1954.",
        },
      },
    ],
  },
  {
    id: "eusebio",
    name: { en: "Eusébio", ar: "أوزيبيو" },
    aliases: ["o pantera", "eusebio da luz"],
    image: eusebioImg,
    nationality: { code: "MZ", name: { en: "Mozambique", ar: "موزمبيق" } },
    position: { code: "FW", name: { en: "Forward", ar: "مهاجم" } },
    difficulty: "hard",
    clues: [
      {
        type: "birthplace",
        text: {
          en: "I was born in Lourenço Marques, in what is now Mozambique.",
          ar: "وُلدت في لورنسو ماركيز، في ما هو اليوم موزمبيق.",
        },
      },
      {
        type: "club",
        text: {
          en: "I became a legend at Benfica.",
          ar: "أصبحت أسطورة في بنفيكا.",
        },
      },
      {
        type: "achievement",
        text: {
          en: "I was the first player to win the European Golden Shoe.",
          ar: "كنت أول لاعب يفوز بالحذاء الذهبي الأوروبي.",
        },
      },
      {
        type: "record",
        text: {
          en: "I scored twice in the 1962 European Cup final.",
          ar: "سجلت هدفين في نهائي كأس أوروبا 1962.",
        },
      },
      {
        type: "international",
        text: {
          en: "I captained Portugal at the 1966 FIFA World Cup.",
          ar: "كنت قائد البرتغال في كأس العالم 1966.",
        },
      },
    ],
  },
  {
    id: "zoff",
    name: { en: "Dino Zoff", ar: "دينو زوف" },
    aliases: ["dino", "zoff"],
    image: zoffImg,
    nationality: { code: "IT", name: { en: "Italy", ar: "إيطاليا" } },
    position: { code: "GK", name: { en: "Goalkeeper", ar: "حارس مرمى" } },
    difficulty: "hard",
    clues: [
      {
        type: "birthplace",
        text: {
          en: "I was born in Mariano del Friuli, Italy.",
          ar: "وُلدت في ماريانو ديل فريولي، إيطاليا.",
        },
      },
      {
        type: "club",
        text: {
          en: "I played for Mantova, Fiorentina, Sampdoria and Juventus.",
          ar: "لعبت مع مانتوّا وفِورنتينينا وسامبدوريا ويوفنتوس.",
        },
      },
      {
        type: "record",
        text: {
          en: "I saved a penalty in the 1970 World Cup semi-final.",
          ar: "أنقذت ركلة جزاء في نصف نهائي كأس العالم 1970.",
        },
      },
      {
        type: "international",
        text: {
          en: "I was Italy's captain when they won the 1982 FIFA World Cup.",
          ar: "كنت قائد إيطاليا حين فازوا بكأس العالم 1982.",
        },
      },
      {
        type: "record",
        text: {
          en: "I was 40 years old when I lifted the 1982 World Cup.",
          ar: "كان عمري 40 عامًا حين رفعت كأس العالم عام 1982.",
        },
      },
    ],
  },
  {
    id: "banks",
    name: { en: "Gordon Banks", ar: "غوردون بانكس" },
    aliases: ["gordon", "banks"],
    image: banksImg,
    nationality: { code: "EN", name: { en: "England", ar: "إنجلترا" } },
    position: { code: "GK", name: { en: "Goalkeeper", ar: "حارس مرمى" } },
    difficulty: "hard",
    clues: [
      {
        type: "birthplace",
        text: {
          en: "I was born in Bishopston, Stoke-on-Trent, England.",
          ar: "وُلدت في بيشوبستون، ستوك أون ترنت، إنجلترا.",
        },
      },
      {
        type: "trophy",
        text: {
          en: "I won the 1966 FIFA World Cup with England.",
          ar: "فزت بكأس العالم 1966 مع إنجلترا.",
        },
      },
      {
        type: "record",
        text: {
          en: "My famous save helped England against Brazil in 1970.",
          ar: "أنقذتي الشهيرة ساعدت إنجلترا أمام البرازيل عام 1970.",
        },
      },
      {
        type: "trophy",
        text: {
          en: "I won the FA Cup and the League Cup with Leicester City.",
          ar: "فزت بكأس إنجلترا وكأس الدوري مع ليستر سيتي.",
        },
      },
      {
        type: "career",
        text: {
          en: "I was shot at during a robbery at my home in 1970.",
          ar: "تعرضت لإطلاق نار أثناء سرقة في منزلي عام 1970.",
        },
      },
    ],
  },
  {
    id: "platini",
    name: { en: "Michel Platini", ar: "ميشيل بلاتيني" },
    aliases: ["michel", "platini", "le roi"],
    image: platiniImg,
    nationality: { code: "FR", name: { en: "France", ar: "فرنسا" } },
    position: { code: "MF", name: { en: "Midfielder", ar: "لاعب وسط" } },
    difficulty: "hard",
    clues: [
      {
        type: "birthplace",
        text: {
          en: "I was born in Jœuf, France.",
          ar: "وُلدت في جوف، فرنسا.",
        },
      },
      {
        type: "club",
        text: {
          en: "I played for Nancy, Saint-Étienne, Juventus and PSG.",
          ar: "لعبت مع نانسي وسانت إتيان ويوفنتوس وباريس سان جيرمان.",
        },
      },
      {
        type: "achievement",
        text: {
          en: "I won three consecutive Ballon d'Or awards in the 1980s.",
          ar: "فزت بالكرة الذهبية ثلاث مرات متتالية في الثمانينيات.",
        },
      },
      {
        type: "trophy",
        text: {
          en: "I won the 1984 European Championship with France.",
          ar: "فزت بالبطولة الأوروبية عام 1984 مع فرنسا.",
        },
      },
      {
        type: "manager",
        text: {
          en: "I served as the president of UEFA from 2013 to 2015.",
          ar: "ترأست الاتحاد الأوروبي من 2013 إلى 2015.",
        },
      },
    ],
  },
  {
    id: "totti",
    name: { en: "Francesco Totti", ar: "فرانشيسكو توتي" },
    aliases: ["francesco", "totti", "il principe"],
    image: tottiImg,
    nationality: { code: "IT", name: { en: "Italy", ar: "إيطاليا" } },
    position: { code: "MF", name: { en: "Midfielder", ar: "لاعب وسط" } },
    difficulty: "hard",
    clues: [
      {
        type: "birthplace",
        text: {
          en: "I was born in Rome, Italy.",
          ar: "وُلدت في روما، إيطاليا.",
        },
      },
      {
        type: "club",
        text: {
          en: "I spent my whole career at Roma.",
          ar: "أمضيت مسيرتي كاملة مع روما.",
        },
      },
      {
        type: "record",
        text: {
          en: "I am Roma's second-highest all-time goalscorer.",
          ar: "أنا ثاني أعلى هداف في تاريخ روما.",
        },
      },
      {
        type: "trophy",
        text: {
          en: "I won Serie A with Roma in 2001 and again in 2021.",
          ar: "فزت بالدوري الإيطالي مع روما عام 2001 ومرة أخرى عام 2021.",
        },
      },
      {
        type: "competition",
        text: {
          en: "I came on as a substitute in the 2006 World Cup final.",
          ar: "دخلت كبديل في نهائي كأس العالم 2006.",
        },
      },
    ],
  },
];

export { WHO_AM_I_PLAYERS };
