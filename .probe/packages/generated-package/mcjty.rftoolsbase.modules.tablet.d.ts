declare module "mcjty.rftoolsbase.modules.tablet.items.TabletItem" {
import {$ManualEntry} from "mcjty.lib.gui.ManualEntry"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$ITooltipSettings$$Interface} from "mcjty.lib.tooltips.ITooltipSettings"
import {$IItemCycler$$Interface} from "mcjty.rftoolsbase.api.various.IItemCycler"
import {$List, $List$$Type} from "java.util.List"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item} from "net.minecraft.world.item.Item"
import {$BaseItem} from "mcjty.lib.items.BaseItem"

export class $TabletItem extends $BaseItem implements $IItemCycler$$Interface, $ITooltipSettings$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "MANUAL": $ManualEntry
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "shouldCauseReequipAnimation"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: boolean): boolean
public static "getHand"(arg0: $Player$$Type): $InteractionHand
public "getItemsForTab"(): $List<($ItemStack)>
public "getManualEntry"(): $ManualEntry
public static "setContainingItem"(arg0: $Player$$Type, arg1: $InteractionHand$$Type, arg2: integer, arg3: $ItemStack$$Type): void
public static "getContainingItem"(arg0: $ItemStack$$Type, arg1: integer): $ItemStack
public static "getCurrentSlot"(arg0: $ItemStack$$Type): integer
public static "setCurrentSlot"(arg0: $Player$$Type, arg1: $ItemStack$$Type, arg2: integer): void
public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "cycle"(arg0: $Player$$Type, arg1: $ItemStack$$Type, arg2: boolean): void
public "getMaxWidth"(): integer
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "itemsForTab"(): $List<($ItemStack)>
get "manualEntry"(): $ManualEntry
get "maxWidth"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TabletItem$$Type = ($TabletItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TabletItem$$Original = $TabletItem;}
