declare module "mcjty.lib.multipart.IPartBlock" {
import {$PartSlot, $PartSlot$$Type} from "mcjty.lib.multipart.PartSlot"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $IPartBlock$$Interface {

(arg0: $Level, arg1: $BlockPos, arg2: $BlockState): $PartSlot$$Type
}

export class $IPartBlock implements $IPartBlock$$Interface {
 "getSlotFromState"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): $PartSlot
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPartBlock$$Type = ((arg0: $Level, arg1: $BlockPos, arg2: $BlockState) => $PartSlot$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IPartBlock$$Original = $IPartBlock;}
declare module "mcjty.lib.multipart.PartSlot" {
import {$Enum} from "java.lang.Enum"

export class $PartSlot extends $Enum<($PartSlot)> {
static readonly "WEST_UN_BACK": $PartSlot
static readonly "DOWN": $PartSlot
static readonly "UP_SE_BACK": $PartSlot
static readonly "WEST": $PartSlot
static readonly "UP_NE": $PartSlot
static readonly "SOUTH_DE": $PartSlot
static readonly "SOUTH_UE_BACK": $PartSlot
static readonly "DOWN_NE": $PartSlot
static readonly "EAST_US": $PartSlot
static readonly "EAST_US_BACK": $PartSlot
static readonly "NORTH": $PartSlot
static readonly "DOWN_NW_BACK": $PartSlot
static readonly "SOUTH_DW_BACK": $PartSlot
static readonly "UP": $PartSlot
static readonly "SOUTH": $PartSlot
static readonly "WEST_US": $PartSlot
static readonly "NONE": $PartSlot
static readonly "WEST_UN": $PartSlot
static readonly "WEST_US_BACK": $PartSlot
static readonly "WEST_DN_BACK": $PartSlot
static readonly "NORTH_UW_BACK": $PartSlot
static readonly "EAST_DS": $PartSlot
static readonly "UP_SE": $PartSlot
static readonly "EAST_UN_BACK": $PartSlot
static readonly "EAST_UN": $PartSlot
static readonly "WEST_DS": $PartSlot
static readonly "NORTH_DE_BACK": $PartSlot
static readonly "NORTH_UE_BACK": $PartSlot
static readonly "SOUTH_UW": $PartSlot
static readonly "WEST_DN": $PartSlot
static readonly "DOWN_NE_BACK": $PartSlot
static readonly "UP_NW_BACK": $PartSlot
static readonly "SOUTH_UW_BACK": $PartSlot
static readonly "SOUTH_DE_BACK": $PartSlot
static readonly "SOUTH_UE": $PartSlot
static readonly "UP_NW": $PartSlot
static readonly "SOUTH_DW": $PartSlot
static readonly "EAST_DN": $PartSlot
static readonly "EAST_DS_BACK": $PartSlot
static readonly "DOWN_SW": $PartSlot
static readonly "DOWN_SE_BACK": $PartSlot
static readonly "NORTH_DE": $PartSlot
static readonly "DOWN_SW_BACK": $PartSlot
static readonly "UP_NE_BACK": $PartSlot
static readonly "EAST_DN_BACK": $PartSlot
static readonly "VALUES": ($PartSlot)[]
static readonly "UP_SW": $PartSlot
static readonly "EAST": $PartSlot
static readonly "DOWN_NW": $PartSlot
static readonly "NORTH_DW_BACK": $PartSlot
static readonly "DOWN_SE": $PartSlot
static readonly "NORTH_UW": $PartSlot
static readonly "UP_SW_BACK": $PartSlot
static readonly "NORTH_DW": $PartSlot
static readonly "NORTH_UE": $PartSlot
static readonly "WEST_DS_BACK": $PartSlot

public "getBackSlot"(): $PartSlot
public static "values"(): ($PartSlot)[]
public static "valueOf"(arg0: StringJS): $PartSlot
public static "byName"(arg0: StringJS): $PartSlot
get "backSlot"(): $PartSlot
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PartSlot$$Type = (("none") | ("down") | ("up") | ("north") | ("south") | ("west") | ("east") | ("down_nw") | ("down_ne") | ("down_sw") | ("down_se") | ("up_nw") | ("up_ne") | ("up_sw") | ("up_se") | ("north_uw") | ("north_ue") | ("north_dw") | ("north_de") | ("south_uw") | ("south_ue") | ("south_dw") | ("south_de") | ("west_us") | ("west_un") | ("west_ds") | ("west_dn") | ("east_us") | ("east_un") | ("east_ds") | ("east_dn") | ("down_nw_back") | ("down_ne_back") | ("down_sw_back") | ("down_se_back") | ("up_nw_back") | ("up_ne_back") | ("up_sw_back") | ("up_se_back") | ("north_uw_back") | ("north_ue_back") | ("north_dw_back") | ("north_de_back") | ("south_uw_back") | ("south_ue_back") | ("south_dw_back") | ("south_de_back") | ("west_us_back") | ("west_un_back") | ("west_ds_back") | ("west_dn_back") | ("east_us_back") | ("east_un_back") | ("east_ds_back") | ("east_dn_back"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PartSlot$$Original = $PartSlot;}
