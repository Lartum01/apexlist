import areFlag from "flag-icons/flags/4x3/ae.svg";
import ausFlag from "flag-icons/flags/4x3/au.svg";
import azeFlag from "flag-icons/flags/4x3/az.svg";
import canFlag from "flag-icons/flags/4x3/ca.svg";
import czeFlag from "flag-icons/flags/4x3/cz.svg";
import fraFlag from "flag-icons/flags/4x3/fr.svg";
import gerFlag from "flag-icons/flags/4x3/de.svg";
import gbrFlag from "flag-icons/flags/4x3/gb.svg";
import itaFlag from "flag-icons/flags/4x3/it.svg";
import jpnFlag from "flag-icons/flags/4x3/jp.svg";
import mexFlag from "flag-icons/flags/4x3/mx.svg";
import nldFlag from "flag-icons/flags/4x3/nl.svg";
import qatFlag from "flag-icons/flags/4x3/qa.svg";
import rusFlag from "flag-icons/flags/4x3/ru.svg";
import turFlag from "flag-icons/flags/4x3/tr.svg";
import usaFlag from "flag-icons/flags/4x3/us.svg";
import {
  getCountryName,
  type CountryCode,
} from "../data/tracks";

const countryFlags: Record<CountryCode, string> = {
  are: areFlag,
  aus: ausFlag,
  aze: azeFlag,
  can: canFlag,
  cze: czeFlag,
  fra: fraFlag,
  ger: gerFlag,
  gbr: gbrFlag,
  ita: itaFlag,
  jpn: jpnFlag,
  mex: mexFlag,
  nld: nldFlag,
  qat: qatFlag,
  rus: rusFlag,
  tur: turFlag,
  usa: usaFlag,
};

export function TrackName({
  name,
  countryCode,
}: {
  name: string;
  countryCode: CountryCode;
}) {
  return (
    <span className="track-name">
      <img className="track-flag" src={countryFlags[countryCode]} alt={getCountryName(countryCode)} />
      {name}
    </span>
  );
}
