declare module "com.buuz135.functionalstorage.FunctionalStorage$DrawerType" {
import {$Enum} from "java.lang.Enum"
import {$TagKey} from "net.minecraft.tags.TagKey"
import {$Function} from "java.util.function.Function"
import {$Item} from "net.minecraft.world.item.Item"
import {$Pair} from "org.apache.commons.lang3.tuple.Pair"

export class $FunctionalStorage$DrawerType extends $Enum<($FunctionalStorage$DrawerType)> {
static readonly "X_2": $FunctionalStorage$DrawerType
static readonly "X_1": $FunctionalStorage$DrawerType
static readonly "X_4": $FunctionalStorage$DrawerType

public "getSlotPosition"(): $Function<(integer), ($Pair<(integer), (integer)>)>
public "getSlotAmount"(): integer
public "getTag"(): $TagKey<($Item)>
public "getDisplayName"(): StringJS
public static "values"(): ($FunctionalStorage$DrawerType)[]
public static "valueOf"(arg0: StringJS): $FunctionalStorage$DrawerType
public "getSlots"(): integer
get "slotPosition"(): $Function<(integer), ($Pair<(integer), (integer)>)>
get "slotAmount"(): integer
get "tag"(): $TagKey<($Item)>
get "displayName"(): StringJS
get "slots"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FunctionalStorage$DrawerType$$Type = (("x_1") | ("x_2") | ("x_4"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FunctionalStorage$DrawerType$$Original = $FunctionalStorage$DrawerType;}
