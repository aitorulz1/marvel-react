import { Character } from "@/types/Character";
import Link from "next/link";

interface Props {
  characters: Character[];
}

export default function Cards({ characters }: Props) {
  if (!characters) {
    return <p>Nothing to show</p>;
  }

  return (
    <div className="text-3xl font-bold table w-full">
      {characters.map((character) => (
        <Link href={`/cards/${character.id}`}>
          <div
            className="relative float-left md:w-1/2 lg:w-1/3 p-3"
            key={character.id}
          >
            <div className="h-64 overflow-hidden">
              <img
                src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                alt={character.name}
                className="md:w-full"
              />
            </div>
            <div className="table shadow-[0px_1px_3px_0px_#a0aec0] relative w-full">
              <p className="m-4 text-lg">{character.name}</p>
              <p className="m-4 text-sm text-gray-500 float-right">
                Comics{" "}
                <span className="text-black text-base">
                  {character.comics.available}
                </span>
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
