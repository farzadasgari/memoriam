export const person = {
  name: 'Maryam Mirzakhani',
  persianName: 'مریم میرزاخانی',
  born: '12 May 1977',
  died: '14 July 2017',
}

export const portrait = {
  src: `${import.meta.env.BASE_URL}images/maryam-mirzakhani.jpg`,
  alt: 'Portrait of Maryam Mirzakhani',
  credit: '',
  creditUrl: '',
  license: '',
  licenseUrl: '',
}

export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'research', label: 'Research & Legacy' },
  { id: 'timeline', label: 'Timeline' },
  { id: 'remembrance', label: 'Remembrance' },
]

export const hero = {
  eyebrow: 'In memoriam · 1977 - 2017',
  role: 'Iranian mathematician · Professor at Stanford University',
  lead: 'She devoted her career to the geometry of curved surfaces, and to the vast spaces of all the shapes those surfaces can take. In 2014 she became the first woman to receive the Fields Medal.',
  tribute:
    'This page is a small, independent tribute to her curiosity, her patience and her quiet daring.',
}

export const about = {
  paragraphs: [
    {
      text: 'Maryam Mirzakhani was born in Tehran on 12 May 1977. As a child she loved books and imagined becoming a writer. Mathematics came into focus during her years at the Farzanegan schools, which educate exceptionally talented students.',
      sources: ['mactutor', 'quanta'],
    },
    {
      text: 'In 1994 and 1995 she represented Iran at the International Mathematical Olympiad, winning gold medals: 41 of 42 points in Hong Kong, then a perfect 42 of 42 in Toronto. She went on to study mathematics at Sharif University of Technology, graduating in 1999.',
      sources: ['mactutor'],
    },
    {
      text: 'At Harvard University she completed her doctorate in 2004 under Curtis McMullen, himself a Fields Medalist. She then held a Clay Research Fellowship and an assistant professorship at Princeton, before becoming a professor at Stanford University (sources give 2008 or 2009 for the move).',
      sources: ['mactutor', 'stanford'],
    },
    {
      text: 'Colleagues describe a mathematician who thought in pictures and covered large sheets of paper with drawings of surfaces. She called herself a "slow" mathematician, happy to stay with a hard problem for years. She died of cancer on 14 July 2017, at the age of 40.',
      sources: ['quanta', 'stanford'],
    },
  ],
  journey: [
    {
      when: '1980s - 1995',
      title: 'Farzanegan schools, Tehran',
      text: 'Middle and high school for exceptionally talented students.',
      sources: ['mactutor'],
    },
    {
      when: '1995 - 1999',
      title: 'Sharif University of Technology',
      text: 'B.Sc. in mathematics.',
      sources: ['mactutor'],
    },
    {
      when: '1999 - 2004',
      title: 'Harvard University',
      text: 'Ph.D. under Curtis T. McMullen.',
      sources: ['mactutor', 'wikipedia'],
    },
    {
      when: '2004 - 2008',
      title: 'Clay Research Fellow · Princeton',
      text: 'Assistant Professor of Mathematics at Princeton University.',
      sources: ['imu', 'mactutor'],
    },
    {
      when: '2008/09 - 2017',
      title: 'Stanford University',
      text: 'Professor of Mathematics until her death.',
      sources: ['stanford', 'mactutor'],
    },
  ],
  facts: [
    { label: 'Born', value: '12 May 1977, Tehran, Iran' },
    { label: 'Died', value: '14 July 2017, Stanford, California' },
    { label: 'Field', value: 'Geometry and dynamical systems' },
    { label: 'Doctoral advisor', value: 'Curtis T. McMullen' },
    {
      label: 'Doctoral thesis (2004)',
      value:
        'Simple geodesics on hyperbolic surfaces and the volume of the moduli space of curves',
    },
  ],
  factsSources: ['wikipedia', 'mactutor'],
}

