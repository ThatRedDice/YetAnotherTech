declare module "net.minecraft.world.scores.criteria.ObjectiveCriteria" {
import {$Optional} from "java.util.Optional"
import {$Set} from "java.util.Set"
import {$ObjectiveCriteria$RenderType} from "net.minecraft.world.scores.criteria.ObjectiveCriteria$RenderType"

export class $ObjectiveCriteria {
static readonly "DEATH_COUNT": $ObjectiveCriteria
static readonly "ARMOR": $ObjectiveCriteria
static readonly "TRIGGER": $ObjectiveCriteria
static readonly "KILL_COUNT_ALL": $ObjectiveCriteria
static readonly "AIR": $ObjectiveCriteria
static readonly "LEVEL": $ObjectiveCriteria
static readonly "DUMMY": $ObjectiveCriteria
static readonly "EXPERIENCE": $ObjectiveCriteria
static readonly "HEALTH": $ObjectiveCriteria
static readonly "KILL_COUNT_PLAYERS": $ObjectiveCriteria
static readonly "TEAM_KILL": ($ObjectiveCriteria)[]
static readonly "KILLED_BY_TEAM": ($ObjectiveCriteria)[]
static readonly "FOOD": $ObjectiveCriteria

public static "getCustomCriteriaNames"(): $Set<(StringJS)>
public "getDefaultRenderType"(): $ObjectiveCriteria$RenderType
public "getName"(): StringJS
public "isReadOnly"(): boolean
public static "byName"(arg0: StringJS): $Optional<($ObjectiveCriteria)>
public static get "customCriteriaNames"(): $Set<(StringJS)>
get "defaultRenderType"(): $ObjectiveCriteria$RenderType
get "name"(): StringJS
get "readOnly"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ObjectiveCriteria$$Type = ($ObjectiveCriteria);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ObjectiveCriteria$$Original = $ObjectiveCriteria;}
declare module "net.minecraft.world.scores.Team$Visibility" {
import {$Enum} from "java.lang.Enum"
import {$Component} from "net.minecraft.network.chat.Component"

export class $Team$Visibility extends $Enum<($Team$Visibility)> {
static readonly "HIDE_FOR_OTHER_TEAMS": $Team$Visibility
static readonly "NEVER": $Team$Visibility
readonly "id": integer
static readonly "ALWAYS": $Team$Visibility
static readonly "HIDE_FOR_OWN_TEAM": $Team$Visibility

public static "getAllNames"(): (StringJS)[]
public "getDisplayName"(): $Component
public static "values"(): ($Team$Visibility)[]
public static "valueOf"(arg0: StringJS): $Team$Visibility
public static "byName"(arg0: StringJS): $Team$Visibility
public static get "allNames"(): (StringJS)[]
get "displayName"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Team$Visibility$$Type = (("always") | ("never") | ("hide_for_other_teams") | ("hide_for_own_team"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Team$Visibility$$Original = $Team$Visibility;}
declare module "net.minecraft.world.scores.Team$CollisionRule" {
import {$Enum} from "java.lang.Enum"
import {$Component} from "net.minecraft.network.chat.Component"

export class $Team$CollisionRule extends $Enum<($Team$CollisionRule)> {
static readonly "PUSH_OTHER_TEAMS": $Team$CollisionRule
static readonly "NEVER": $Team$CollisionRule
readonly "id": integer
static readonly "PUSH_OWN_TEAM": $Team$CollisionRule
static readonly "ALWAYS": $Team$CollisionRule

public "getDisplayName"(): $Component
public static "values"(): ($Team$CollisionRule)[]
public static "valueOf"(arg0: StringJS): $Team$CollisionRule
public static "byName"(arg0: StringJS): $Team$CollisionRule
get "displayName"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Team$CollisionRule$$Type = (("always") | ("never") | ("push_other_teams") | ("push_own_team"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Team$CollisionRule$$Original = $Team$CollisionRule;}
declare module "net.minecraft.world.scores.ReadOnlyScoreInfo" {
import {$NumberFormat, $NumberFormat$$Type} from "net.minecraft.network.chat.numbers.NumberFormat"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"

export interface $ReadOnlyScoreInfo$$Interface {
get "locked"(): boolean
}

export class $ReadOnlyScoreInfo implements $ReadOnlyScoreInfo$$Interface {
static "safeFormatValue"(arg0: $ReadOnlyScoreInfo$$Type, arg1: $NumberFormat$$Type): $MutableComponent
 "formatValue"(arg0: $NumberFormat$$Type): $MutableComponent
 "numberFormat"(): $NumberFormat
 "value"(): integer
 "isLocked"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReadOnlyScoreInfo$$Type = ($ReadOnlyScoreInfo);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ReadOnlyScoreInfo$$Original = $ReadOnlyScoreInfo;}
declare module "net.minecraft.world.scores.Objective" {
import {$NumberFormat, $NumberFormat$$Type} from "net.minecraft.network.chat.numbers.NumberFormat"
import {$ObjectiveCriteria, $ObjectiveCriteria$$Type} from "net.minecraft.world.scores.criteria.ObjectiveCriteria"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Scoreboard, $Scoreboard$$Type} from "net.minecraft.world.scores.Scoreboard"
import {$ObjectiveCriteria$RenderType, $ObjectiveCriteria$RenderType$$Type} from "net.minecraft.world.scores.criteria.ObjectiveCriteria$RenderType"

export class $Objective {
constructor(arg0: $Scoreboard$$Type, arg1: StringJS, arg2: $ObjectiveCriteria$$Type, arg3: $Component$$Type, arg4: $ObjectiveCriteria$RenderType$$Type, arg5: boolean, arg6: $NumberFormat$$Type)

public "numberFormatOrDefault"(arg0: $NumberFormat$$Type): $NumberFormat
public "setRenderType"(arg0: $ObjectiveCriteria$RenderType$$Type): void
public "getFormattedDisplayName"(): $Component
public "getCriteria"(): $ObjectiveCriteria
public "setDisplayAutoUpdate"(arg0: boolean): void
public "displayAutoUpdate"(): boolean
public "numberFormat"(): $NumberFormat
public "setNumberFormat"(arg0: $NumberFormat$$Type): void
public "getDisplayName"(): $Component
public "getName"(): StringJS
public "getRenderType"(): $ObjectiveCriteria$RenderType
public "getScoreboard"(): $Scoreboard
public "setDisplayName"(arg0: $Component$$Type): void
set "renderType"(value: $ObjectiveCriteria$RenderType$$Type)
get "formattedDisplayName"(): $Component
get "criteria"(): $ObjectiveCriteria
get "displayName"(): $Component
get "name"(): StringJS
get "renderType"(): $ObjectiveCriteria$RenderType
get "scoreboard"(): $Scoreboard
set "displayName"(value: $Component$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Objective$$Type = ($Objective);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Objective$$Original = $Objective;}
declare module "net.minecraft.world.scores.PlayerScoreEntry" {
import {$NumberFormat, $NumberFormat$$Type} from "net.minecraft.network.chat.numbers.NumberFormat"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Record} from "java.lang.Record"

export class $PlayerScoreEntry extends $Record {
constructor(arg0: StringJS, arg1: integer, arg2: $Component$$Type, arg3: $NumberFormat$$Type)

public "formatValue"(arg0: $NumberFormat$$Type): $MutableComponent
public "numberFormatOverride"(): $NumberFormat
public "value"(): integer
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "isHidden"(): boolean
public "owner"(): StringJS
public "display"(): $Component
public "ownerName"(): $Component
get "hidden"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerScoreEntry$$Type = ({"value"?: integer, "display"?: $Component$$Type, "owner"?: StringJS, "numberFormatOverride"?: $NumberFormat$$Type}) | ([value?: integer, display?: $Component$$Type, owner?: StringJS, numberFormatOverride?: $NumberFormat$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlayerScoreEntry$$Original = $PlayerScoreEntry;}
declare module "net.minecraft.world.scores.ScoreAccess" {
import {$NumberFormat$$Type} from "net.minecraft.network.chat.numbers.NumberFormat"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"

export interface $ScoreAccess$$Interface {
}

export class $ScoreAccess implements $ScoreAccess$$Interface {
 "numberFormatOverride"(arg0: $NumberFormat$$Type): void
 "lock"(): void
 "reset"(): void
 "get"(): integer
 "add"(arg0: integer): integer
 "increment"(): integer
 "set"(arg0: integer): void
 "unlock"(): void
 "display"(arg0: $Component$$Type): void
 "display"(): $Component
 "locked"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScoreAccess$$Type = ($ScoreAccess);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ScoreAccess$$Original = $ScoreAccess;}
declare module "net.minecraft.world.scores.ScoreHolder" {
import {$Component} from "net.minecraft.network.chat.Component"
import {$GameProfile$$Type} from "com.mojang.authlib.GameProfile"

export interface $ScoreHolder$$Interface {

(): StringJS
get "displayName"(): $Component
get "scoreboardName"(): StringJS
get "feedbackDisplayName"(): $Component
}

export class $ScoreHolder implements $ScoreHolder$$Interface {
static readonly "WILDCARD": $ScoreHolder
static readonly "WILDCARD_NAME": StringJS

 "getDisplayName"(): $Component
 "getScoreboardName"(): StringJS
 "getFeedbackDisplayName"(): $Component
static "forNameOnly"(arg0: StringJS): $ScoreHolder
static "fromGameProfile"(arg0: $GameProfile$$Type): $ScoreHolder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScoreHolder$$Type = (() => StringJS);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ScoreHolder$$Original = $ScoreHolder;}
declare module "net.minecraft.world.scores.criteria.ObjectiveCriteria$RenderType" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"

export class $ObjectiveCriteria$RenderType extends $Enum<($ObjectiveCriteria$RenderType)> implements $StringRepresentable$$Interface {
static readonly "CODEC": $StringRepresentable$EnumCodec<($ObjectiveCriteria$RenderType)>
static readonly "HEARTS": $ObjectiveCriteria$RenderType
static readonly "INTEGER": $ObjectiveCriteria$RenderType

public static "values"(): ($ObjectiveCriteria$RenderType)[]
public static "valueOf"(arg0: StringJS): $ObjectiveCriteria$RenderType
public "getId"(): StringJS
public "getSerializedName"(): StringJS
public static "byId"(arg0: StringJS): $ObjectiveCriteria$RenderType
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "fromEnum"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public "getRemappedEnumConstantName"(): StringJS
public static "fromEnumWithMapping"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
get "id"(): StringJS
get "serializedName"(): StringJS
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ObjectiveCriteria$RenderType$$Type = (("integer") | ("hearts"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ObjectiveCriteria$RenderType$$Original = $ObjectiveCriteria$RenderType;}
declare module "net.minecraft.world.scores.ScoreboardSaveData" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$SavedData} from "net.minecraft.world.level.saveddata.SavedData"
import {$Scoreboard$$Type} from "net.minecraft.world.scores.Scoreboard"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $ScoreboardSaveData extends $SavedData {
static readonly "FILE_ID": StringJS

constructor(arg0: $Scoreboard$$Type)

public "load"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): $ScoreboardSaveData
public "save"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): $CompoundTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScoreboardSaveData$$Type = ($ScoreboardSaveData);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ScoreboardSaveData$$Original = $ScoreboardSaveData;}
declare module "net.minecraft.world.scores.PlayerTeam" {
import {$Collection} from "java.util.Collection"
import {$Team, $Team$$Type} from "net.minecraft.world.scores.Team"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$Team$Visibility, $Team$Visibility$$Type} from "net.minecraft.world.scores.Team$Visibility"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Scoreboard, $Scoreboard$$Type} from "net.minecraft.world.scores.Scoreboard"
import {$Team$CollisionRule, $Team$CollisionRule$$Type} from "net.minecraft.world.scores.Team$CollisionRule"
import {$ChatFormatting, $ChatFormatting$$Type} from "net.minecraft.ChatFormatting"

export class $PlayerTeam extends $Team {
constructor(arg0: $Scoreboard$$Type, arg1: StringJS)

public "getDeathMessageVisibility"(): $Team$Visibility
public "getPlayers"(): $Collection<(StringJS)>
public "getFormattedDisplayName"(): $MutableComponent
public "setPlayerPrefix"(arg0: $Component$$Type): void
public "getPlayerPrefix"(): $Component
public "setPlayerSuffix"(arg0: $Component$$Type): void
public "getPlayerSuffix"(): $Component
public "setAllowFriendlyFire"(arg0: boolean): void
public "setSeeFriendlyInvisibles"(arg0: boolean): void
public "setNameTagVisibility"(arg0: $Team$Visibility$$Type): void
public "setDeathMessageVisibility"(arg0: $Team$Visibility$$Type): void
public "setCollisionRule"(arg0: $Team$CollisionRule$$Type): void
public "packOptions"(): integer
public "unpackOptions"(arg0: integer): void
public "getFormattedName"(arg0: $Component$$Type): $MutableComponent
public "getNameTagVisibility"(): $Team$Visibility
public "getCollisionRule"(): $Team$CollisionRule
public "setColor"(arg0: $ChatFormatting$$Type): void
public "getDisplayName"(): $Component
public "getName"(): StringJS
public "getColor"(): $ChatFormatting
public "getScoreboard"(): $Scoreboard
public "isAllowFriendlyFire"(): boolean
public "canSeeFriendlyInvisibles"(): boolean
public static "formatNameForTeam"(arg0: $Team$$Type, arg1: $Component$$Type): $MutableComponent
public "setDisplayName"(arg0: $Component$$Type): void
get "deathMessageVisibility"(): $Team$Visibility
get "players"(): $Collection<(StringJS)>
get "formattedDisplayName"(): $MutableComponent
set "playerPrefix"(value: $Component$$Type)
get "playerPrefix"(): $Component
set "playerSuffix"(value: $Component$$Type)
get "playerSuffix"(): $Component
set "allowFriendlyFire"(value: boolean)
set "seeFriendlyInvisibles"(value: boolean)
set "nameTagVisibility"(value: $Team$Visibility$$Type)
set "deathMessageVisibility"(value: $Team$Visibility$$Type)
set "collisionRule"(value: $Team$CollisionRule$$Type)
get "nameTagVisibility"(): $Team$Visibility
get "collisionRule"(): $Team$CollisionRule
set "color"(value: $ChatFormatting$$Type)
get "displayName"(): $Component
get "name"(): StringJS
get "color"(): $ChatFormatting
get "scoreboard"(): $Scoreboard
get "allowFriendlyFire"(): boolean
set "displayName"(value: $Component$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerTeam$$Type = ($PlayerTeam);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlayerTeam$$Original = $PlayerTeam;}
declare module "net.minecraft.world.scores.DisplaySlot" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"
import {$ChatFormatting$$Type} from "net.minecraft.ChatFormatting"
import {$IntFunction} from "java.util.function.IntFunction"

export class $DisplaySlot extends $Enum<($DisplaySlot)> implements $StringRepresentable$$Interface {
static readonly "BELOW_NAME": $DisplaySlot
static readonly "TEAM_GREEN": $DisplaySlot
static readonly "CODEC": $StringRepresentable$EnumCodec<($DisplaySlot)>
static readonly "TEAM_BLACK": $DisplaySlot
static readonly "TEAM_DARK_GREEN": $DisplaySlot
static readonly "TEAM_BLUE": $DisplaySlot
static readonly "TEAM_DARK_RED": $DisplaySlot
static readonly "TEAM_YELLOW": $DisplaySlot
static readonly "TEAM_DARK_GRAY": $DisplaySlot
static readonly "TEAM_AQUA": $DisplaySlot
static readonly "BY_ID": $IntFunction<($DisplaySlot)>
static readonly "SIDEBAR": $DisplaySlot
static readonly "TEAM_DARK_AQUA": $DisplaySlot
static readonly "TEAM_RED": $DisplaySlot
static readonly "TEAM_DARK_BLUE": $DisplaySlot
static readonly "TEAM_LIGHT_PURPLE": $DisplaySlot
static readonly "TEAM_DARK_PURPLE": $DisplaySlot
static readonly "TEAM_WHITE": $DisplaySlot
static readonly "TEAM_GOLD": $DisplaySlot
static readonly "LIST": $DisplaySlot
static readonly "TEAM_GRAY": $DisplaySlot

public static "teamColorToSlot"(arg0: $ChatFormatting$$Type): $DisplaySlot
public static "values"(): ($DisplaySlot)[]
public static "valueOf"(arg0: StringJS): $DisplaySlot
public "id"(): integer
public "getSerializedName"(): StringJS
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "fromEnum"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public "getRemappedEnumConstantName"(): StringJS
public static "fromEnumWithMapping"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
get "serializedName"(): StringJS
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DisplaySlot$$Type = (("list") | ("sidebar") | ("below_name") | ("sidebar.team.black") | ("sidebar.team.dark_blue") | ("sidebar.team.dark_green") | ("sidebar.team.dark_aqua") | ("sidebar.team.dark_red") | ("sidebar.team.dark_purple") | ("sidebar.team.gold") | ("sidebar.team.gray") | ("sidebar.team.dark_gray") | ("sidebar.team.blue") | ("sidebar.team.green") | ("sidebar.team.aqua") | ("sidebar.team.red") | ("sidebar.team.light_purple") | ("sidebar.team.yellow") | ("sidebar.team.white"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DisplaySlot$$Original = $DisplaySlot;}
declare module "net.minecraft.world.scores.Team" {
import {$Collection} from "java.util.Collection"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$Team$Visibility} from "net.minecraft.world.scores.Team$Visibility"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Team$CollisionRule} from "net.minecraft.world.scores.Team$CollisionRule"
import {$ChatFormatting} from "net.minecraft.ChatFormatting"

export class $Team {
constructor()

public "getDeathMessageVisibility"(): $Team$Visibility
public "getPlayers"(): $Collection<(StringJS)>
public "getFormattedName"(arg0: $Component$$Type): $MutableComponent
public "getNameTagVisibility"(): $Team$Visibility
public "getCollisionRule"(): $Team$CollisionRule
public "getName"(): StringJS
public "getColor"(): $ChatFormatting
public "isAlliedTo"(arg0: $Team$$Type): boolean
public "isAllowFriendlyFire"(): boolean
public "canSeeFriendlyInvisibles"(): boolean
get "deathMessageVisibility"(): $Team$Visibility
get "players"(): $Collection<(StringJS)>
get "nameTagVisibility"(): $Team$Visibility
get "collisionRule"(): $Team$CollisionRule
get "name"(): StringJS
get "color"(): $ChatFormatting
get "allowFriendlyFire"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Team$$Type = ($Team);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Team$$Original = $Team;}
declare module "net.minecraft.world.scores.Scoreboard" {
import {$Collection} from "java.util.Collection"
import {$ObjectiveCriteria$$Type} from "net.minecraft.world.scores.criteria.ObjectiveCriteria"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$ObjectiveCriteria$RenderType$$Type} from "net.minecraft.world.scores.criteria.ObjectiveCriteria$RenderType"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$NumberFormat$$Type} from "net.minecraft.network.chat.numbers.NumberFormat"
import {$ScoreAccess, $ScoreAccess$$Type} from "net.minecraft.world.scores.ScoreAccess"
import {$Object2IntMap} from "it.unimi.dsi.fastutil.objects.Object2IntMap"
import {$ReadOnlyScoreInfo} from "net.minecraft.world.scores.ReadOnlyScoreInfo"
import {$Objective, $Objective$$Type} from "net.minecraft.world.scores.Objective"
import {$ScoreHolder, $ScoreHolder$$Type} from "net.minecraft.world.scores.ScoreHolder"
import {$PlayerTeam, $PlayerTeam$$Type} from "net.minecraft.world.scores.PlayerTeam"
import {$PlayerScoreEntry} from "net.minecraft.world.scores.PlayerScoreEntry"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$DisplaySlot$$Type} from "net.minecraft.world.scores.DisplaySlot"

export class $Scoreboard {
static readonly "HIDDEN_SCORE_PREFIX": StringJS

constructor()

public "forAllObjectives"(arg0: $ObjectiveCriteria$$Type, arg1: $ScoreHolder$$Type, arg2: $Consumer$$Type<($ScoreAccess)>): void
public "onTeamChanged"(arg0: $PlayerTeam$$Type): void
public "getObjective"(arg0: StringJS): $Objective
public "getPlayerScoreInfo"(arg0: $ScoreHolder$$Type, arg1: $Objective$$Type): $ReadOnlyScoreInfo
public "addObjective"(arg0: StringJS, arg1: $ObjectiveCriteria$$Type, arg2: $Component$$Type, arg3: $ObjectiveCriteria$RenderType$$Type, arg4: boolean, arg5: $NumberFormat$$Type): $Objective
public "onObjectiveAdded"(arg0: $Objective$$Type): void
public "getOrCreatePlayerScore"(arg0: $ScoreHolder$$Type, arg1: $Objective$$Type, arg2: boolean): $ScoreAccess
public "getOrCreatePlayerScore"(arg0: $ScoreHolder$$Type, arg1: $Objective$$Type): $ScoreAccess
public "listPlayerScores"(arg0: $ScoreHolder$$Type): $Object2IntMap<($Objective)>
public "listPlayerScores"(arg0: $Objective$$Type): $Collection<($PlayerScoreEntry)>
public "getObjectives"(): $Collection<($Objective)>
public "getObjectiveNames"(): $Collection<(StringJS)>
public "getTrackedPlayers"(): $Collection<($ScoreHolder)>
public "resetAllPlayerScores"(arg0: $ScoreHolder$$Type): void
public "onPlayerRemoved"(arg0: $ScoreHolder$$Type): void
public "resetSinglePlayerScore"(arg0: $ScoreHolder$$Type, arg1: $Objective$$Type): void
public "onPlayerScoreRemoved"(arg0: $ScoreHolder$$Type, arg1: $Objective$$Type): void
public "removeObjective"(arg0: $Objective$$Type): void
public "getDisplayObjective"(arg0: $DisplaySlot$$Type): $Objective
public "setDisplayObjective"(arg0: $DisplaySlot$$Type, arg1: $Objective$$Type): void
public "onObjectiveRemoved"(arg0: $Objective$$Type): void
public "addPlayerTeam"(arg0: StringJS): $PlayerTeam
public "onTeamAdded"(arg0: $PlayerTeam$$Type): void
public "removePlayerTeam"(arg0: $PlayerTeam$$Type): void
public "onTeamRemoved"(arg0: $PlayerTeam$$Type): void
public "removePlayerFromTeam"(arg0: StringJS): boolean
public "removePlayerFromTeam"(arg0: StringJS, arg1: $PlayerTeam$$Type): void
public "getTeamNames"(): $Collection<(StringJS)>
public "getPlayerTeams"(): $Collection<($PlayerTeam)>
public "onObjectiveChanged"(arg0: $Objective$$Type): void
public "entityRemoved"(arg0: $Entity$$Type): void
public "getPlayerTeam"(arg0: StringJS): $PlayerTeam
public "addPlayerToTeam"(arg0: StringJS, arg1: $PlayerTeam$$Type): boolean
public "getPlayersTeam"(arg0: StringJS): $PlayerTeam
get "objectives"(): $Collection<($Objective)>
get "objectiveNames"(): $Collection<(StringJS)>
get "trackedPlayers"(): $Collection<($ScoreHolder)>
get "teamNames"(): $Collection<(StringJS)>
get "playerTeams"(): $Collection<($PlayerTeam)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Scoreboard$$Type = ($Scoreboard);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Scoreboard$$Original = $Scoreboard;}
