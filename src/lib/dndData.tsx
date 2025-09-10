export const abilityLists = {
  str: {
    name: "Kekuatan",
    info: (
      <div>
        <p>Seberapa kuat otot dan fisik kamu.</p>
        <p className="py-1 my-1 border-y border-border">
          <b>Pengaruh</b> : serangan jarak dekat, bawa barang banyak, dorong
          atau gulat.
        </p>
        <p>
          <b>Cocok buat</b> : Fighter, Barbarian, Paladin.
        </p>
      </div>
    ),
  },
  dex: {
    name: "Kelincahan",
    info: (
      <div>
        <p>Seberapa gesit dan cepat gerak kamu.</p>
        <p className="py-1 my-1 border-y border-border">
          <b>Pengaruh</b> : serangan jarak jauh, senjata ringan/finesse (rapier,
          belati), armor class (AC), giliran awal (inisiatif), sembunyi/stealth,
          akrobatik.
        </p>
        <p>
          <b>Cocok buat</b> : Rogue, Ranger, Monk.
        </p>
      </div>
    ),
  },
  con: {
    name: "Kebugaran",
    info: (
      <div>
        <p>Daya tahan tubuh dan kesehatan kamu.</p>
        <p className="py-1 my-1 border-y border-border">
          <b>Pengaruh</b> : jumlah darah (HP), tahan konsentrasi saat pakai
          spell.
        </p>
        <p>
          <b>Cocok buat</b> : semua kelas butuh ini, tapi penting banget buat
          Fighter, Barbarian, Paladin.
        </p>
      </div>
    ),
  },
  int: {
    name: "Kecerdasan",
    info: (
      <div>
        <p>Seberapa pintar dan paham ilmu kamu.</p>
        <p className="py-1 my-1 border-y border-border">
          <b>Pengaruh</b> : pengetahuan (sejarah, sihir/arcana, alam),
          investigasi.
        </p>
        <p>
          <b>Cocok buat</b> : Wizard, Artificer.
        </p>
      </div>
    ),
  },
  wis: {
    name: "Kebijaksanaan",
    info: (
      <div>
        <p>Seberapa peka dan tajam insting kamu.</p>
        <p className="py-1 my-1 border-y border-border">
          <b>Pengaruh</b> : lihat/merasakan bahaya (perception), baca orang
          (insight), bertahan hidup, jinakkan hewan, dan spell untuk kelas
          tertentu.
        </p>
        <p>
          <b>Cocok buat</b> : Cleric, Druid, Ranger, Monk.
        </p>
      </div>
    ),
  },
  cha: {
    name: "Karismatik",
    info: (
      <div>
        <p>Seberapa pede, berwibawa, dan gampang bikin orang nurut.</p>
        <p className="py-1 my-1 border-y border-border">
          <b>Pengaruh</b> : ngomong (persuasi), bohong (tipu daya),
          nakut-nakutin (intimidasi), serta spell untuk beberapa kelas.
        </p>
        <p>
          <b>Cocok buat</b> : Bard, Sorcerer, Warlock, Paladin.
        </p>
      </div>
    ),
  },
};

