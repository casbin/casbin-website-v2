import {WatcherGoData} from "@site/src/tableData/WatcherData/WatcherGoData";
import {WatcherJavaData} from "@site/src/tableData/WatcherData/WatcherJavaData";
import {WatcherNodejsData} from "@site/src/tableData/WatcherData/WatcherNodejsData";
import {WatcherPythonData} from "@site/src/tableData/WatcherData/WatcherPythonData";
import {WatcherDotNETData} from "@site/src/tableData/WatcherData/WatcherDotNETData";
import {WatcherRubyData} from "@site/src/tableData/WatcherData/WatcherRubyData";
import {WatcherPhpData} from "@site/src/tableData/WatcherData/WatcherPhpData";
import {WatcherRustData} from "@site/src/tableData/WatcherData/WatcherRustData";

export const WatcherData = [
  ...WatcherGoData,
  ...WatcherJavaData,
  ...WatcherNodejsData,
  ...WatcherPythonData,
  ...WatcherDotNETData,
  ...WatcherRubyData,
  ...WatcherPhpData,
  ...WatcherRustData,
];
