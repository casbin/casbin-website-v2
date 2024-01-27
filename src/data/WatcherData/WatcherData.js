import {WatcherGoData} from "@site/src/data/WatcherData/WatcherGoData";
import {WatcherJavaData} from "@site/src/data/WatcherData/WatcherJavaData";
import {WatcherNodejsData} from "@site/src/data/WatcherData/WatcherNodejsData";
import {WatcherPythonData} from "@site/src/data/WatcherData/WatcherPythonData";
import {WatcherDotNETData} from "@site/src/data/WatcherData/WatcherDotNETData";
import {WatcherRubyData} from "@site/src/data/WatcherData/WatcherRubyData";
import {WatcherPhpData} from "@site/src/data/WatcherData/WatcherPhpData";

export const WatcherData = [
  ...WatcherGoData,
  ...WatcherJavaData,
  ...WatcherNodejsData,
  ...WatcherPythonData,
  ...WatcherDotNETData,
  ...WatcherRubyData,
  ...WatcherPhpData,
];
