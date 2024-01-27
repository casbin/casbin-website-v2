import {AdapterGoData} from "@site/src/data/AdapterData/AdapterGoData";
import {AdapterJavaData} from "@site/src/data/AdapterData/AdapterJavaData";
import {AdapterNodejsData} from "@site/src/data/AdapterData/AdapterNodejsData";
import {AdapterPhpData} from "@site/src/data/AdapterData/AdapterPhpData";
import {AdapterPythonData} from "@site/src/data/AdapterData/AdapterPythonData";
import {AdapterDotNETData} from "@site/src/data/AdapterData/AdapterDotNETData";
import {AdapterRustData} from "@site/src/data/AdapterData/AdapterRustData";
import {AdapterRubyData} from "@site/src/data/AdapterData/AdapterRubyData";
import {AdapterSwiftData} from "@site/src/data/AdapterData/AdapterSwiftData";
import {AdapterLuaData} from "@site/src/data/AdapterData/AdapterLuaData";

export const AdapterData = [
  ...AdapterGoData,
  ...AdapterJavaData,
  ...AdapterNodejsData,
  ...AdapterPhpData,
  ...AdapterPythonData,
  ...AdapterDotNETData,
  ...AdapterRustData,
  ...AdapterRubyData,
  ...AdapterSwiftData,
  ...AdapterLuaData,
];