export const achievements = [
  {
    icon: 'award',
    year: '2014',
    title: 'Fields Medal',
    text: 'Awarded on 13 August 2014 at the International Congress of Mathematicians in Seoul, for her contributions to the dynamics and geometry of Riemann surfaces and their moduli spaces. She was the first woman and the first Iranian to receive the medal.',
    sources: ['imu', 'mactutor', 'wikipedia'],
  },
  {
    icon: 'hexagon',
    year: '2004',
    title: 'Counting simple closed geodesics',
    text: 'In her doctoral thesis she showed that on a hyperbolic surface of genus g, the number of simple closed geodesics up to length L grows polynomially, like a constant times L to the power 6g−6, rather than exponentially.',
    sources: ['imu', 'quanta'],
  },
  {
    icon: 'link',
    year: '2007',
    title: 'A new proof of Witten’s conjecture',
    text: 'By computing volumes of moduli spaces she gave a new proof of a conjecture of Edward Witten (first proved by Maxim Kontsevich), linking it to elementary counting problems for geodesics.',
    sources: ['imu', 'mactutor'],
  },
  {
    icon: 'repeat',
    year: '2013-15',
    title: 'Rigidity on moduli space',
    text: 'With Alex Eskin, and in part Amir Mohammadi, she proved that closures of complex geodesics in moduli space are surprisingly regular rather than fractal, an analogue of Marina Ratner’s celebrated rigidity results.',
    sources: ['imu', 'quanta'],
  },
  {
    icon: 'star',
    year: '1994-95',
    title: 'Olympiad gold medals',
    text: 'Gold at the International Mathematical Olympiad in 1994 (41/42) and again in 1995 with a perfect score (42/42). Reports describe her as the first Iranian woman to win an Olympiad gold medal.',
    sources: ['mactutor', 'wikipedia'],
  },
  {
    icon: 'bookmark',
    year: '2009-17',
    title: 'Prizes and academies',
    text: 'Blumenthal Award (2009), Satter Prize (2013), Clay Research Award (2014); elected to the American Philosophical Society and as a foreign associate of the French Academy of Sciences (2015), the US National Academy of Sciences (2016) and the American Academy of Arts and Sciences (2017).',
    sources: ['mactutor', 'wikipedia'],
  },
]

export const research = {
  intro:
    'Mirzakhani worked where geometry, topology, complex analysis and dynamics meet. These are three of her main ideas, explained without the heavy machinery.',
  topics: [
    {
      id: 'geodesics',
      kicker: 'Hyperbolic geometry',
      title: 'Straight lines on curved surfaces',
      paragraphs: [
        'A surface is classified by its genus, the number of handles: a sphere has genus 0, a coffee cup genus 1, a pretzel genus 3. Giving a surface a hyperbolic geometry lets us measure lengths and angles in a non-Euclidean way. A closed geodesic is a loop that cannot be shortened by deforming it, the closest thing to a straight line that closes up.',
        'It was classically known that the number of closed geodesics of length up to L grows exponentially. Mirzakhani counted only the simple ones, those that never cross themselves. The growth is completely different: it is polynomial.',
      ],
      formula: {
        before: 'N(L) ∼ c · L',
        sup: '6g−6',
        label: 'N of L is asymptotic to c times L to the power 6g minus 6',
        caption:
          'N(L) is the number of simple closed geodesics of length at most L on a closed hyperbolic surface of genus g. The constant c depends on the surface.',
      },
      intuition:
        'Draw every possible loop on a pretzel-shaped surface and almost all of them tangle across themselves. The loops that never do are rare, and she worked out exactly how rare.',
      sources: ['imu', 'quanta'],
    },
    {
      id: 'moduli',
      kicker: 'Moduli spaces',
      title: 'Studying every surface at once',
      paragraphs: [
        'Rather than study one surface, Mirzakhani studied all hyperbolic shapes of a surface together. This collection is called moduli space; for a closed surface of genus g it has dimension 6g−6, and it carries a natural notion of volume.',
        'Generalising an identity of McShane, she tied those volumes to the geodesic-counting problem and found a recursive formula for them. A by-product was a new proof of Witten’s conjecture on intersection numbers, first proved by Kontsevich in 1992, connecting an idea from physics to counting loops on individual surfaces.',
      ],
      intuition:
        'Picture a map on which every point is a different shape of the same surface. Measuring the size of regions on that map reveals facts about each individual surface.',
      sources: ['imu', 'mactutor'],
    },
    {
      id: 'dynamics',
      kicker: 'Dynamical systems',
      title: 'Motion through the space of shapes',
      paragraphs: [
        'Moduli space is also a place one can move through. William Thurston’s earthquake flow deforms a surface by cutting along curves and sliding the edges past one another. Mirzakhani proved that this flow is ergodic, the mathematical sense in which a system behaves chaotically.',
        'With Alex Eskin, and in part Amir Mohammadi, she then studied a system linked to billiards in polygons. Squeezing a billiard table moves it through a moduli space of “translation surfaces”. Their theorem says the closures of these orbits are surprisingly regular, not fractal, echoing Marina Ratner’s rigidity theorems for homogeneous spaces.',
      ],
      intuition:
        'Imagine the billiard table itself travelling through a universe of all possible tables. The theorem says that its journey is never wildly erratic.',
      sources: ['imu', 'quanta', 'wikipedia'],
    },
  ],
}

