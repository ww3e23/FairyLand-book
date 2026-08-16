import { PET_ELEMENT_LABEL } from "@/data/pets";
import type { PetEntity } from "@/lib/types";

function splitList(value?: string) {
  return (value ?? "")
    .split(/[、,，]/)
    .map((s) => s.trim())
    .filter(Boolean);
}

export function PetInfoBlock({
  pet,
  compact,
}: {
  pet: PetEntity;
  compact?: boolean;
}) {
  const skills = splitList(pet.learnableSkills.value);
  const maps = splitList(pet.spawnMaps.value);
  const drops = splitList(pet.drops.value);

  return (
    <div className={compact ? "space-y-2" : "space-y-3"}>
      <table className="w-full table-fixed border-collapse overflow-hidden rounded-lg text-center text-xs text-coffee">
        <tbody>
          <tr className="bg-cream/80">
            <th className="border border-coffee/10 px-1 py-1.5 font-medium">偏向性</th>
            <th className="border border-coffee/10 px-1 py-1.5 font-medium">出現等級</th>
            <th className="border border-coffee/10 px-1 py-1.5 font-medium">力量</th>
            <th className="border border-coffee/10 px-1 py-1.5 font-medium">體質</th>
            <th className="border border-coffee/10 px-1 py-1.5 font-medium">敏捷</th>
          </tr>
          <tr>
            <td className="border border-coffee/10 px-1 py-1.5">
              {pet.bias.value ?? "—"}
            </td>
            <td className="border border-coffee/10 px-1 py-1.5">
              {pet.spawnLevel.value ?? "—"}
            </td>
            <td className="border border-coffee/10 px-1 py-1.5">
              {pet.str.value ?? "—"}
            </td>
            <td className="border border-coffee/10 px-1 py-1.5">
              {pet.sta.value ?? "—"}
            </td>
            <td className="border border-coffee/10 px-1 py-1.5">
              {pet.agi.value ?? "—"}
            </td>
          </tr>
          <tr className="bg-cream/80">
            <th className="border border-coffee/10 px-1 py-1.5 font-medium">技能欄</th>
            <th className="border border-coffee/10 px-1 py-1.5 font-medium">生命</th>
            <th className="border border-coffee/10 px-1 py-1.5 font-medium">智慧</th>
            <th className="border border-coffee/10 px-1 py-1.5 font-medium">幸運</th>
            <th className="border border-coffee/10 px-1 py-1.5 font-medium">魅力</th>
          </tr>
          <tr>
            <td className="border border-coffee/10 px-1 py-1.5">
              {pet.skillSlots.value ? `${pet.skillSlots.value} 格` : "—"}
            </td>
            <td className="border border-coffee/10 px-1 py-1.5">
              {pet.hp.value ?? "—"}
            </td>
            <td className="border border-coffee/10 px-1 py-1.5">
              {pet.int.value ?? "—"}
            </td>
            <td className="border border-coffee/10 px-1 py-1.5">
              {pet.luk.value ?? "—"}
            </td>
            <td className="border border-coffee/10 px-1 py-1.5">
              {pet.cha.value ?? "—"}
            </td>
          </tr>
        </tbody>
      </table>
      {pet.skillSlots.note && (
        <p className="text-[11px] text-coffee/50">{pet.skillSlots.note}</p>
      )}

      <p className="text-sm text-coffee">
        <span className="text-coffee/45">系別：</span>
        {PET_ELEMENT_LABEL[pet.element]}系
        {pet.rare ? "（稀有）" : ""}
      </p>
      <p className="text-sm text-coffee">
        <span className="text-coffee/45">地點：</span>
        {maps.length ? maps.join("、") : "尚未確認"}
      </p>
      <p className="text-sm text-coffee">
        <span className="text-coffee/45">出現等級：</span>
        {pet.spawnLevel.value ?? "尚未確認"}
      </p>
      <div>
        <p className="text-sm text-coffee/45">可學技能：</p>
        {skills.length ? (
          <div className="mt-1 flex flex-wrap gap-1">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full bg-cream px-2 py-0.5 text-xs text-coffee"
              >
                {skill}
              </span>
            ))}
          </div>
        ) : (
          <p className="mt-1 text-sm text-coffee">尚未確認</p>
        )}
      </div>
      <p className="text-sm text-coffee">
        <span className="text-coffee/45">掉寶：</span>
        {drops.length ? drops.join("、") : "尚未確認"}
      </p>
      {pet.note.value && (
        <p className="text-sm leading-relaxed text-coffee">
          <span className="text-coffee/45">備註：</span>
          {pet.note.value}
        </p>
      )}
    </div>
  );
}
