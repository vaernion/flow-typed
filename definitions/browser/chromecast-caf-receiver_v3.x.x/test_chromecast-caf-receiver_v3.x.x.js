// @flow
import { TextTracksManager } from "cast.framework";
import { StandbyChangedEvent } from "cast.framework.system";
import { PlayerData, ContentType } from "cast.framework.ui";
import { BreakManager } from "cast.framework.breaks";
import { MediaStatusEvent } from "cast.framework.events";
import { Track, Break, MediaStatus, QueueData } from "cast.framework.messages";

const ct = ContentType.VIDEO;
// framework tests
const track = new Track(123, {});
const ttm = new TextTracksManager({});
ttm.addTracks(track);

// $FlowExpectedError
ttm.addTracks("should fail");

// system tests
const sce = new StandbyChangedEvent(true);
// $FlowExpectedError
const wrongSce = new StandbyChangedEvent("error");

const result: boolean = sce.isStandby;
// $FlowExpectedError
const failure: string = sce.isStandby;

// ui tests
const pd = new PlayerData();

const cn: number = pd.currentBreakClipNumber;
// $FlowExpectedError
const wrongCn: boolean = pd.currentBreakClipNumber;

// breaks tests
const bm: BreakManager = new BreakManager();
const brk1: Break = bm.getBreakById("123");
// $FlowExpectedError
const brk2: string = bm.getBreakById("123");
// $FlowExpectedError
const brk3: Break = bm.getBreakById(123);
// events tests

const evt: MediaStatusEvent = new MediaStatusEvent();
const ms: MediaStatus = evt.mediaStatus;
// $FlowExpectedError
const ms2: string = evt.mediaStatus;

// messages tests
const qd = new QueueData("id", "name", "description", "mode");
// $FlowExpectedError
const wrongQd = new QueueData({});
const name: string = qd.name;
// $FlowExpectedError
const wrongName: number = qd.name;