export const legacy = {
  title: 'A lasting influence',
  intro:
    'Her papers opened new directions for other researchers, and her example continues to shape how mathematics welcomes new people.',
  items: [
    {
      title: 'A new era for the field',
      text: 'Alex Wright, who studied the 172-page Eskin-Mirzakhani paper closely, described it as the beginning of a new era. It has already been applied to problems such as the sightlines of a guard in a set of mirrored rooms.',
      sources: ['quanta'],
    },
    {
      title: 'May 12 · Women in Mathematics',
      text: 'Her birthday was chosen to celebrate women in mathematics. The proposal came from the Women’s Committee of the Iranian Mathematical Society and was approved at a world meeting for women in mathematics in Rio de Janeiro on 31 July 2018.',
      sources: ['may12'],
    },
    {
      title: 'Maryam Mirzakhani New Frontiers Prize',
      text: 'Announced by the Breakthrough Prize Foundation on 4 November 2019, it supports early-career women mathematicians who completed their PhDs within the previous two years.',
      sources: ['wikipedia'],
    },
    {
      title: 'Lecture, fund and scholarships',
      text: 'The American Mathematical Society created the Maryam Mirzakhani Lecture and the Maryam Mirzakhani Fund for the Next Generation. In 2022 the University of Oxford launched Maryam Mirzakhani Scholarships for women pursuing doctoral studies in mathematics.',
      sources: ['ams', 'wikipedia'],
    },
  ],
  note: {
    text: 'She was honoured by the Fields Medal but said she had no wish to be the face of women in mathematics, and she was certain that many more women Fields medalists would follow.',
    sources: ['quanta'],
  },
}

export const timeline = [
  { year: '1977', title: 'Born in Tehran', text: 'Maryam Mirzakhani is born on 12 May.', sources: ['mactutor'] },
  { year: '1994', title: 'Olympiad gold in Hong Kong', text: 'She scores 41 of 42 points at the International Mathematical Olympiad.', sources: ['mactutor'] },
  { year: '1995', title: 'A perfect score in Toronto', text: 'A second gold medal, with 42 of 42 points. She begins her studies at Sharif University of Technology.', sources: ['mactutor'] },
  { year: '1999', title: 'B.Sc. from Sharif University', text: 'She graduates in mathematics and moves to the United States for graduate study at Harvard.', sources: ['mactutor'] },
  { year: '2004', title: 'Ph.D. from Harvard', text: 'She completes her thesis on simple geodesics and moduli spaces, then begins as a Clay Research Fellow and Assistant Professor at Princeton.', sources: ['mactutor', 'imu'] },
  { year: '2006', title: 'Collaboration with Alex Eskin begins', text: 'She begins working with Alex Eskin of the University of Chicago, a collaboration that would continue for years.', sources: ['mactutor'] },
  { year: '2007-08', title: 'Landmark papers', text: 'Papers in the Journal of the AMS and Inventiones (2007), and in the Annals of Mathematics and IMRN (2008).', sources: ['imu', 'mactutor'] },
  { year: '2008/09', title: 'Joins Stanford', text: 'She becomes a professor at Stanford University (sources give 2008 or 2009).', sources: ['mactutor', 'stanford'] },
  { year: '2009', title: 'Blumenthal Award', text: 'Recognising her doctoral work in pure mathematics.', sources: ['mactutor'] },
  { year: '2013', title: 'Satter Prize', text: 'Awarded by the American Mathematical Society. The Eskin-Mirzakhani and Eskin-Mirzakhani-Mohammadi preprints appear.', sources: ['mactutor', 'imu'] },
  { year: '2014', title: 'Fields Medal', text: 'On 13 August in Seoul she becomes the first woman to receive the Fields Medal. She also receives a Clay Research Award.', sources: ['imu', 'mactutor'] },
  { year: '2015-16', title: 'Elected to academies', text: 'American Philosophical Society and French Academy of Sciences (2015); US National Academy of Sciences (2016).', sources: ['mactutor'] },
  { year: '2017', title: 'Passes away', text: 'Elected to the American Academy of Arts and Sciences in 2017. She dies on 14 July at the age of 40.', sources: ['mactutor', 'stanford'] },
  { year: '2018', title: 'May 12 is proposed', text: 'Her birthday is proposed as a day to celebrate women in mathematics.', sources: ['may12'] },
  { year: '2019', title: 'New Frontiers Prize announced', text: 'The Breakthrough Prize Foundation announces a prize in her name.', sources: ['wikipedia'] },
]

