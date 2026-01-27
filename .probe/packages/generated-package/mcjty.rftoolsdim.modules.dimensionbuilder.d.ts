declare module "mcjty.rftoolsdim.modules.dimensionbuilder.items.DimensionMonitorItem" {
import {$ManualEntry} from "mcjty.lib.gui.ManualEntry"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$ITooltipSettings$$Interface} from "mcjty.lib.tooltips.ITooltipSettings"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"

export class $DimensionMonitorItem extends $Item implements $ITooltipSettings$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
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
export type $DimensionMonitorItem$$Type = ($DimensionMonitorItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DimensionMonitorItem$$Original = $DimensionMonitorItem;}
declare module "mcjty.rftoolsdim.modules.dimensionbuilder.items.EmptyDimensionTab" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"

export class $EmptyDimensionTab extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EmptyDimensionTab$$Type = ($EmptyDimensionTab);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EmptyDimensionTab$$Original = $EmptyDimensionTab;}
declare module "mcjty.rftoolsdim.modules.dimensionbuilder.items.PhasedFieldGenerator" {
import {$ManualEntry} from "mcjty.lib.gui.ManualEntry"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$ITooltipSettings$$Interface} from "mcjty.lib.tooltips.ITooltipSettings"
import {$IEnergyItem$$Interface} from "mcjty.lib.varia.IEnergyItem"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item} from "net.minecraft.world.item.Item"
import {$IEnergyStorage} from "net.neoforged.neoforge.energy.IEnergyStorage"

export class $PhasedFieldGenerator extends $Item implements $IEnergyItem$$Interface, $ITooltipSettings$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "shouldCauseReequipAnimation"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: boolean): boolean
public "getMaxEnergyStoredL"(arg0: $ItemStack$$Type): long
public "receiveEnergyL"(arg0: $ItemStack$$Type, arg1: long, arg2: boolean): long
public "extractEnergyL"(arg0: $ItemStack$$Type, arg1: long, arg2: boolean): long
public "getEnergyStoredL"(arg0: $ItemStack$$Type): long
public static "checkValidPhasedFieldGenerator"(arg0: $Player$$Type, arg1: boolean, arg2: integer): boolean
public "createEnergyStorage"(arg0: $ItemStack$$Type): $IEnergyStorage
public "extractEnergy"(arg0: $ItemStack$$Type, arg1: integer, arg2: boolean): integer
public "receiveEnergy"(arg0: $ItemStack$$Type, arg1: integer, arg2: boolean): integer
public "getEnergyStored"(arg0: $ItemStack$$Type): integer
public "getMaxEnergyStored"(arg0: $ItemStack$$Type): integer
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
export type $PhasedFieldGenerator$$Type = ($PhasedFieldGenerator);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PhasedFieldGenerator$$Original = $PhasedFieldGenerator;}
declare module "mcjty.rftoolsdim.modules.dimensionbuilder.items.RealizedDimensionTab" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item} from "net.minecraft.world.item.Item"

export class $RealizedDimensionTab extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RealizedDimensionTab$$Type = ($RealizedDimensionTab);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RealizedDimensionTab$$Original = $RealizedDimensionTab;}
