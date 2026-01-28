declare module "mcjty.rftoolsbase.modules.various.items.ManualItem" {
import {$ManualEntry} from "mcjty.lib.gui.ManualEntry"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$ITooltipSettings$$Interface} from "mcjty.lib.tooltips.ITooltipSettings"
import {$List$$Type} from "java.util.List"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item} from "net.minecraft.world.item.Item"

export class $ManualItem extends $Item implements $ITooltipSettings$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "getMaxWidth"(): integer
public "getManualEntry"(): $ManualEntry
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "maxWidth"(): integer
get "manualEntry"(): $ManualEntry
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ManualItem$$Type = ($ManualItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ManualItem$$Original = $ManualItem;}
declare module "mcjty.rftoolsbase.modules.various.items.SmartWrenchItem" {
import {$SmartWrenchMode, $SmartWrenchMode$$Type} from "mcjty.lib.api.smartwrench.SmartWrenchMode"
import {$ManualEntry} from "mcjty.lib.gui.ManualEntry"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$ITooltipSettings$$Interface} from "mcjty.lib.tooltips.ITooltipSettings"
import {$Optional} from "java.util.Optional"
import {$List$$Type} from "java.util.List"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$SmartWrench$$Interface} from "mcjty.lib.api.smartwrench.SmartWrench"
import {$GlobalPos, $GlobalPos$$Type} from "net.minecraft.core.GlobalPos"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export class $SmartWrenchItem extends $Item implements $SmartWrench$$Interface, $ITooltipSettings$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $SmartWrenchMode$$Type)

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public static "setCurrentBlock"(arg0: $ItemStack$$Type, arg1: $GlobalPos$$Type): void
public "getMode"(arg0: $ItemStack$$Type): $SmartWrenchMode
public "getMode"(): $SmartWrenchMode
public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public static "getCurrentBlock"(arg0: $ItemStack$$Type): $Optional<($GlobalPos)>
public "getUseDuration"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type): integer
public static "getCurrentMode"(arg0: $ItemStack$$Type): $SmartWrenchMode
public "getMaxWidth"(): integer
public "getManualEntry"(): $ManualEntry
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "mode"(): $SmartWrenchMode
get "maxWidth"(): integer
get "manualEntry"(): $ManualEntry
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SmartWrenchItem$$Type = ($SmartWrenchItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SmartWrenchItem$$Original = $SmartWrenchItem;}
