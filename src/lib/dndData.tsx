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