export const memorial = {
  heading: 'In loving memory',
  message: [
    'She showed that patience can be a form of boldness: that a mathematician can spend years on a single question, draw her way through the unknown, and in the end change how others see.',
    'Thank you for the questions you asked and for the doors you opened.',
  ],
  disclaimer:
    'This is an independent educational tribute and is not affiliated with Maryam Mirzakhani’s family, Stanford University or any organisation mentioned here. Facts come from the sources below, and where sources differ the text says so. Passages marked “Intuition” are simplified interpretations, not formal statements.',
}

export const referenceGroups = [
  {
    title: 'Biography and tributes',
    items: [
      {
        id: 'stanford',
        short: 'Stanford',
        title: 'Maryam Mirzakhani, Stanford mathematician and Fields Medal winner, dies',
        by: 'Stanford News, 15 July 2017',
        url: 'https://news.stanford.edu/2017/07/15/maryam-mirzakhani-stanford-mathematician-and-fields-medal-winner-dies/',
      },
      {
        id: 'mactutor',
        short: 'MacTutor',
        title: 'Maryam Mirzakhani — Biography',
        by: 'J. J. O’Connor and E. F. Robertson, MacTutor History of Mathematics, 2017',
        url: 'https://mathshistory.st-andrews.ac.uk/Biographies/Mirzakhani/',
      },
      {
        id: 'quanta',
        short: 'Quanta',
        title: 'A Tenacious Explorer of Abstract Surfaces',
        by: 'Erica Klarreich, Quanta Magazine, 12 August 2014',
        url: 'https://www.quantamagazine.org/maryam-mirzakhani-is-first-woman-fields-medalist-20140812/',
      },
      {
        id: 'ams',
        short: 'AMS',
        title: 'A Tribute to Maryam Mirzakhani',
        by: 'American Mathematical Society',
        url: 'https://www.ams.org/profession/mirzakhani/',
      },
    ],
  },
  {
    title: 'Official and overview sources',
    items: [
      {
        id: 'imu',
        short: 'IMU',
        title: 'The Work of Maryam Mirzakhani (Fields Medal 2014 press release)',
        by: 'International Mathematical Union',
        url: 'https://www.mathunion.org/fileadmin/IMU/Prizes/Fields/2014/news_release_mirzakhani.pdf',
      },
      {
        id: 'may12',
        short: 'May12',
        title: 'Why May12?',
        by: 'May12 — Celebrating Women in Mathematics',
        url: 'https://may12.womeninmaths.org/why',
      },
      {
        id: 'wikipedia',
        short: 'Wikipedia',
        title: 'Maryam Mirzakhani',
        by: 'Wikipedia (overview; follow its citations to primary sources)',
        url: 'https://en.wikipedia.org/wiki/Maryam_Mirzakhani',
      },
    ],
  },
  {
    title: 'Selected research papers',
    items: [
      {
        id: 'paper-annals',
        short: 'Annals 2008',
        title: 'Growth of the number of simple closed geodesics on hyperbolic surfaces',
        by: 'M. Mirzakhani, Annals of Mathematics 168 (2008)',
        url: 'https://doi.org/10.4007/annals.2008.168.97',
      },
      {
        id: 'paper-jams',
        short: 'JAMS 2007',
        title: 'Weil-Petersson volumes and intersection theory on the moduli space of curves',
        by: 'M. Mirzakhani, Journal of the AMS 20 (2007)',
        url: 'https://doi.org/10.1090/S0894-0347-06-00526-1',
      },
      {
        id: 'paper-inventiones',
        short: 'Inventiones 2007',
        title: 'Simple geodesics and Weil-Petersson volumes of moduli spaces of bordered Riemann surfaces',
        by: 'M. Mirzakhani, Inventiones Mathematicae 167 (2007)',
        url: 'https://doi.org/10.1007/s00222-006-0013-2',
      },
      {
        id: 'paper-emm',
        short: 'EMM 2015',
        title: 'Isolation, equidistribution, and orbit closures for the SL(2,R) action on moduli space',
        by: 'A. Eskin, M. Mirzakhani, A. Mohammadi, Annals of Mathematics 182 (2015)',
        url: 'https://doi.org/10.4007/annals.2015.182.2.7',
      },
    ],
  },
]