export const classInfo = [
  {
    name: "barbarian",
    description:
      "Barbarian itu kelas petarung yang mengandalkan kekuatan fisik, daya tahan, dan amarah untuk bertarung. Mereka biasanya nggak pakai armor, tapi mengandalkan tubuh kuat dan semangat tempur.",
    strengths: [
      "HP tinggi dan tahan lama",
      "Damage besar saat Rage",
      "Cocok jadi frontline",
      "Mudah dimainkan untuk pemula",
    ],
    weaknesses: [
      "Kurang kemampuan jarak jauh",
      "Sedikit opsi utility",
      "Tidak punya sihir (umumnya)",
      "Kurang efektif melawan musuh yang bisa menghindar",
    ],
  },
  {
    name: "bard",
    description:
      "Bard itu kelas yang menggunakan musik, kata-kata, dan karisma untuk mendukung tim. Mereka fleksibel, bisa menyembuhkan, menginspirasi, bahkan mengontrol musuh.",
    strengths: [
      "Support terbaik dengan Buff/Debuff",
      "Bisa healing ringan",
      "Spellcasting fleksibel",
      "Skill sangat banyak",
    ],
    weaknesses: [
      "HP rendah",
      "Tidak sekuat petarung fisik",
      "Butuh karisma tinggi untuk maksimal",
      "Rentan kalau sendirian",
    ],
  },
  {
    name: "cleric",
    description:
      "Cleric itu pengikut dewa yang menggunakan sihir ilahi untuk menyembuhkan, melindungi, dan menghancurkan musuh. Mereka bisa jadi healer utama atau pejuang suci.",
    strengths: [
      "Penyembuh utama tim",
      "Akses ke banyak spell support",
      "Bisa pakai armor berat",
      "Fleksibel (support dan damage)",
    ],
    weaknesses: [
      "Sering jadi target musuh",
      "Bergantung pada Wisdom",
      "Pilihan peran tergantung domain",
      "Damage fisik kurang konsisten",
    ],
  },
  {
    name: "druid",
    description:
      "Druid itu penjaga alam yang bisa berubah wujud jadi hewan, memanggil kekuatan alam, dan menyembuhkan. Mereka serbaguna dan sangat tematik.",
    strengths: [
      "Bisa berubah jadi hewan (Wild Shape)",
      "Punya spell alam yang kuat",
      "Bisa healing",
      "Cocok untuk berbagai situasi",
    ],
    weaknesses: [
      "Armor terbatas",
      "Bergantung pada Wisdom",
      "Wild Shape terbatas per hari",
      "Tidak sekuat petarung murni",
    ],
  },
  {
    name: "fighter",
    description:
      "Fighter adalah petarung serbaguna yang bisa memakai hampir semua senjata dan armor. Cocok untuk pemula dan bisa diarahkan ke berbagai gaya bertarung.",
    strengths: [
      "Mudah dimainkan",
      "Bisa jadi tank atau DPS",
      "Banyak opsi build",
      "Serangan ekstra (Extra Attack)",
    ],
    weaknesses: [
      "Kurang sihir",
      "Kurang utility di luar combat",
      "Sering jadi 'vanilla' dibanding kelas lain",
      "Butuh strategi untuk tetap menarik",
    ],
  },
  {
    name: "monk",
    description:
      "Monk itu petarung cepat dengan seni bela diri dan kekuatan ki. Mereka gesit, memukul dengan tangan kosong, dan bisa melakukan manuver unik.",
    strengths: [
      "Cepat dan lincah",
      "Tidak butuh armor atau senjata",
      "Punya ki dengan banyak efek",
      "Bisa stun musuh",
    ],
    weaknesses: [
      "HP menengah",
      "Butuh banyak atribut (Dex, Wis, Con)",
      "Damage tidak sebesar barbarian/fighter",
      "Lemah lawan musuh bersenjata berat",
    ],
  },
  {
    name: "paladin",
    description:
      "Paladin itu ksatria suci yang menggabungkan kekuatan fisik dengan sihir ilahi. Mereka bisa menyembuhkan, melindungi, dan menghukum kejahatan.",
    strengths: [
      "Bisa healing",
      "Sangat tanky dengan armor berat",
      "Damage besar dengan Smite",
      "Aura buff untuk teman",
    ],
    weaknesses: [
      "Spell terbatas",
      "Butuh banyak atribut (Str, Cha, Con)",
      "Kurang fleksibel dibanding cleric",
      "Bisa jadi target utama musuh",
    ],
  },
  {
    name: "ranger",
    description:
      "Ranger adalah pemburu dan pengelana alam. Mereka ahli memanah, bertahan hidup di alam liar, dan bisa memanggil sedikit sihir alam.",
    strengths: [
      "Ahli jarak jauh",
      "Punya companion (beberapa build)",
      "Skill bertahan hidup bagus",
      "Spell pendukung tersedia",
    ],
    weaknesses: [
      "Bergantung pada tempat bertarung",
      "Kurang kuat dibanding fighter di melee",
      "Damage tidak konsisten",
      "Spell terbatas",
    ],
  },
  {
    name: "rogue",
    description:
      "Rogue itu ahli menyelinap, mencuri, dan menyerang dengan presisi. Mereka mengandalkan kelicikan dan serangan mendadak.",
    strengths: [
      "Damage besar dengan Sneak Attack",
      "Banyak skill",
      "Ahli stealth",
      "Gesit dan lincah",
    ],
    weaknesses: [
      "HP rendah",
      "Tidak tahan di frontline",
      "Bergantung pada kondisi untuk Sneak Attack",
      "Kurang sihir",
    ],
  },
  {
    name: "wizard",
    description:
      "Wizard itu pengguna sihir paling murni dan kuat. Mereka mempelajari sihir dari buku dan bisa menguasai spell paling berbahaya.",
    strengths: [
      "Spell paling banyak dan kuat",
      "Sangat fleksibel dengan spellbook",
      "Bisa kontrol battlefield",
      "Damage besar di level tinggi",
    ],
    weaknesses: [
      "HP paling rendah",
      "Armor terbatas",
      "Sangat bergantung pada spell slot",
      "Rentan di level rendah",
    ],
  },
  {
    name: "warlock",
    description:
      "Warlock mendapatkan kekuatan dari perjanjian dengan entitas kuat. Mereka punya sihir unik dan kemampuan pact yang berbeda.",
    strengths: [
      "Eldritch Blast sangat kuat",
      "Slot spell cepat pulih",
      "Punya invocations unik",
      "Roleplay menarik dengan patron",
    ],
    weaknesses: [
      "Spell slot sedikit",
      "Sering bergantung pada cantrip",
      "Pilihan build bisa sempit",
      "Kurang fleksibel dibanding wizard",
    ],
  },
  {
    name: "sorcerer",
    description:
      "Sorcerer itu penyihir alami yang mendapatkan kekuatan dari darah atau bakat bawaan. Mereka mengandalkan karisma dan punya fleksibilitas metamagic.",
    strengths: [
      "Bisa modifikasi spell dengan metamagic",
      "Damage besar",
      "Karakter simpel",
      "Spellcasting cepat",
    ],
    weaknesses: [
      "Spell terbatas",
      "HP rendah",
      "Armor minim",
      "Kurang variasi utility dibanding wizard",
    ],
  },
];

export const raceInfo = [
  {
    name: "human",
    description:
      "Human adalah ras paling umum dan serbaguna. Mereka tidak punya kekuatan khusus, tapi bisa beradaptasi di segala situasi.",
    strengths: [
      "Bonus ke semua ability score",
      "Fleksibel dalam build",
      "Mudah untuk roleplay",
      "Banyak variasi di dunia D&D",
    ],
    weaknesses: [
      "Tidak ada fitur unik mencolok",
      "Kurang spesialisasi dibanding ras lain",
      "Bergantung pada class untuk kekuatan",
      "Kurang menarik bagi sebagian pemain",
    ],
  },
  {
    name: "elf",
    description:
      "Elf adalah ras elegan yang panjang umur, gesit, dan sering punya hubungan dengan sihir. Mereka terkenal dengan keindahan dan ketajaman indranya.",
    strengths: [
      "Bonus Dexterity",
      "Darkvision",
      "Proficient Perception",
      "Tidak mudah terkena pesona dan immune sleep magic",
    ],
    weaknesses: [
      "HP relatif rendah",
      "Cenderung fokus di kelas Dexterity",
      "Kurang kuat dalam strength-based build",
      "Rentan kalau dipaksa jadi frontline",
    ],
  },
  {
    name: "dwarf",
    description:
      "Dwarf adalah ras keras kepala, tangguh, dan ahli dalam pertambangan serta kerajinan. Mereka kuat dan sulit dijatuhkan.",
    strengths: [
      "Bonus Constitution",
      "Darkvision",
      "Resistance terhadap poison",
      "Proficient dengan senjata/alat tertentu",
    ],
    weaknesses: [
      "Gerakan lebih lambat (25 feet)",
      "Kurang fleksibel di luar peran tank",
      "Kurang cocok untuk build Dexterity tinggi",
      "Kurang karisma dalam roleplay sosial",
    ],
  },
  {
    name: "halfling",
    description:
      "Halfling adalah ras kecil yang ceria, penuh keberuntungan, dan gesit. Mereka tidak menonjol di kekuatan, tapi pintar bertahan hidup.",
    strengths: [
      "Bonus Dexterity",
      "Lucky: bisa reroll 1",
      "Brave: advantage lawan fear",
      "Halfling Nimbleness: bisa lewat ruang musuh lebih besar",
    ],
    weaknesses: [
      "Kecil dan kurang kekuatan fisik",
      "Damage melee rendah",
      "Kurang cocok jadi tank",
      "Kurang efektif di peran intimidasi",
    ],
  },
  {
    name: "dragonborn",
    description:
      "Dragonborn adalah keturunan naga yang punya napas elemental dan kekuatan fisik hebat. Mereka bangga dengan warisan draconic mereka.",
    strengths: [
      "Bonus Strength dan Charisma",
      "Breath Weapon (serangan elemental)",
      "Resistance ke tipe elemen tertentu",
      "Penampilan ikonik dan unik",
    ],
    weaknesses: [
      "Tidak punya darkvision",
      "Breath Weapon damage kecil di level rendah",
      "Kurang fleksibel di role support",
      "Bergantung pada class tertentu untuk maksimal",
    ],
  },
  {
    name: "gnome",
    description:
      "Gnome adalah ras kecil yang cerdas, penuh rasa ingin tahu, dan sering ahli dalam sihir atau teknologi.",
    strengths: [
      "Bonus Intelligence",
      "Darkvision",
      "Gnome Cunning (advantage lawan magic Int/Wis/Cha saves)",
      "Roleplay unik dan lucu",
    ],
    weaknesses: [
      "Kecil dan lemah secara fisik",
      "Kurang efektif dalam role strength-based",
      "Damage melee rendah",
      "Tidak cocok untuk semua class",
    ],
  },
  {
    name: "half-orc",
    description:
      "Half-Orc adalah keturunan manusia dan orc. Mereka tangguh, kuat, dan cocok untuk peran barbarian atau fighter.",
    strengths: [
      "Bonus Strength dan Constitution",
      "Darkvision",
      "Relentless Endurance (bisa bertahan di 1 HP sekali per long rest)",
      "Savage Attacks (critical lebih sakit)",
    ],
    weaknesses: [
      "Kurang karisma",
      "Tidak cocok untuk caster",
      "Kurang fleksibel untuk role sosial",
      "Cenderung stereotipe 'brute force'",
    ],
  },
  {
    name: "tiefling",
    description:
      "Tiefling adalah keturunan manusia dengan darah iblis. Mereka sering dicurigai, tapi punya kekuatan sihir alami.",
    strengths: [
      "Bonus Charisma dan Intelligence",
      "Darkvision",
      "Resistance ke fire",
      "Punya innate spellcasting",
    ],
    weaknesses: [
      "Kurang diterima secara sosial (roleplay)",
      "Tidak cocok untuk strength build",
      "HP sedang, tidak sekuat dwarf/half-orc",
      "Stereotipe jahat bisa mengganggu roleplay",
    ],
  },
  {
    name: "half-elf",
    description:
      "Half-Elf adalah keturunan manusia dan elf. Mereka menggabungkan karisma manusia dengan keanggunan elf.",
    strengths: [
      "Bonus Charisma dan dua ability lain",
      "Darkvision",
      "Fey Ancestry (resistance pesona, immune sleep)",
      "Skill Versatility (dua skill extra)",
    ],
    weaknesses: [
      "Tidak ada fitur unik mencolok",
      "Kurang fokus di satu kemampuan",
      "Sering dianggap 'jack of all trades'",
      "Kurang cocok untuk role pure tank",
    ],
  },
];
