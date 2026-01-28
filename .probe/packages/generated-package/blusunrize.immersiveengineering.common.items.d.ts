declare module "blusunrize.immersiveengineering.common.items.UpgradeableToolItem" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$IUpgradeableTool$$Interface} from "blusunrize.immersiveengineering.api.tool.upgrade.IUpgradeableTool"
import {$IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"
import {$Slot} from "net.minecraft.world.inventory.Slot"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InternalStorageItem} from "blusunrize.immersiveengineering.common.items.InternalStorageItem"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$AbstractContainerMenu$$Type} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$UpgradeData} from "blusunrize.immersiveengineering.api.tool.upgrade.UpgradeData"
import {$RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"

export class $UpgradeableToolItem extends $InternalStorageItem implements $IUpgradeableTool$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type, arg1: StringJS, arg2: integer)

public "shouldCauseReequipAnimation"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: boolean): boolean
public static "getUpgradesStatic"(arg0: $ItemStack$$Type): $UpgradeData
public "finishUpgradeRecalculation"(arg0: $ItemStack$$Type, arg1: $RegistryAccess$$Type): void
public "removeFromWorkbench"(arg0: $Player$$Type, arg1: $ItemStack$$Type): void
public "clearUpgrades"(arg0: $ItemStack$$Type): void
public "getUpgradeBase"(arg0: $ItemStack$$Type): $UpgradeData
public "recalculateUpgrades"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $Player$$Type): void
public "canTakeFromWorkbench"(arg0: $ItemStack$$Type): boolean
public "getUpgrades"(arg0: $ItemStack$$Type): $UpgradeData
public "removeUpgrade"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $ItemStack$$Type): void
public "canModify"(arg0: $ItemStack$$Type): boolean
public "getWorkbenchSlots"(arg0: $AbstractContainerMenu$$Type, arg1: $ItemStack$$Type, arg2: $Level$$Type, arg3: $Supplier$$Type<($Player$$Type)>, arg4: $IItemHandler$$Type): ($Slot)[]
public "getUpgradeAfterRemoval"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): $ItemStack
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UpgradeableToolItem$$Type = ($UpgradeableToolItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $UpgradeableToolItem$$Original = $UpgradeableToolItem;}
declare module "blusunrize.immersiveengineering.common.items.FertilizerItem" {
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$IEBaseItem} from "blusunrize.immersiveengineering.common.items.IEBaseItem"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"

export class $FertilizerItem extends $IEBaseItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FertilizerItem$$Type = ($FertilizerItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FertilizerItem$$Original = $FertilizerItem;}
declare module "blusunrize.immersiveengineering.common.items.RevolverItem$SpecialRevolver" {
import {$List, $List$$Type} from "java.util.List"
import {$UpgradeData, $UpgradeData$$Type} from "blusunrize.immersiveengineering.api.tool.upgrade.UpgradeData"
import {$DualCodec} from "malte0811.dualcodecs.DualCodec"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$Record} from "java.lang.Record"

export class $RevolverItem$SpecialRevolver extends $Record {
static readonly "CODECS": $DualCodec<($ByteBuf), ($RevolverItem$SpecialRevolver)>

constructor(uuid: $List$$Type<(StringJS)>, tag: StringJS, flavour: StringJS, baseUpgrades: $UpgradeData$$Type, renderAdditions: $List$$Type<(StringJS)>)

public "flavour"(): StringJS
public "baseUpgrades"(): $UpgradeData
public "renderAdditions"(): $List<(StringJS)>
public "tag"(): StringJS
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "uuid"(): $List<(StringJS)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RevolverItem$SpecialRevolver$$Type = ({"uuid"?: $List$$Type<(StringJS)>, "baseUpgrades"?: $UpgradeData$$Type, "renderAdditions"?: $List$$Type<(StringJS)>, "flavour"?: StringJS, "tag"?: StringJS}) | ([uuid?: $List$$Type<(StringJS)>, baseUpgrades?: $UpgradeData$$Type, renderAdditions?: $List$$Type<(StringJS)>, flavour?: StringJS, tag?: StringJS]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RevolverItem$SpecialRevolver$$Original = $RevolverItem$SpecialRevolver;}
declare module "blusunrize.immersiveengineering.common.items.VoltmeterItem$RemoteRedstoneData" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$FastEither, $FastEither$$Type} from "blusunrize.immersiveengineering.api.utils.FastEither"
import {$Pair, $Pair$$Type} from "com.mojang.datafixers.util.Pair"
import {$DyeColor, $DyeColor$$Type} from "net.minecraft.world.item.DyeColor"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$Record} from "java.lang.Record"

export class $VoltmeterItem$RemoteRedstoneData extends $Record {
static readonly "STREAM_CODEC": $StreamCodec<($ByteBuf), ($VoltmeterItem$RemoteRedstoneData)>

constructor(arg0: $BlockPos$$Type, arg1: long, arg2: boolean, arg3: byte)
constructor(pos: $BlockPos$$Type, measuredInTick: long, isSignalSource: boolean, rsLevels: $FastEither$$Type<(byte), (($Pair$$Type<($DyeColor$$Type), (byte)>)[])>)
constructor(arg0: $BlockPos$$Type, arg1: long, arg2: boolean, arg3: ($Pair$$Type<($DyeColor$$Type), (byte)>)[])

public "measuredInTick"(): long
public "rsLevels"(): $FastEither<(byte), (($Pair<($DyeColor), (byte)>)[])>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "pos"(): $BlockPos
public "isSignalSource"(): boolean
get "signalSource"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VoltmeterItem$RemoteRedstoneData$$Type = ({"rsLevels"?: $FastEither$$Type<(byte), (($Pair$$Type<($DyeColor$$Type), (byte)>)[])>, "measuredInTick"?: long, "pos"?: $BlockPos$$Type, "isSignalSource"?: boolean}) | ([rsLevels?: $FastEither$$Type<(byte), (($Pair$$Type<($DyeColor$$Type), (byte)>)[])>, measuredInTick?: long, pos?: $BlockPos$$Type, isSignalSource?: boolean]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $VoltmeterItem$RemoteRedstoneData$$Original = $VoltmeterItem$RemoteRedstoneData;}
declare module "blusunrize.immersiveengineering.common.items.FaradaySuitItem" {
import {$IElectricEquipment$$Interface} from "blusunrize.immersiveengineering.api.tool.IElectricEquipment"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemAttributeModifiers} from "net.minecraft.world.item.component.ItemAttributeModifiers"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$ArmorMaterial$Layer$$Type} from "net.minecraft.world.item.ArmorMaterial$Layer"
import {$Equipable} from "net.minecraft.world.item.Equipable"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$DamageSource$$Type} from "net.minecraft.world.damagesource.DamageSource"
import {$EquipmentSlot$$Type} from "net.minecraft.world.entity.EquipmentSlot"
import {$Supplier} from "java.util.function.Supplier"
import {$ArmorItem} from "net.minecraft.world.item.ArmorItem"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$DispenseItemBehavior} from "net.minecraft.core.dispenser.DispenseItemBehavior"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$ArmorItem$Type$$Type} from "net.minecraft.world.item.ArmorItem$Type"
import {$IElectricEquipment$ElectricSource$$Type} from "blusunrize.immersiveengineering.api.tool.IElectricEquipment$ElectricSource"

export class $FaradaySuitItem extends $ArmorItem implements $IElectricEquipment$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
 "defaultModifiers": $Supplier<($ItemAttributeModifiers)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $ArmorItem$Type$$Type)

public "isBookEnchantable"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): boolean
public "getArmorTexture"(arg0: $ItemStack$$Type, arg1: $Entity$$Type, arg2: $EquipmentSlot$$Type, arg3: $ArmorMaterial$Layer$$Type, arg4: boolean): $ResourceLocation
public "onStrike"(arg0: $ItemStack$$Type, arg1: $EquipmentSlot$$Type, arg2: $LivingEntity$$Type, arg3: $Map$$Type<(StringJS), (any)>, arg4: $DamageSource$$Type, arg5: $IElectricEquipment$ElectricSource$$Type): void
public static "applyToEntity"(arg0: $LivingEntity$$Type, arg1: $DamageSource$$Type, arg2: $IElectricEquipment$ElectricSource$$Type): void
public static "get"(arg0: $ItemStack$$Type): $Equipable
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FaradaySuitItem$$Type = ($FaradaySuitItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FaradaySuitItem$$Original = $FaradaySuitItem;}
declare module "blusunrize.immersiveengineering.common.items.upgrades.ToolUpgrade" {
import {$BiFunction} from "java.util.function.BiFunction"
import {$BiPredicate} from "java.util.function.BiPredicate"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Enum} from "java.lang.Enum"
import {$ImmutableSet} from "com.google.common.collect.ImmutableSet"
import {$UpgradeData} from "blusunrize.immersiveengineering.api.tool.upgrade.UpgradeData"

export class $ToolUpgrade extends $Enum<($ToolUpgrade)> {
static readonly "POWERPACK_ANTENNA": $ToolUpgrade
readonly "toolset": $ImmutableSet<(StringJS)>
static readonly "DRILL_CAPACITY": $ToolUpgrade
static readonly "RAILGUN_CAPACITORS": $ToolUpgrade
static readonly "POWERPACK_TESLA": $ToolUpgrade
static readonly "RAILGUN_SCOPE": $ToolUpgrade
static readonly "DRILL_DAMAGE": $ToolUpgrade
static readonly "SHIELD_FLASH": $ToolUpgrade
readonly "stackSize": integer
readonly "function": $BiFunction<($ItemStack), ($UpgradeData), ($UpgradeData)>
static readonly "DRILL_WATERPROOF": $ToolUpgrade
static readonly "DRILL_FORTUNE": $ToolUpgrade
static readonly "REVOLVER_BAYONET": $ToolUpgrade
static readonly "DRILL_LUBE": $ToolUpgrade
static readonly "REVOLVER_ELECTRO": $ToolUpgrade
static readonly "SHIELD_MAGNET": $ToolUpgrade
static readonly "POWERPACK_MAGNET": $ToolUpgrade
static readonly "SKYHOOK_SLOPE": $ToolUpgrade
static readonly "REVOLVER_MAGAZINE": $ToolUpgrade
static readonly "BUZZSAW_SPAREBLADES": $ToolUpgrade
static readonly "SKYHOOK_MACE": $ToolUpgrade
static readonly "SHIELD_SHOCK": $ToolUpgrade
static readonly "POWERPACK_INDUCTION": $ToolUpgrade
static readonly "SKYHOOK_INSULATION": $ToolUpgrade
static readonly "CHEMTHROWER_FOCUS": $ToolUpgrade
static readonly "CHEMTHROWER_MULTITANK": $ToolUpgrade
readonly "applyCheck": $BiPredicate<($ItemStack), ($UpgradeData)>

public static "values"(): ($ToolUpgrade)[]
public static "valueOf"(arg0: StringJS): $ToolUpgrade
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ToolUpgrade$$Type = (("drill_waterproof") | ("drill_lube") | ("drill_damage") | ("drill_fortune") | ("drill_capacity") | ("revolver_bayonet") | ("revolver_magazine") | ("revolver_electro") | ("chemthrower_focus") | ("railgun_scope") | ("railgun_capacitors") | ("shield_flash") | ("shield_shock") | ("shield_magnet") | ("chemthrower_multitank") | ("buzzsaw_spareblades") | ("powerpack_antenna") | ("powerpack_induction") | ("powerpack_tesla") | ("powerpack_magnet") | ("skyhook_slope") | ("skyhook_insulation") | ("skyhook_mace"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ToolUpgrade$$Original = $ToolUpgrade;}
declare module "blusunrize.immersiveengineering.common.items.IEMinecartItem" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$IEMinecartEntity$MinecartConstructor$$Type} from "blusunrize.immersiveengineering.common.entities.IEMinecartEntity$MinecartConstructor"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$IEMinecartEntity} from "blusunrize.immersiveengineering.common.entities.IEMinecartEntity"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$IEBaseItem} from "blusunrize.immersiveengineering.common.items.IEBaseItem"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$DispenseItemBehavior} from "net.minecraft.core.dispenser.DispenseItemBehavior"

export class $IEMinecartItem extends $IEBaseItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MINECART_DISPENSER_BEHAVIOR": $DispenseItemBehavior
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $IEMinecartEntity$MinecartConstructor$$Type, arg1: boolean)

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public "canFitInsideContainerItems"(): boolean
public "createCart"(arg0: $Level$$Type, arg1: double, arg2: double, arg3: double, arg4: $ItemStack$$Type): $IEMinecartEntity<(never)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEMinecartItem$$Type = ($IEMinecartItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IEMinecartItem$$Original = $IEMinecartItem;}
declare module "blusunrize.immersiveengineering.common.items.IEItemInterfaces$IColouredItem" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"

export interface $IEItemInterfaces$IColouredItem$$Interface {

(arg0: $ItemStack, arg1: integer): integer
}

export class $IEItemInterfaces$IColouredItem implements $IEItemInterfaces$IColouredItem$$Interface {
 "getColourForIEItem"(arg0: $ItemStack$$Type, arg1: integer): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEItemInterfaces$IColouredItem$$Type = ((arg0: $ItemStack, arg1: integer) => integer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IEItemInterfaces$IColouredItem$$Original = $IEItemInterfaces$IColouredItem;}
declare module "blusunrize.immersiveengineering.common.items.RockcutterItem" {
import {$Enchantment} from "net.minecraft.world.item.enchantment.Enchantment"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Predicate} from "java.util.function.Predicate"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$Set} from "java.util.Set"
import {$ResourceKey} from "net.minecraft.resources.ResourceKey"
import {$SawbladeItem} from "blusunrize.immersiveengineering.common.items.SawbladeItem"
import {$ItemAbility} from "net.neoforged.neoforge.common.ItemAbility"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $RockcutterItem extends $SawbladeItem {
static readonly "TEXTURE": $ResourceLocation
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: integer, arg1: float, arg2: float)

public "getExtraEnchantments"(): $Map<($ResourceKey<($Enchantment)>), (integer)>
public "getSawbladeMaterials"(): $Predicate<($BlockState)>
public "getItemAbilities"(): $Set<($ItemAbility)>
public "canSawbladeFellTree"(): boolean
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "extraEnchantments"(): $Map<($ResourceKey<($Enchantment)>), (integer)>
get "sawbladeMaterials"(): $Predicate<($BlockState)>
get "itemAbilities"(): $Set<($ItemAbility)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RockcutterItem$$Type = ($RockcutterItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RockcutterItem$$Original = $RockcutterItem;}
declare module "blusunrize.immersiveengineering.common.items.WirecutterItem" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ItemAbility$$Type} from "net.neoforged.neoforge.common.ItemAbility"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$IEBaseItem} from "blusunrize.immersiveengineering.common.items.IEBaseItem"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $WirecutterItem extends $IEBaseItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public "getMaxDamage"(arg0: $ItemStack$$Type): integer
public "mineBlock"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $BlockState$$Type, arg3: $BlockPos$$Type, arg4: $LivingEntity$$Type): boolean
public "hasCraftingRemainingItem"(arg0: $ItemStack$$Type): boolean
public "isEnchantable"(arg0: $ItemStack$$Type): boolean
public "isValidRepairItem"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): boolean
public "getEnchantmentValue"(): integer
public "isBookEnchantable"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): boolean
public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "getCraftingRemainingItem"(arg0: $ItemStack$$Type): $ItemStack
public "canPerformAction"(arg0: $ItemStack$$Type, arg1: $ItemAbility$$Type): boolean
public "getDestroySpeed"(arg0: $ItemStack$$Type, arg1: $BlockState$$Type): float
public "isCorrectToolForDrops"(arg0: $ItemStack$$Type, arg1: $BlockState$$Type): boolean
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "enchantmentValue"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WirecutterItem$$Type = ($WirecutterItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WirecutterItem$$Original = $WirecutterItem;}
declare module "blusunrize.immersiveengineering.common.items.LogicCircuitBoardItem" {
import {$Map} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$IEBaseItem} from "blusunrize.immersiveengineering.common.items.IEBaseItem"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$LogicCircuitHandler$LogicCircuitInstruction$$Type} from "blusunrize.immersiveengineering.api.tool.LogicCircuitHandler$LogicCircuitInstruction"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"

export class $LogicCircuitBoardItem extends $IEBaseItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public static "buildCircuitBoard"(arg0: $LogicCircuitHandler$LogicCircuitInstruction$$Type): $ItemStack
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LogicCircuitBoardItem$$Type = ($LogicCircuitBoardItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LogicCircuitBoardItem$$Original = $LogicCircuitBoardItem;}
declare module "blusunrize.immersiveengineering.common.items.MaintenanceKitItem" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Map} from "java.util.Map"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$IEBaseItem} from "blusunrize.immersiveengineering.common.items.IEBaseItem"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Item} from "net.minecraft.world.item.Item"

export class $MaintenanceKitItem extends $IEBaseItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MaintenanceKitItem$$Type = ($MaintenanceKitItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MaintenanceKitItem$$Original = $MaintenanceKitItem;}
declare module "blusunrize.immersiveengineering.common.items.RevolverItem$RevolverPerk" {
import {$RevolverItem$Perks, $RevolverItem$Perks$$Type} from "blusunrize.immersiveengineering.common.items.RevolverItem$Perks"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$Enum} from "java.lang.Enum"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"

export class $RevolverItem$RevolverPerk extends $Enum<($RevolverItem$RevolverPerk)> {
static readonly "LUCK": $RevolverItem$RevolverPerk
static readonly "COOLDOWN": $RevolverItem$RevolverPerk
static readonly "NOISE": $RevolverItem$RevolverPerk

public static "getFormattedName"(arg0: $Component$$Type, arg1: $RevolverItem$Perks$$Type): $Component
public "generateValue"(arg0: $RandomSource$$Type, arg1: boolean, arg2: float): double
public "getNBTKey"(): StringJS
public static "calculateTier"(arg0: $RevolverItem$Perks$$Type): integer
public static "generatePerkSet"(arg0: $RandomSource$$Type, arg1: float): $RevolverItem$Perks
public "getDisplayString"(arg0: double): $Component
public static "get"(arg0: StringJS): $RevolverItem$RevolverPerk
public "toString"(): StringJS
public static "values"(): ($RevolverItem$RevolverPerk)[]
public static "valueOf"(arg0: StringJS): $RevolverItem$RevolverPerk
public "concat"(arg0: double, arg1: double): double
public static "getRandom"(arg0: $RandomSource$$Type): $RevolverItem$RevolverPerk
get "NBTKey"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RevolverItem$RevolverPerk$$Type = (("cooldown") | ("noise") | ("luck"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RevolverItem$RevolverPerk$$Original = $RevolverItem$RevolverPerk;}
declare module "blusunrize.immersiveengineering.common.items.FluorescentTubeItem" {
import {$IElectricEquipment$$Interface} from "blusunrize.immersiveengineering.api.tool.IElectricEquipment"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$IConfigurableTool$ToolConfig$ToolConfigFloat} from "blusunrize.immersiveengineering.api.tool.IConfigurableTool$ToolConfig$ToolConfigFloat"
import {$List$$Type} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Color4, $Color4$$Type} from "blusunrize.immersiveengineering.api.utils.Color4"
import {$EquipmentSlot$$Type} from "net.minecraft.world.entity.EquipmentSlot"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$IConfigurableTool$ToolConfig$ToolConfigBoolean} from "blusunrize.immersiveengineering.api.tool.IConfigurableTool$ToolConfig$ToolConfigBoolean"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$Map, $Map$$Type} from "java.util.Map"
import {$IConfigurableTool$ToolConfig$$Type} from "blusunrize.immersiveengineering.api.tool.IConfigurableTool$ToolConfig"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$IConfigurableTool$$Interface} from "blusunrize.immersiveengineering.api.tool.IConfigurableTool"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$DamageSource$$Type} from "net.minecraft.world.damagesource.DamageSource"
import {$IEItemInterfaces$IColouredItem$$Interface} from "blusunrize.immersiveengineering.common.items.IEItemInterfaces$IColouredItem"
import {$IEBaseItem} from "blusunrize.immersiveengineering.common.items.IEBaseItem"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$IElectricEquipment$ElectricSource$$Type} from "blusunrize.immersiveengineering.api.tool.IElectricEquipment$ElectricSource"

export class $FluorescentTubeItem extends $IEBaseItem implements $IConfigurableTool$$Interface, $IElectricEquipment$$Interface, $IEItemInterfaces$IColouredItem$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public "inventoryTick"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $Entity$$Type, arg3: integer, arg4: boolean): void
public "shouldCauseReequipAnimation"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: boolean): boolean
public static "isLit"(arg0: $ItemStack$$Type): boolean
public static "setLit"(arg0: $ItemStack$$Type, arg1: float): void
public "onStrike"(arg0: $ItemStack$$Type, arg1: $EquipmentSlot$$Type, arg2: $LivingEntity$$Type, arg3: $Map$$Type<(StringJS), (any)>, arg4: $DamageSource$$Type, arg5: $IElectricEquipment$ElectricSource$$Type): void
public "getColourForIEItem"(arg0: $ItemStack$$Type, arg1: integer): integer
public "canConfigure"(arg0: $ItemStack$$Type): boolean
public "getFloatOptions"(arg0: $ItemStack$$Type): ($IConfigurableTool$ToolConfig$ToolConfigFloat)[]
public "fomatConfigName"(arg0: $ItemStack$$Type, arg1: $IConfigurableTool$ToolConfig$$Type): StringJS
public "fomatConfigDescription"(arg0: $ItemStack$$Type, arg1: $IConfigurableTool$ToolConfig$$Type): StringJS
public "applyConfigOption"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: any): void
public static "getRGBFloat"(arg0: $ItemStack$$Type, arg1: float): (float)[]
public static "getRGBInt"(arg0: $ItemStack$$Type, arg1: float): integer
public static "getRGB"(arg0: $ItemStack$$Type): $Color4
public static "setRGB"(arg0: $ItemStack$$Type, arg1: $Color4$$Type): void
public "getBooleanOptions"(arg0: $ItemStack$$Type): ($IConfigurableTool$ToolConfig$ToolConfigBoolean)[]
public static "applyToEntity"(arg0: $LivingEntity$$Type, arg1: $DamageSource$$Type, arg2: $IElectricEquipment$ElectricSource$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluorescentTubeItem$$Type = ($FluorescentTubeItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FluorescentTubeItem$$Original = $FluorescentTubeItem;}
declare module "blusunrize.immersiveengineering.common.items.SkyhookItem" {
import {$IElectricEquipment$$Interface} from "blusunrize.immersiveengineering.api.tool.IElectricEquipment"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$ItemAttributeModifiers} from "net.minecraft.world.item.component.ItemAttributeModifiers"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Slot} from "net.minecraft.world.inventory.Slot"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$EquipmentSlot$$Type} from "net.minecraft.world.entity.EquipmentSlot"
import {$Item} from "net.minecraft.world.item.Item"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$Map, $Map$$Type} from "java.util.Map"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$UpgradeableToolItem} from "blusunrize.immersiveengineering.common.items.UpgradeableToolItem"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"
import {$DamageSource$$Type} from "net.minecraft.world.damagesource.DamageSource"
import {$AbstractContainerMenu$$Type} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$IElectricEquipment$ElectricSource$$Type} from "blusunrize.immersiveengineering.api.tool.IElectricEquipment$ElectricSource"

export class $SkyhookItem extends $UpgradeableToolItem implements $IElectricEquipment$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "TYPE": StringJS
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "inventoryTick"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $Entity$$Type, arg3: integer, arg4: boolean): void
public "getDefaultAttributeModifiers"(arg0: $ItemStack$$Type): $ItemAttributeModifiers
public "onStrike"(arg0: $ItemStack$$Type, arg1: $EquipmentSlot$$Type, arg2: $LivingEntity$$Type, arg3: $Map$$Type<(StringJS), (any)>, arg4: $DamageSource$$Type, arg5: $IElectricEquipment$ElectricSource$$Type): void
public "canModify"(arg0: $ItemStack$$Type): boolean
public "getWorkbenchSlots"(arg0: $AbstractContainerMenu$$Type, arg1: $ItemStack$$Type, arg2: $Level$$Type, arg3: $Supplier$$Type<($Player$$Type)>, arg4: $IItemHandler$$Type): ($Slot)[]
public "getSlopeModifier"(arg0: $ItemStack$$Type): float
public static "shouldLimitSpeed"(arg0: $ItemStack$$Type): boolean
public static "setLimitSpeed"(arg0: $ItemStack$$Type, arg1: boolean): void
public static "toggleSpeedLimit"(arg0: $ItemStack$$Type): boolean
public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "onUseTick"(arg0: $Level$$Type, arg1: $LivingEntity$$Type, arg2: $ItemStack$$Type, arg3: integer): void
public "getUseDuration"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type): integer
public "releaseUsing"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $LivingEntity$$Type, arg3: integer): void
public "getAttackDamageBonus"(arg0: $Entity$$Type, arg1: float, arg2: $DamageSource$$Type): float
public "hurtEnemy"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type): boolean
public "postHurtEnemy"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type): void
public static "applyToEntity"(arg0: $LivingEntity$$Type, arg1: $DamageSource$$Type, arg2: $IElectricEquipment$ElectricSource$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SkyhookItem$$Type = ($SkyhookItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SkyhookItem$$Original = $SkyhookItem;}
declare module "blusunrize.immersiveengineering.common.items.ChemthrowerItem" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$FluidStack, $FluidStack$$Type} from "net.neoforged.neoforge.fluids.FluidStack"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Slot} from "net.minecraft.world.inventory.Slot"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item} from "net.minecraft.world.item.Item"
import {$IEItemInterfaces$IScrollwheel$$Interface} from "blusunrize.immersiveengineering.common.items.IEItemInterfaces$IScrollwheel"
import {$IEItemInterfaces$IAdvancedFluidItem$$Interface} from "blusunrize.immersiveengineering.common.items.IEItemInterfaces$IAdvancedFluidItem"
import {$Map} from "java.util.Map"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$ItemCapabilityRegistration$ItemCapabilityRegistrar$$Type} from "blusunrize.immersiveengineering.common.items.ItemCapabilityRegistration$ItemCapabilityRegistrar"
import {$UpgradeableToolItem} from "blusunrize.immersiveengineering.common.items.UpgradeableToolItem"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"
import {$UseAnim} from "net.minecraft.world.item.UseAnim"
import {$AbstractContainerMenu$$Type} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"

export class $ChemthrowerItem extends $UpgradeableToolItem implements $IEItemInterfaces$IAdvancedFluidItem$$Interface, $IEItemInterfaces$IScrollwheel$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "TYPE": StringJS
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "getFluid"(arg0: $ItemStack$$Type): $FluidStack
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "shouldCauseReequipAnimation"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: boolean): boolean
public "onScrollwheel"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: boolean): void
public "finishUpgradeRecalculation"(arg0: $ItemStack$$Type, arg1: $RegistryAccess$$Type): void
public static "isIgniteEnable"(arg0: $ItemStack$$Type): boolean
public static "setIgniteEnable"(arg0: $ItemStack$$Type, arg1: boolean): void
public "removeFromWorkbench"(arg0: $Player$$Type, arg1: $ItemStack$$Type): void
public "canModify"(arg0: $ItemStack$$Type): boolean
public "getWorkbenchSlots"(arg0: $AbstractContainerMenu$$Type, arg1: $ItemStack$$Type, arg2: $Level$$Type, arg3: $Supplier$$Type<($Player$$Type)>, arg4: $IItemHandler$$Type): ($Slot)[]
public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "getCapacity"(arg0: $ItemStack$$Type, arg1: integer): integer
public "onUseTick"(arg0: $Level$$Type, arg1: $LivingEntity$$Type, arg2: $ItemStack$$Type, arg3: integer): void
public "getUseDuration"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type): integer
public "getUseAnimation"(arg0: $ItemStack$$Type): $UseAnim
public "releaseUsing"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $LivingEntity$$Type, arg3: integer): void
public static "registerCapabilities"(arg0: $ItemCapabilityRegistration$ItemCapabilityRegistrar$$Type): void
public "allowFluid"(arg0: $ItemStack$$Type, arg1: $FluidStack$$Type): boolean
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChemthrowerItem$$Type = ($ChemthrowerItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChemthrowerItem$$Original = $ChemthrowerItem;}
declare module "blusunrize.immersiveengineering.common.items.FakeIconItem" {
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$IEBaseItem} from "blusunrize.immersiveengineering.common.items.IEBaseItem"
import {$CreativeModeTab$Output$$Type} from "net.minecraft.world.item.CreativeModeTab$Output"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"

export class $FakeIconItem extends $IEBaseItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "fillCreativeTab"(arg0: $CreativeModeTab$Output$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FakeIconItem$$Type = ($FakeIconItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FakeIconItem$$Original = $FakeIconItem;}
declare module "blusunrize.immersiveengineering.common.items.ItemCapabilityRegistration$ItemCapabilityRegistrar" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ICapabilityProvider, $ICapabilityProvider$$Type} from "net.neoforged.neoforge.capabilities.ICapabilityProvider"
import {$Function$$Type} from "java.util.function.Function"
import {$ItemCapability, $ItemCapability$$Type} from "net.neoforged.neoforge.capabilities.ItemCapability"

export interface $ItemCapabilityRegistration$ItemCapabilityRegistrar$$Interface {

(arg0: $ItemCapability<(T), (C)>, arg1: $ICapabilityProvider<($ItemStack), (C), (T)>): void
}

export class $ItemCapabilityRegistration$ItemCapabilityRegistrar implements $ItemCapabilityRegistration$ItemCapabilityRegistrar$$Interface {
 "register"<T>(arg0: $ItemCapability$$Type<(T), (void)>, arg1: $Function$$Type<($ItemStack), (T)>): void
 "register"<C, T>(arg0: $ItemCapability$$Type<(T), (C)>, arg1: $ICapabilityProvider$$Type<($ItemStack), (C), (T)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemCapabilityRegistration$ItemCapabilityRegistrar$$Type = ((arg0: $ItemCapability<(T), (C)>, arg1: $ICapabilityProvider<($ItemStack), (C), (T)>) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemCapabilityRegistration$ItemCapabilityRegistrar$$Original = $ItemCapabilityRegistration$ItemCapabilityRegistrar;}
declare module "blusunrize.immersiveengineering.common.items.DrillItem" {
import {$PlayerEvent$HarvestCheck$$Type} from "net.neoforged.neoforge.event.entity.player.PlayerEvent$HarvestCheck"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$Tier} from "net.minecraft.world.item.Tier"
import {$Holder} from "net.minecraft.core.Holder"
import {$Slot} from "net.minecraft.world.inventory.Slot"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Map} from "java.util.Map"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"
import {$DieselToolItem} from "blusunrize.immersiveengineering.common.items.DieselToolItem"
import {$AbstractContainerMenu$$Type} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"

export class $DrillItem extends $DieselToolItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "TYPE": StringJS
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "mineBlock"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $BlockState$$Type, arg3: $BlockPos$$Type, arg4: $LivingEntity$$Type): boolean
public "finishUpgradeRecalculation"(arg0: $ItemStack$$Type, arg1: $RegistryAccess$$Type): void
public "removeFromWorkbench"(arg0: $Player$$Type, arg1: $ItemStack$$Type): void
public "getWorkbenchSlots"(arg0: $AbstractContainerMenu$$Type, arg1: $ItemStack$$Type, arg2: $Level$$Type, arg3: $Supplier$$Type<($Player$$Type)>, arg4: $IItemHandler$$Type): ($Slot)[]
public static "getHeadStatic"(arg0: $ItemStack$$Type): $ItemStack
public static "setHeadStatic"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): void
public "getMaxHeadDamage"(arg0: $ItemStack$$Type): integer
public "getHeadDamage"(arg0: $ItemStack$$Type): integer
public static "isSingleBlockMode"(arg0: $ItemStack$$Type): boolean
public "canToolBeUsed"(arg0: $ItemStack$$Type): boolean
public "canBreakExtraBlock"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $Player$$Type, arg4: $ItemStack$$Type, arg5: $ItemStack$$Type): boolean
public static "handleUnderwaterDrill"(arg0: $PlayerEvent$HarvestCheck$$Type): void
public "getIdleSound"(arg0: $ItemStack$$Type): $Holder<($SoundEvent)>
public "getBusySound"(arg0: $ItemStack$$Type): $Holder<($SoundEvent)>
public "getFadingSound"(arg0: $ItemStack$$Type): $Holder<($SoundEvent)>
public "getAttackSound"(arg0: $ItemStack$$Type): $Holder<($SoundEvent)>
public "getHarvestSound"(arg0: $ItemStack$$Type): $Holder<($SoundEvent)>
public "ableToMakeNoise"(arg0: $ItemStack$$Type): boolean
public "noisySameStack"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): boolean
public "isEffective"(arg0: $ItemStack$$Type, arg1: $BlockState$$Type): boolean
public "getHarvestLevel"(arg0: $ItemStack$$Type, arg1: $Player$$Type): $Tier
public "getHead"(arg0: $ItemStack$$Type): $ItemStack
public "setHead"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): void
public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "getDestroySpeed"(arg0: $ItemStack$$Type, arg1: $BlockState$$Type): float
public static "isAbleNoisyTool"(arg0: $ItemStack$$Type): boolean
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DrillItem$$Type = ($DrillItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DrillItem$$Original = $DrillItem;}
declare module "blusunrize.immersiveengineering.common.items.ToolboxItem" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$Optional} from "java.util.Optional"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$SlotAccess$$Type} from "net.minecraft.world.entity.SlotAccess"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Slot$$Type} from "net.minecraft.world.inventory.Slot"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InternalStorageItem} from "blusunrize.immersiveengineering.common.items.InternalStorageItem"
import {$TooltipComponent} from "net.minecraft.world.inventory.tooltip.TooltipComponent"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$ClickAction$$Type} from "net.minecraft.world.inventory.ClickAction"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"

export class $ToolboxItem extends $InternalStorageItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "SLOT_COUNT": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public "overrideOtherStackedOnMe"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: $Slot$$Type, arg3: $ClickAction$$Type, arg4: $Player$$Type, arg5: $SlotAccess$$Type): boolean
public "canFitInsideContainerItems"(): boolean
public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "getTooltipImage"(arg0: $ItemStack$$Type): $Optional<($TooltipComponent)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ToolboxItem$$Type = ($ToolboxItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ToolboxItem$$Original = $ToolboxItem;}
declare module "blusunrize.immersiveengineering.common.items.BuzzsawItem" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$ItemAbility$$Type} from "net.neoforged.neoforge.common.ItemAbility"
import {$Tier} from "net.minecraft.world.item.Tier"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Slot} from "net.minecraft.world.inventory.Slot"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$ItemEnchantments} from "net.minecraft.world.item.enchantment.ItemEnchantments"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$SawbladeItem} from "blusunrize.immersiveengineering.common.items.SawbladeItem"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$IEItemInterfaces$IScrollwheel$$Interface} from "blusunrize.immersiveengineering.common.items.IEItemInterfaces$IScrollwheel"
import {$Collection} from "java.util.Collection"
import {$Map} from "java.util.Map"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$HolderLookup$RegistryLookup$$Type} from "net.minecraft.core.HolderLookup$RegistryLookup"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"
import {$DieselToolItem} from "blusunrize.immersiveengineering.common.items.DieselToolItem"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$Enchantment$$Type} from "net.minecraft.world.item.enchantment.Enchantment"
import {$AbstractContainerMenu$$Type} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export class $BuzzsawItem extends $DieselToolItem implements $IEItemInterfaces$IScrollwheel$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "SAWBLADES": $Collection<($SawbladeItem)>
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "TYPE": StringJS
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "removeUpgrade"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $ItemStack$$Type): void
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public "mineBlock"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $BlockState$$Type, arg3: $BlockPos$$Type, arg4: $LivingEntity$$Type): boolean
public "getEnchantmentLevel"(arg0: $ItemStack$$Type, arg1: $Holder$$Type<($Enchantment)>): integer
public "getAllEnchantments"(arg0: $ItemStack$$Type, arg1: $HolderLookup$RegistryLookup$$Type<($Enchantment$$Type)>): $ItemEnchantments
public "onScrollwheel"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: boolean): void
public "removeFromWorkbench"(arg0: $Player$$Type, arg1: $ItemStack$$Type): void
public "getWorkbenchSlots"(arg0: $AbstractContainerMenu$$Type, arg1: $ItemStack$$Type, arg2: $Level$$Type, arg3: $Supplier$$Type<($Player$$Type)>, arg4: $IItemHandler$$Type): ($Slot)[]
public "recalculateUpgrades"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $Player$$Type): void
public "getUpgradeAfterRemoval"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): $ItemStack
public "getMaxHeadDamage"(arg0: $ItemStack$$Type): integer
public "getHeadDamage"(arg0: $ItemStack$$Type): integer
public "canToolBeUsed"(arg0: $ItemStack$$Type): boolean
public static "hasQuiverUpgrade"(arg0: $ItemStack$$Type): boolean
public "getIdleSound"(arg0: $ItemStack$$Type): $Holder<($SoundEvent)>
public "getBusySound"(arg0: $ItemStack$$Type): $Holder<($SoundEvent)>
public "getFadingSound"(arg0: $ItemStack$$Type): $Holder<($SoundEvent)>
public "getAttackSound"(arg0: $ItemStack$$Type): $Holder<($SoundEvent)>
public "getHarvestSound"(arg0: $ItemStack$$Type): $Holder<($SoundEvent)>
public "ableToMakeNoise"(arg0: $ItemStack$$Type): boolean
public "noisySameStack"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): boolean
public static "getSawblade"(arg0: $ItemStack$$Type, arg1: integer): $ItemStack
public static "setSawblade"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: integer): void
public static "isSawblade"(arg0: $ItemStack$$Type): boolean
public "isEffective"(arg0: $ItemStack$$Type, arg1: $BlockState$$Type): boolean
public "getHarvestLevel"(arg0: $ItemStack$$Type, arg1: $Player$$Type): $Tier
public "getHead"(arg0: $ItemStack$$Type): $ItemStack
public "setHead"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): void
public "canPerformAction"(arg0: $ItemStack$$Type, arg1: $ItemAbility$$Type): boolean
public "getDestroySpeed"(arg0: $ItemStack$$Type, arg1: $BlockState$$Type): float
public static "isAbleNoisyTool"(arg0: $ItemStack$$Type): boolean
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BuzzsawItem$$Type = ($BuzzsawItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BuzzsawItem$$Original = $BuzzsawItem;}
declare module "blusunrize.immersiveengineering.common.items.DrillheadItem$DrillHeadPerm" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$Item$$Type} from "net.minecraft.world.item.Item"
import {$Tier$$Type} from "net.minecraft.world.item.Tier"

export class $DrillheadItem$DrillHeadPerm {
readonly "texture": $ResourceLocation

constructor(arg0: StringJS, arg1: $TagKey$$Type<($Item)>, arg2: integer, arg3: integer, arg4: $Tier$$Type, arg5: float, arg6: integer, arg7: integer, arg8: $ResourceLocation$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DrillheadItem$DrillHeadPerm$$Type = ($DrillheadItem$DrillHeadPerm);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DrillheadItem$DrillHeadPerm$$Original = $DrillheadItem$DrillHeadPerm;}
declare module "blusunrize.immersiveengineering.common.items.WireCoilItem" {
import {$WireType, $WireType$$Type} from "blusunrize.immersiveengineering.api.wires.WireType"
import {$IWireCoil$$Type, $IWireCoil$$Interface} from "blusunrize.immersiveengineering.api.wires.IWireCoil"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$List$$Type} from "java.util.List"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$IEBaseItem} from "blusunrize.immersiveengineering.common.items.IEBaseItem"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"

export class $WireCoilItem extends $IEBaseItem implements $IWireCoil$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $WireType$$Type)

public "getWireType"(arg0: $ItemStack$$Type): $WireType
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public static "doCoilUse"(arg0: $IWireCoil$$Type, arg1: $Player$$Type, arg2: $Level$$Type, arg3: $BlockPos$$Type, arg4: $InteractionHand$$Type, arg5: $Direction$$Type, arg6: float, arg7: float, arg8: float): $InteractionResult
public "canConnectCable"(arg0: $ItemStack$$Type, arg1: $BlockEntity$$Type): boolean
public "consumeWire"(arg0: $ItemStack$$Type, arg1: integer): void
public "getMaxLength"(arg0: $ItemStack$$Type): integer
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WireCoilItem$$Type = ($WireCoilItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WireCoilItem$$Original = $WireCoilItem;}
declare module "blusunrize.immersiveengineering.common.items.CoresampleItem$ItemData" {
import {$CoresampleItem$VeinSample, $CoresampleItem$VeinSample$$Type} from "blusunrize.immersiveengineering.common.items.CoresampleItem$VeinSample"
import {$CoresampleItem$SamplePosition, $CoresampleItem$SamplePosition$$Type} from "blusunrize.immersiveengineering.common.items.CoresampleItem$SamplePosition"
import {$List, $List$$Type} from "java.util.List"
import {$DualCodec} from "malte0811.dualcodecs.DualCodec"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$Record} from "java.lang.Record"

export class $CoresampleItem$ItemData extends $Record {
static readonly "CODECS": $DualCodec<($ByteBuf), ($CoresampleItem$ItemData)>
static readonly "EMPTY": $CoresampleItem$ItemData

constructor(position: $CoresampleItem$SamplePosition$$Type, veins: $List$$Type<($CoresampleItem$VeinSample$$Type)>, timestamp: long)

public "veins"(): $List<($CoresampleItem$VeinSample)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "position"(): $CoresampleItem$SamplePosition
public "timestamp"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CoresampleItem$ItemData$$Type = ({"timestamp"?: long, "veins"?: $List$$Type<($CoresampleItem$VeinSample$$Type)>, "position"?: $CoresampleItem$SamplePosition$$Type}) | ([timestamp?: long, veins?: $List$$Type<($CoresampleItem$VeinSample$$Type)>, position?: $CoresampleItem$SamplePosition$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CoresampleItem$ItemData$$Original = $CoresampleItem$ItemData;}
declare module "blusunrize.immersiveengineering.common.items.IEItemInterfaces$IAdvancedFluidItem" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$FluidStack, $FluidStack$$Type} from "net.neoforged.neoforge.fluids.FluidStack"

export interface $IEItemInterfaces$IAdvancedFluidItem$$Interface {

(arg0: $ItemStack, arg1: integer): integer
}

export class $IEItemInterfaces$IAdvancedFluidItem implements $IEItemInterfaces$IAdvancedFluidItem$$Interface {
 "getFluid"(arg0: $ItemStack$$Type): $FluidStack
 "allowFluid"(arg0: $ItemStack$$Type, arg1: $FluidStack$$Type): boolean
 "getCapacity"(arg0: $ItemStack$$Type, arg1: integer): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEItemInterfaces$IAdvancedFluidItem$$Type = ((arg0: $ItemStack, arg1: integer) => integer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IEItemInterfaces$IAdvancedFluidItem$$Original = $IEItemInterfaces$IAdvancedFluidItem;}
declare module "blusunrize.immersiveengineering.common.items.PotionBucketItem" {
import {$Potion$$Type} from "net.minecraft.world.item.alchemy.Potion"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$List$$Type} from "java.util.List"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$ItemCapabilityRegistration$ItemCapabilityRegistrar$$Type} from "blusunrize.immersiveengineering.common.items.ItemCapabilityRegistration$ItemCapabilityRegistrar"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$Holder$$Type} from "net.minecraft.core.Holder"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$IEBaseItem} from "blusunrize.immersiveengineering.common.items.IEBaseItem"
import {$CreativeModeTab$Output$$Type} from "net.minecraft.world.item.CreativeModeTab$Output"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item} from "net.minecraft.world.item.Item"

export class $PotionBucketItem extends $IEBaseItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public static "forPotion"(arg0: $Holder$$Type<($Potion)>): $ItemStack
public "getName"(arg0: $ItemStack$$Type): $Component
public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public static "registerCapabilities"(arg0: $ItemCapabilityRegistration$ItemCapabilityRegistrar$$Type): void
public "fillCreativeTab"(arg0: $CreativeModeTab$Output$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PotionBucketItem$$Type = ($PotionBucketItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PotionBucketItem$$Original = $PotionBucketItem;}
declare module "blusunrize.immersiveengineering.common.items.IEItemInterfaces$IBulletContainer" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$NonNullList} from "net.minecraft.core.NonNullList"

export interface $IEItemInterfaces$IBulletContainer$$Interface {
}

export class $IEItemInterfaces$IBulletContainer implements $IEItemInterfaces$IBulletContainer$$Interface {
 "getBulletCount"(arg0: $ItemStack$$Type): integer
 "getBullets"(arg0: $ItemStack$$Type): $NonNullList<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEItemInterfaces$IBulletContainer$$Type = ($IEItemInterfaces$IBulletContainer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IEItemInterfaces$IBulletContainer$$Original = $IEItemInterfaces$IBulletContainer;}
declare module "blusunrize.immersiveengineering.common.items.PowerpackItem" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$List$$Type} from "java.util.List"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$ItemCapabilityRegistration$ItemCapabilityRegistrar$$Type} from "blusunrize.immersiveengineering.common.items.ItemCapabilityRegistration$ItemCapabilityRegistrar"
import {$UpgradeableToolItem} from "blusunrize.immersiveengineering.common.items.UpgradeableToolItem"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"
import {$Slot} from "net.minecraft.world.inventory.Slot"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemGetterList} from "blusunrize.immersiveengineering.common.util.ItemGetterList"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$AbstractContainerMenu$$Type} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$EquipmentSlot} from "net.minecraft.world.entity.EquipmentSlot"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Item} from "net.minecraft.world.item.Item"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $PowerpackItem extends $UpgradeableToolItem {
static readonly "POWERPACK_GETTER": $ItemGetterList
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "INDUCTION_CHARGE_RATE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "TESLA_CONSUMPTION": integer
static readonly "MAGNET_CONSUMPTION": integer
static readonly "ITEM_CHARGE_RATE": integer
static readonly "ANTENNA_CHARGE_RATE": integer
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "CHEST_SLOT": integer
static readonly "TYPE": StringJS
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "inventoryTick"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $Entity$$Type, arg3: integer, arg4: boolean): void
public static "getBannerStatic"(arg0: $ItemStack$$Type): $ItemStack
public "removeFromWorkbench"(arg0: $Player$$Type, arg1: $ItemStack$$Type): void
public "canModify"(arg0: $ItemStack$$Type): boolean
public "getWorkbenchSlots"(arg0: $AbstractContainerMenu$$Type, arg1: $ItemStack$$Type, arg2: $Level$$Type, arg3: $Supplier$$Type<($Player$$Type)>, arg4: $IItemHandler$$Type): ($Slot)[]
public static "tickWornPack"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $Player$$Type): void
public static "getCapacitorStatic"(arg0: $ItemStack$$Type): $ItemStack
public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "getEquipmentSlot"(arg0: $ItemStack$$Type): $EquipmentSlot
public static "registerCapabilities"(arg0: $ItemCapabilityRegistration$ItemCapabilityRegistrar$$Type): void
public static "getMaxEnergyStored"(arg0: $ItemStack$$Type): integer
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PowerpackItem$$Type = ($PowerpackItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PowerpackItem$$Original = $PowerpackItem;}
declare module "blusunrize.immersiveengineering.common.items.GrindingDiskItem" {
import {$Enchantment} from "net.minecraft.world.item.enchantment.Enchantment"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Predicate} from "java.util.function.Predicate"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$Set} from "java.util.Set"
import {$ResourceKey} from "net.minecraft.resources.ResourceKey"
import {$SawbladeItem} from "blusunrize.immersiveengineering.common.items.SawbladeItem"
import {$ItemAbility} from "net.neoforged.neoforge.common.ItemAbility"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $GrindingDiskItem extends $SawbladeItem {
static readonly "TEXTURE": $ResourceLocation
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: integer, arg1: float, arg2: float)

public "getExtraEnchantments"(): $Map<($ResourceKey<($Enchantment)>), (integer)>
public "getSawbladeDamageFromBlock"(arg0: boolean): integer
public "getSawbladeMaterials"(): $Predicate<($BlockState)>
public "getItemAbilities"(): $Set<($ItemAbility)>
public "canSawbladeFellTree"(): boolean
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "extraEnchantments"(): $Map<($ResourceKey<($Enchantment)>), (integer)>
get "sawbladeMaterials"(): $Predicate<($BlockState)>
get "itemAbilities"(): $Set<($ItemAbility)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GrindingDiskItem$$Type = ($GrindingDiskItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GrindingDiskItem$$Original = $GrindingDiskItem;}
declare module "blusunrize.immersiveengineering.common.items.SpeedloaderItem" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$Optional} from "java.util.Optional"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$IEItemInterfaces$IBulletContainer$$Interface} from "blusunrize.immersiveengineering.common.items.IEItemInterfaces$IBulletContainer"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InternalStorageItem} from "blusunrize.immersiveengineering.common.items.InternalStorageItem"
import {$TooltipComponent} from "net.minecraft.world.inventory.tooltip.TooltipComponent"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item} from "net.minecraft.world.item.Item"

export class $SpeedloaderItem extends $InternalStorageItem implements $IEItemInterfaces$IBulletContainer$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "getBulletCount"(arg0: $ItemStack$$Type): integer
public "getBullets"(arg0: $ItemStack$$Type): $NonNullList<($ItemStack)>
public "isEmpty"(arg0: $ItemStack$$Type): boolean
public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "getTooltipImage"(arg0: $ItemStack$$Type): $Optional<($TooltipComponent)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpeedloaderItem$$Type = ($SpeedloaderItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpeedloaderItem$$Original = $SpeedloaderItem;}
declare module "blusunrize.immersiveengineering.common.items.SawbladeItem" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$Predicate} from "java.util.function.Predicate"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$ItemAbility} from "net.neoforged.neoforge.common.ItemAbility"
import {$Enchantment} from "net.minecraft.world.item.enchantment.Enchantment"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$IEBaseItem} from "blusunrize.immersiveengineering.common.items.IEBaseItem"
import {$Item} from "net.minecraft.world.item.Item"
import {$Set} from "java.util.Set"
import {$ResourceKey} from "net.minecraft.resources.ResourceKey"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $SawbladeItem extends $IEBaseItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: integer, arg1: float, arg2: float, arg3: $ResourceLocation$$Type)
constructor(arg0: integer, arg1: float, arg2: float)

public "isEnchantable"(arg0: $ItemStack$$Type): boolean
public "isBookEnchantable"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): boolean
public "getExtraEnchantments"(): $Map<($ResourceKey<($Enchantment)>), (integer)>
public "getSawbladeDamage"(): float
public "getSawbladeDamageFromBlock"(arg0: boolean): integer
public "getSawbladeMaterials"(): $Predicate<($BlockState)>
public "getSawbladeSpeed"(): float
public "getItemAbilities"(): $Set<($ItemAbility)>
public "canSawbladeFellTree"(): boolean
public "getSawbladeTexture"(): $ResourceLocation
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "extraEnchantments"(): $Map<($ResourceKey<($Enchantment)>), (integer)>
get "sawbladeDamage"(): float
get "sawbladeMaterials"(): $Predicate<($BlockState)>
get "sawbladeSpeed"(): float
get "itemAbilities"(): $Set<($ItemAbility)>
get "sawbladeTexture"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SawbladeItem$$Type = ($SawbladeItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SawbladeItem$$Original = $SawbladeItem;}
declare module "blusunrize.immersiveengineering.common.items.RevolverpartItem" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$IEBaseItem} from "blusunrize.immersiveengineering.common.items.IEBaseItem"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"

export class $RevolverpartItem extends $IEBaseItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "getName"(arg0: $ItemStack$$Type): $Component
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RevolverpartItem$$Type = ($RevolverpartItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RevolverpartItem$$Original = $RevolverpartItem;}
declare module "blusunrize.immersiveengineering.common.items.RobotWolfItem" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$PlayerInteractEvent$EntityInteractSpecific$$Type} from "net.neoforged.neoforge.event.entity.player.PlayerInteractEvent$EntityInteractSpecific"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$IEBaseItem} from "blusunrize.immersiveengineering.common.items.IEBaseItem"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"

export class $RobotWolfItem extends $IEBaseItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static "REGISTRY_KEY": $ResourceLocation
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public static "onWolfInteract"(arg0: $PlayerInteractEvent$EntityInteractSpecific$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RobotWolfItem$$Type = ($RobotWolfItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RobotWolfItem$$Original = $RobotWolfItem;}
declare module "blusunrize.immersiveengineering.common.items.GliderItem" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$Holder} from "net.minecraft.core.Holder"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Equipable, $Equipable$$Interface} from "net.minecraft.world.item.Equipable"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$IEBaseItem} from "blusunrize.immersiveengineering.common.items.IEBaseItem"
import {$EquipmentSlot} from "net.minecraft.world.entity.EquipmentSlot"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export class $GliderItem extends $IEBaseItem implements $Equipable$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "isValidRepairItem"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): boolean
public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "getEquipmentSlot"(arg0: $ItemStack$$Type): $EquipmentSlot
public "getEquipmentSlot"(): $EquipmentSlot
public "canElytraFly"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type): boolean
public "elytraFlightTick"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type, arg2: integer): boolean
public "swapWithEquipmentSlot"(arg0: $Item$$Type, arg1: $Level$$Type, arg2: $Player$$Type, arg3: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public static "get"(arg0: $ItemStack$$Type): $Equipable
public "getEquipSound"(): $Holder<($SoundEvent)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "equipmentSlot"(): $EquipmentSlot
get "equipSound"(): $Holder<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GliderItem$$Type = ($GliderItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GliderItem$$Original = $GliderItem;}
declare module "blusunrize.immersiveengineering.common.items.DrillheadItem" {
import {$IDrillHead$$Interface} from "blusunrize.immersiveengineering.api.tool.IDrillHead"
import {$DrillheadItem$DrillHeadPerm, $DrillheadItem$DrillHeadPerm$$Type} from "blusunrize.immersiveengineering.common.items.DrillheadItem$DrillHeadPerm"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ImmutableList} from "com.google.common.collect.ImmutableList"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$Tier} from "net.minecraft.world.item.Tier"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$IEBaseItem} from "blusunrize.immersiveengineering.common.items.IEBaseItem"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos} from "net.minecraft.core.BlockPos"

export class $DrillheadItem extends $IEBaseItem implements $IDrillHead$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "STEEL": $DrillheadItem$DrillHeadPerm
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "IRON": $DrillheadItem$DrillHeadPerm
 "perms": $DrillheadItem$DrillHeadPerm
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $DrillheadItem$DrillHeadPerm$$Type)

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "getMiningSpeed"(arg0: $ItemStack$$Type): float
public "isValidRepairItem"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): boolean
public "getAttackDamage"(arg0: $ItemStack$$Type): float
public "getHeadDamage"(arg0: $ItemStack$$Type): integer
public "getMaximumHeadDamage"(arg0: $ItemStack$$Type): integer
public "damageHead"(arg0: $ItemStack$$Type, arg1: integer): void
public "getMiningLevel"(arg0: $ItemStack$$Type): $Tier
public "beforeBlockbreak"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: $Player$$Type): boolean
public "getExtraBlocksDug"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $Player$$Type, arg3: $HitResult$$Type): $ImmutableList<($BlockPos)>
public "afterBlockbreak"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: $Player$$Type): void
public static "setHeadDamage"(arg0: $ItemStack$$Type, arg1: integer): void
public "getDrillTexture"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): $ResourceLocation
public "isBarVisible"(arg0: $ItemStack$$Type): boolean
public "getBarWidth"(arg0: $ItemStack$$Type): integer
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DrillheadItem$$Type = ($DrillheadItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DrillheadItem$$Original = $DrillheadItem;}
declare module "blusunrize.immersiveengineering.common.items.SurveyToolsItem$HintedPosition" {
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Record} from "java.lang.Record"

export class $SurveyToolsItem$HintedPosition extends $Record {
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SurveyToolsItem$HintedPosition$$Type = ({"x"?: integer, "hintText"?: $Component$$Type, "z"?: integer}) | ([x?: integer, hintText?: $Component$$Type, z?: integer]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SurveyToolsItem$HintedPosition$$Original = $SurveyToolsItem$HintedPosition;}
declare module "blusunrize.immersiveengineering.common.items.RevolverItem" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$List$$Type} from "java.util.List"
import {$ItemAttributeModifiers} from "net.minecraft.world.item.component.ItemAttributeModifiers"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$IEItemInterfaces$IBulletContainer$$Interface} from "blusunrize.immersiveengineering.common.items.IEItemInterfaces$IBulletContainer"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Slot} from "net.minecraft.world.inventory.Slot"
import {$RevolverItem$Perks} from "blusunrize.immersiveengineering.common.items.RevolverItem$Perks"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$TooltipComponent} from "net.minecraft.world.inventory.tooltip.TooltipComponent"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$BulletHandler$IBullet$$Type} from "blusunrize.immersiveengineering.api.tool.BulletHandler$IBullet"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$ZoomHandler$IZoomTool$$Interface} from "blusunrize.immersiveengineering.api.tool.ZoomHandler$IZoomTool"
import {$Item} from "net.minecraft.world.item.Item"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$RevolverItem$RevolverCooldowns} from "blusunrize.immersiveengineering.common.items.RevolverItem$RevolverCooldowns"
import {$Map} from "java.util.Map"
import {$RevolverItem$SpecialRevolver, $RevolverItem$SpecialRevolver$$Type} from "blusunrize.immersiveengineering.common.items.RevolverItem$SpecialRevolver"
import {$Multimap} from "com.google.common.collect.Multimap"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$ItemCapabilityRegistration$ItemCapabilityRegistrar$$Type} from "blusunrize.immersiveengineering.common.items.ItemCapabilityRegistration$ItemCapabilityRegistrar"
import {$UpgradeableToolItem} from "blusunrize.immersiveengineering.common.items.UpgradeableToolItem"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"
import {$UseAnim} from "net.minecraft.world.item.UseAnim"
import {$AbstractContainerMenu$$Type} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$UpgradeData} from "blusunrize.immersiveengineering.api.tool.upgrade.UpgradeData"

export class $RevolverItem extends $UpgradeableToolItem implements $IEItemInterfaces$IBulletContainer$$Interface, $ZoomHandler$IZoomTool$$Interface {
static readonly "specialRevolversByTag": $Map<(StringJS), ($RevolverItem$SpecialRevolver)>
static readonly "specialRevolvers": $Multimap<(StringJS), ($RevolverItem$SpecialRevolver)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "speedModUUID": $ResourceLocation
static readonly "TYPE": StringJS
static readonly "luckModUUID": $ResourceLocation
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "getBulletCount"(arg0: $ItemStack$$Type): integer
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "inventoryTick"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $Entity$$Type, arg3: integer, arg4: boolean): void
public "onCraftedBy"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $Player$$Type): void
public "getDefaultAttributeModifiers"(arg0: $ItemStack$$Type): $ItemAttributeModifiers
public "shouldCauseReequipAnimation"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: boolean): boolean
public "getBullets"(arg0: $ItemStack$$Type): $NonNullList<($ItemStack)>
public "removeFromWorkbench"(arg0: $Player$$Type, arg1: $ItemStack$$Type): void
public "canModify"(arg0: $ItemStack$$Type): boolean
public "getWorkbenchSlots"(arg0: $AbstractContainerMenu$$Type, arg1: $ItemStack$$Type, arg2: $Level$$Type, arg3: $Supplier$$Type<($Player$$Type)>, arg4: $IItemHandler$$Type): ($Slot)[]
public "getUpgradeBase"(arg0: $ItemStack$$Type): $UpgradeData
public "getRevolverDisplayTag"(arg0: $ItemStack$$Type): StringJS
public static "getPerks"(arg0: $ItemStack$$Type): $RevolverItem$Perks
public "useSpeedloader"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $ItemStack$$Type, arg3: $InteractionHand$$Type, arg4: $NonNullList$$Type<($ItemStack$$Type)>): boolean
public static "fireProjectile"(arg0: $Level$$Type, arg1: $LivingEntity$$Type, arg2: $ItemStack$$Type, arg3: $BulletHandler$IBullet$$Type, arg4: $ItemStack$$Type): float
public "rotateCylinder"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: boolean): void
public "rotateCylinder"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: boolean, arg3: $NonNullList$$Type<($ItemStack$$Type)>): void
public "getMaxShootCooldown"(arg0: $ItemStack$$Type): integer
public "setBullets"(arg0: $ItemStack$$Type, arg1: $NonNullList$$Type<($ItemStack$$Type)>, arg2: boolean): void
public "applySpecialCrafting"(arg0: $ItemStack$$Type, arg1: $RevolverItem$SpecialRevolver$$Type): void
public "canZoom"(arg0: $ItemStack$$Type, arg1: $Player$$Type): boolean
public "getZoomSteps"(arg0: $ItemStack$$Type, arg1: $Player$$Type): (float)[]
public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public static "getCooldowns"(arg0: $ItemStack$$Type): $RevolverItem$RevolverCooldowns
public "getTooltipImage"(arg0: $ItemStack$$Type): $Optional<($TooltipComponent)>
public "getDescriptionId"(arg0: $ItemStack$$Type): StringJS
public "getUseAnimation"(arg0: $ItemStack$$Type): $UseAnim
public static "registerCapabilities"(arg0: $ItemCapabilityRegistration$ItemCapabilityRegistrar$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RevolverItem$$Type = ($RevolverItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RevolverItem$$Original = $RevolverItem;}
declare module "blusunrize.immersiveengineering.common.items.JerrycanItem" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$ItemCapabilityRegistration$ItemCapabilityRegistrar$$Type} from "blusunrize.immersiveengineering.common.items.ItemCapabilityRegistration$ItemCapabilityRegistrar"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$IEBaseItem} from "blusunrize.immersiveengineering.common.items.IEBaseItem"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"

export class $JerrycanItem extends $IEBaseItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public "hasCraftingRemainingItem"(arg0: $ItemStack$$Type): boolean
public "getCraftingRemainingItem"(arg0: $ItemStack$$Type): $ItemStack
public static "registerCapabilities"(arg0: $ItemCapabilityRegistration$ItemCapabilityRegistrar$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JerrycanItem$$Type = ($JerrycanItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $JerrycanItem$$Original = $JerrycanItem;}
declare module "blusunrize.immersiveengineering.common.items.InternalStorageItem" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$IEBaseItem} from "blusunrize.immersiveengineering.common.items.IEBaseItem"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$IItemHandlerModifiable} from "net.neoforged.neoforge.items.IItemHandlerModifiable"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$ItemCapabilityRegistration$ItemCapabilityRegistrar$$Type} from "blusunrize.immersiveengineering.common.items.ItemCapabilityRegistration$ItemCapabilityRegistrar"
import {$ItemContainerContents} from "net.minecraft.world.item.component.ItemContainerContents"
import {$NonNullList$$Type} from "net.minecraft.core.NonNullList"

export class $InternalStorageItem extends $IEBaseItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type, arg1: integer)

public "setContainedItems"(arg0: $ItemStack$$Type, arg1: $NonNullList$$Type<($ItemStack$$Type)>): void
public static "registerCapabilitiesISI"(arg0: $ItemCapabilityRegistration$ItemCapabilityRegistrar$$Type): void
public static "makeInternalItemHandler"(arg0: $ItemStack$$Type): $IItemHandlerModifiable
public static "getContainedItems"(arg0: $ItemStack$$Type): $ItemContainerContents
public "getSlotCount"(): integer
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "slotCount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InternalStorageItem$$Type = ($InternalStorageItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $InternalStorageItem$$Original = $InternalStorageItem;}
declare module "blusunrize.immersiveengineering.common.items.RevolverItem$Perks" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$RevolverItem$RevolverPerk, $RevolverItem$RevolverPerk$$Type} from "blusunrize.immersiveengineering.common.items.RevolverItem$RevolverPerk"
import {$DualCodec} from "malte0811.dualcodecs.DualCodec"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$Record} from "java.lang.Record"

export class $RevolverItem$Perks extends $Record {
static readonly "CODECS": $DualCodec<($ByteBuf), ($RevolverItem$Perks)>
static readonly "EMPTY": $RevolverItem$Perks

constructor(perks: $Map$$Type<($RevolverItem$RevolverPerk$$Type), (double)>)

public "perks"(): $Map<($RevolverItem$RevolverPerk), (double)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RevolverItem$Perks$$Type = ({"perks"?: $Map$$Type<($RevolverItem$RevolverPerk$$Type), (double)>}) | ([perks?: $Map$$Type<($RevolverItem$RevolverPerk$$Type), (double)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RevolverItem$Perks$$Original = $RevolverItem$Perks;}
declare module "blusunrize.immersiveengineering.common.items.ShaderBagItem" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Rarity$$Type} from "net.minecraft.world.item.Rarity"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$IEBaseItem} from "blusunrize.immersiveengineering.common.items.IEBaseItem"
import {$IEItemInterfaces$IColouredItem$$Interface} from "blusunrize.immersiveengineering.common.items.IEItemInterfaces$IColouredItem"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item} from "net.minecraft.world.item.Item"

export class $ShaderBagItem extends $IEBaseItem implements $IEItemInterfaces$IColouredItem$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Rarity$$Type)

public "getColourForIEItem"(arg0: $ItemStack$$Type, arg1: integer): integer
public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShaderBagItem$$Type = ($ShaderBagItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ShaderBagItem$$Original = $ShaderBagItem;}
declare module "blusunrize.immersiveengineering.common.items.EngineersBlueprintItem" {
import {$BlueprintCraftingRecipe} from "blusunrize.immersiveengineering.api.crafting.BlueprintCraftingRecipe"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$List, $List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$IEBaseItem} from "blusunrize.immersiveengineering.common.items.IEBaseItem"
import {$RecipeHolder} from "net.minecraft.world.item.crafting.RecipeHolder"
import {$CreativeModeTab$Output$$Type} from "net.minecraft.world.item.CreativeModeTab$Output"
import {$Item} from "net.minecraft.world.item.Item"

export class $EngineersBlueprintItem extends $IEBaseItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public static "getRecipes"(arg0: $Level$$Type, arg1: $ItemStack$$Type): $List<($RecipeHolder<($BlueprintCraftingRecipe)>)>
public "fillCreativeTab"(arg0: $CreativeModeTab$Output$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EngineersBlueprintItem$$Type = ($EngineersBlueprintItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EngineersBlueprintItem$$Original = $EngineersBlueprintItem;}
declare module "blusunrize.immersiveengineering.common.items.CoresampleItem$VeinSample" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$DualCodec} from "malte0811.dualcodecs.DualCodec"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$Record} from "java.lang.Record"

export class $CoresampleItem$VeinSample extends $Record {
static readonly "CODECS": $DualCodec<($ByteBuf), ($CoresampleItem$VeinSample)>

constructor(mineral: $ResourceLocation$$Type, depletion: integer, saturation: double, percentageInTotalSample: double)

public "mineral"(): $ResourceLocation
public "percentageInTotalSample"(): double
public "depletion"(): integer
public "saturation"(): double
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CoresampleItem$VeinSample$$Type = ({"percentageInTotalSample"?: double, "saturation"?: double, "mineral"?: $ResourceLocation$$Type, "depletion"?: integer}) | ([percentageInTotalSample?: double, saturation?: double, mineral?: $ResourceLocation$$Type, depletion?: integer]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CoresampleItem$VeinSample$$Original = $CoresampleItem$VeinSample;}
declare module "blusunrize.immersiveengineering.common.items.IESeedItem" {
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockItem} from "net.minecraft.world.item.BlockItem"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"

export class $IESeedItem extends $BlockItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Block$$Type)

public "getDescriptionId"(): StringJS
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$setAdditionalBehavior"(arg0: $AdditionalItemPlacement$$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "descriptionId"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IESeedItem$$Type = ($IESeedItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IESeedItem$$Original = $IESeedItem;}
declare module "blusunrize.immersiveengineering.common.items.CoresampleItem$SamplePosition" {
import {$ColumnPos} from "net.minecraft.server.level.ColumnPos"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$DualCodec} from "malte0811.dualcodecs.DualCodec"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$Record} from "java.lang.Record"

export class $CoresampleItem$SamplePosition extends $Record {
static readonly "CODECS": $DualCodec<($ByteBuf), ($CoresampleItem$SamplePosition)>
static readonly "NONE": $CoresampleItem$SamplePosition

constructor(dimension: $ResourceKey$$Type<($Level)>, x: integer, z: integer)

public "dimension"(): $ResourceKey<($Level)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "position"(): $ColumnPos
public "x"(): integer
public "z"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CoresampleItem$SamplePosition$$Type = ({"x"?: integer, "z"?: integer, "dimension"?: $ResourceKey$$Type<($Level)>}) | ([x?: integer, z?: integer, dimension?: $ResourceKey$$Type<($Level)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CoresampleItem$SamplePosition$$Original = $CoresampleItem$SamplePosition;}
declare module "blusunrize.immersiveengineering.common.items.DieselToolItem" {
import {$IEItemInterfaces$IAdvancedFluidItem$$Interface} from "blusunrize.immersiveengineering.common.items.IEItemInterfaces$IAdvancedFluidItem"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$ItemAttributeModifiers} from "net.minecraft.world.item.component.ItemAttributeModifiers"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$FluidStack, $FluidStack$$Type} from "net.neoforged.neoforge.fluids.FluidStack"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$ItemCapabilityRegistration$ItemCapabilityRegistrar$$Type} from "blusunrize.immersiveengineering.common.items.ItemCapabilityRegistration$ItemCapabilityRegistrar"
import {$UpgradeableToolItem} from "blusunrize.immersiveengineering.common.items.UpgradeableToolItem"
import {$Tier} from "net.minecraft.world.item.Tier"
import {$Holder} from "net.minecraft.core.Holder"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$UseAnim} from "net.minecraft.world.item.UseAnim"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$INoisyTool$$Interface} from "blusunrize.immersiveengineering.api.tool.INoisyTool"
import {$RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $DieselToolItem extends $UpgradeableToolItem implements $IEItemInterfaces$IAdvancedFluidItem$$Interface, $INoisyTool$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type, arg1: StringJS, arg2: integer)

public "getDefaultAttributeModifiers"(arg0: $ItemStack$$Type): $ItemAttributeModifiers
public "getEnchantmentValue"(): integer
public "shouldCauseReequipAnimation"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: boolean): boolean
public "finishUpgradeRecalculation"(arg0: $ItemStack$$Type, arg1: $RegistryAccess$$Type): void
public "canModify"(arg0: $ItemStack$$Type): boolean
public "allowFluid"(arg0: $ItemStack$$Type, arg1: $FluidStack$$Type): boolean
public "getMaxHeadDamage"(arg0: $ItemStack$$Type): integer
public "getHeadDamage"(arg0: $ItemStack$$Type): integer
public "canToolBeUsed"(arg0: $ItemStack$$Type): boolean
public "getIdleSound"(arg0: $ItemStack$$Type): $Holder<($SoundEvent)>
public "getBusySound"(arg0: $ItemStack$$Type): $Holder<($SoundEvent)>
public "getFadingSound"(arg0: $ItemStack$$Type): $Holder<($SoundEvent)>
public "getAttackSound"(arg0: $ItemStack$$Type): $Holder<($SoundEvent)>
public "getHarvestSound"(arg0: $ItemStack$$Type): $Holder<($SoundEvent)>
public "ableToMakeNoise"(arg0: $ItemStack$$Type): boolean
public "isEffective"(arg0: $ItemStack$$Type, arg1: $BlockState$$Type): boolean
public "getHarvestLevel"(arg0: $ItemStack$$Type, arg1: $Player$$Type): $Tier
public "getCapacity"(arg0: $ItemStack$$Type, arg1: integer): integer
public "isBarVisible"(arg0: $ItemStack$$Type): boolean
public "getBarWidth"(arg0: $ItemStack$$Type): integer
public "onEntitySwing"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type, arg2: $InteractionHand$$Type): boolean
public "getUseAnimation"(arg0: $ItemStack$$Type): $UseAnim
public "isCorrectToolForDrops"(arg0: $ItemStack$$Type, arg1: $BlockState$$Type): boolean
public "hurtEnemy"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type): boolean
public static "registerCapabilities"(arg0: $ItemCapabilityRegistration$ItemCapabilityRegistrar$$Type): void
public "getFluid"(arg0: $ItemStack$$Type): $FluidStack
public "noisySameStack"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): boolean
public static "isAbleNoisyTool"(arg0: $ItemStack$$Type): boolean
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "enchantmentValue"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DieselToolItem$$Type = ($DieselToolItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DieselToolItem$$Original = $DieselToolItem;}
declare module "blusunrize.immersiveengineering.common.items.SurveyToolsItem" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$List} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ColumnPos$$Type} from "net.minecraft.server.level.ColumnPos"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$SurveyToolsItem$HintedPosition, $SurveyToolsItem$HintedPosition$$Type} from "blusunrize.immersiveengineering.common.items.SurveyToolsItem$HintedPosition"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$UseAnim} from "net.minecraft.world.item.UseAnim"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$IEBaseItem} from "blusunrize.immersiveengineering.common.items.IEBaseItem"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"

export class $SurveyToolsItem extends $IEBaseItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "isEnchantable"(arg0: $ItemStack$$Type): boolean
public "onItemUseFirst"(arg0: $ItemStack$$Type, arg1: $UseOnContext$$Type): $InteractionResult
public "doesSneakBypassUse"(arg0: $ItemStack$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type): boolean
public static "getVeinData"(arg0: $ItemStack$$Type, arg1: $ResourceKey$$Type<($Level)>, arg2: $ColumnPos$$Type): $List<($SurveyToolsItem$HintedPosition)>
public static "addHintedPosition"(arg0: $ItemStack$$Type, arg1: $ResourceKey$$Type<($Level)>, arg2: $ColumnPos$$Type, arg3: $SurveyToolsItem$HintedPosition$$Type): void
public "getUseDuration"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type): integer
public "getUseAnimation"(arg0: $ItemStack$$Type): $UseAnim
public "finishUsingItem"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $LivingEntity$$Type): $ItemStack
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SurveyToolsItem$$Type = ($SurveyToolsItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SurveyToolsItem$$Original = $SurveyToolsItem;}
declare module "blusunrize.immersiveengineering.common.items.VoltmeterItem$RemoteEnergyData" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Either, $Either$$Type} from "com.mojang.datafixers.util.Either"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$Record} from "java.lang.Record"

export class $VoltmeterItem$RemoteEnergyData extends $Record {
static readonly "CODEC": $StreamCodec<($ByteBuf), ($VoltmeterItem$RemoteEnergyData)>

constructor(pos: $Either$$Type<($BlockPos$$Type), (integer)>, measuredInTick: long, isValid: boolean, stored: integer, capacity: integer)

public "measuredInTick"(): long
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "pos"(): $Either<($BlockPos), (integer)>
public "capacity"(): integer
public "isValid"(): boolean
public "stored"(): integer
get "valid"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VoltmeterItem$RemoteEnergyData$$Type = ({"pos"?: $Either$$Type<($BlockPos$$Type), (integer)>, "measuredInTick"?: long, "stored"?: integer, "isValid"?: boolean, "capacity"?: integer}) | ([pos?: $Either$$Type<($BlockPos$$Type), (integer)>, measuredInTick?: long, stored?: integer, isValid?: boolean, capacity?: integer]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $VoltmeterItem$RemoteEnergyData$$Original = $VoltmeterItem$RemoteEnergyData;}
declare module "blusunrize.immersiveengineering.common.items.EarmuffsItem" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$IConfigurableTool$ToolConfig$ToolConfigFloat} from "blusunrize.immersiveengineering.api.tool.IConfigurableTool$ToolConfig$ToolConfigFloat"
import {$List$$Type} from "java.util.List"
import {$IConfigurableTool$ToolConfig$$Type} from "blusunrize.immersiveengineering.api.tool.IConfigurableTool$ToolConfig"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$LinkedHashSet} from "java.util.LinkedHashSet"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$IConfigurableTool$$Interface} from "blusunrize.immersiveengineering.api.tool.IConfigurableTool"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$ItemGetterList} from "blusunrize.immersiveengineering.common.util.ItemGetterList"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$IEBaseItem} from "blusunrize.immersiveengineering.common.items.IEBaseItem"
import {$IEItemInterfaces$IColouredItem$$Interface} from "blusunrize.immersiveengineering.common.items.IEItemInterfaces$IColouredItem"
import {$EquipmentSlot} from "net.minecraft.world.entity.EquipmentSlot"
import {$Item} from "net.minecraft.world.item.Item"
import {$IConfigurableTool$ToolConfig$ToolConfigBoolean} from "blusunrize.immersiveengineering.api.tool.IConfigurableTool$ToolConfig$ToolConfigBoolean"

export class $EarmuffsItem extends $IEBaseItem implements $IConfigurableTool$$Interface, $IEItemInterfaces$IColouredItem$$Interface {
static readonly "MAX_REDUCTION": float
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static "EARMUFF_GETTERS": $ItemGetterList
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static "affectedSoundCategories": $LinkedHashSet<(StringJS)>
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "MIN_MULTIPLIER": float
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "isMuted"(arg0: $ItemStack$$Type, arg1: StringJS): boolean
public "getColourForIEItem"(arg0: $ItemStack$$Type, arg1: integer): integer
public static "getVolumeMod"(arg0: $ItemStack$$Type): float
public "hasCustomColor"(arg0: $ItemStack$$Type): boolean
public "canConfigure"(arg0: $ItemStack$$Type): boolean
public "getFloatOptions"(arg0: $ItemStack$$Type): ($IConfigurableTool$ToolConfig$ToolConfigFloat)[]
public "fomatConfigName"(arg0: $ItemStack$$Type, arg1: $IConfigurableTool$ToolConfig$$Type): StringJS
public "fomatConfigDescription"(arg0: $ItemStack$$Type, arg1: $IConfigurableTool$ToolConfig$$Type): StringJS
public "applyConfigOption"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: any): void
public "getColor"(arg0: $ItemStack$$Type): integer
public "getEquipmentSlot"(arg0: $ItemStack$$Type): $EquipmentSlot
public "getBooleanOptions"(arg0: $ItemStack$$Type): ($IConfigurableTool$ToolConfig$ToolConfigBoolean)[]
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EarmuffsItem$$Type = ($EarmuffsItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EarmuffsItem$$Original = $EarmuffsItem;}
declare module "blusunrize.immersiveengineering.common.items.ManualItem" {
import {$Map} from "java.util.Map"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$IEBaseItem} from "blusunrize.immersiveengineering.common.items.IEBaseItem"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"

export class $ManualItem extends $IEBaseItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
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
declare module "blusunrize.immersiveengineering.common.items.upgrades.ToolUpgradeItem" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$IEBaseItem} from "blusunrize.immersiveengineering.common.items.IEBaseItem"
import {$IUpgrade$$Interface} from "blusunrize.immersiveengineering.api.tool.upgrade.IUpgrade"
import {$Item} from "net.minecraft.world.item.Item"
import {$UpgradeData, $UpgradeData$$Type} from "blusunrize.immersiveengineering.api.tool.upgrade.UpgradeData"
import {$Set} from "java.util.Set"
import {$ToolUpgrade$$Type} from "blusunrize.immersiveengineering.common.items.upgrades.ToolUpgrade"

export class $ToolUpgradeItem extends $IEBaseItem implements $IUpgrade$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $ToolUpgrade$$Type)

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "getUpgradeTypes"(arg0: $ItemStack$$Type): $Set<(StringJS)>
public "canApplyUpgrades"(arg0: $UpgradeData$$Type, arg1: $ItemStack$$Type): boolean
public "applyUpgrades"(arg0: $UpgradeData$$Type, arg1: $ItemStack$$Type): $UpgradeData
public "getMaxStackSize"(arg0: $ItemStack$$Type): integer
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ToolUpgradeItem$$Type = ($ToolUpgradeItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ToolUpgradeItem$$Original = $ToolUpgradeItem;}
declare module "blusunrize.immersiveengineering.common.items.GraphiteElectrodeItem" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$IEBaseItem} from "blusunrize.immersiveengineering.common.items.IEBaseItem"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"

export class $GraphiteElectrodeItem extends $IEBaseItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "getMaxDamage"(arg0: $ItemStack$$Type): integer
public "isEnchantable"(arg0: $ItemStack$$Type): boolean
public "isDamageable"(arg0: $ItemStack$$Type): boolean
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GraphiteElectrodeItem$$Type = ($GraphiteElectrodeItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GraphiteElectrodeItem$$Original = $GraphiteElectrodeItem;}
declare module "blusunrize.immersiveengineering.common.items.VoltmeterItem" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$IEBaseItem} from "blusunrize.immersiveengineering.common.items.IEBaseItem"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$VoltmeterItem$RemoteRedstoneData} from "blusunrize.immersiveengineering.common.items.VoltmeterItem$RemoteRedstoneData"
import {$VoltmeterItem$RemoteEnergyData} from "blusunrize.immersiveengineering.common.items.VoltmeterItem$RemoteEnergyData"

export class $VoltmeterItem extends $IEBaseItem {
static "lastEnergyUpdate": $VoltmeterItem$RemoteEnergyData
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static "lastRedstoneUpdate": $VoltmeterItem$RemoteRedstoneData
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VoltmeterItem$$Type = ($VoltmeterItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $VoltmeterItem$$Original = $VoltmeterItem;}
declare module "blusunrize.immersiveengineering.common.items.IEShieldItem" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$ItemAbility$$Type} from "net.neoforged.neoforge.common.ItemAbility"
import {$Slot} from "net.minecraft.world.inventory.Slot"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$LivingDamageEvent$Pre$$Type} from "net.neoforged.neoforge.event.entity.living.LivingDamageEvent$Pre"
import {$Item} from "net.minecraft.world.item.Item"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$Map} from "java.util.Map"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$ItemCapabilityRegistration$ItemCapabilityRegistrar$$Type} from "blusunrize.immersiveengineering.common.items.ItemCapabilityRegistration$ItemCapabilityRegistrar"
import {$UpgradeableToolItem} from "blusunrize.immersiveengineering.common.items.UpgradeableToolItem"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"
import {$UseAnim} from "net.minecraft.world.item.UseAnim"
import {$DamageSource$$Type} from "net.minecraft.world.damagesource.DamageSource"
import {$AbstractContainerMenu$$Type} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export class $IEShieldItem extends $UpgradeableToolItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "TYPE": StringJS
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "inventoryTick"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $Entity$$Type, arg3: integer, arg4: boolean): void
public "isFoil"(arg0: $ItemStack$$Type): boolean
public "isValidRepairItem"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): boolean
public "shouldCauseReequipAnimation"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: boolean): boolean
public "canModify"(arg0: $ItemStack$$Type): boolean
public "getWorkbenchSlots"(arg0: $AbstractContainerMenu$$Type, arg1: $ItemStack$$Type, arg2: $Level$$Type, arg3: $Supplier$$Type<($Player$$Type)>, arg4: $IItemHandler$$Type): ($Slot)[]
public "hitShield"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $DamageSource$$Type, arg3: float, arg4: $LivingDamageEvent$Pre$$Type): void
public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "getUseDuration"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type): integer
public "getUseAnimation"(arg0: $ItemStack$$Type): $UseAnim
public "canPerformAction"(arg0: $ItemStack$$Type, arg1: $ItemAbility$$Type): boolean
public static "registerCapabilities"(arg0: $ItemCapabilityRegistration$ItemCapabilityRegistrar$$Type): void
public static "getMaxEnergyStored"(arg0: $ItemStack$$Type): integer
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEShieldItem$$Type = ($IEShieldItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IEShieldItem$$Original = $IEShieldItem;}
declare module "blusunrize.immersiveengineering.common.items.CoresampleItem" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$List, $List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$CoresampleItem$ItemData$$Type} from "blusunrize.immersiveengineering.common.items.CoresampleItem$ItemData"
import {$MineralMix} from "blusunrize.immersiveengineering.api.excavator.MineralMix"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$IEBaseItem} from "blusunrize.immersiveengineering.common.items.IEBaseItem"
import {$RecipeHolder} from "net.minecraft.world.item.crafting.RecipeHolder"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$ChatFormatting$$Type} from "net.minecraft.ChatFormatting"

export class $CoresampleItem extends $IEBaseItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public static "getMineralMixes"(arg0: $Level$$Type, arg1: $ItemStack$$Type): $List<($RecipeHolder<($MineralMix)>)>
public static "getCoresampleInfo"(arg0: $CoresampleItem$ItemData$$Type, arg1: $List$$Type<($Component$$Type)>, arg2: $ChatFormatting$$Type, arg3: $Level$$Type, arg4: boolean, arg5: boolean): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CoresampleItem$$Type = ($CoresampleItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CoresampleItem$$Original = $CoresampleItem;}
declare module "blusunrize.immersiveengineering.common.items.RevolverItem$RevolverCooldowns" {
import {$DualCodec} from "malte0811.dualcodecs.DualCodec"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$Record} from "java.lang.Record"

export class $RevolverItem$RevolverCooldowns extends $Record {
static readonly "CODECS": $DualCodec<($ByteBuf), ($RevolverItem$RevolverCooldowns)>
static readonly "DEFAULT": $RevolverItem$RevolverCooldowns

constructor(reloadTimer: integer, fireCooldown: integer)

public "reloadTimer"(): integer
public "fireCooldown"(): integer
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RevolverItem$RevolverCooldowns$$Type = ({"reloadTimer"?: integer, "fireCooldown"?: integer}) | ([reloadTimer?: integer, fireCooldown?: integer]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RevolverItem$RevolverCooldowns$$Original = $RevolverItem$RevolverCooldowns;}
declare module "blusunrize.immersiveengineering.common.items.HammerItem" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$List$$Type} from "java.util.List"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$Holder$$Type} from "net.minecraft.core.Holder"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$Enchantment$$Type} from "net.minecraft.world.item.enchantment.Enchantment"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$IEBaseItem} from "blusunrize.immersiveengineering.common.items.IEBaseItem"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $HammerItem extends $IEBaseItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "getMaxDamage"(arg0: $ItemStack$$Type): integer
public "hasCraftingRemainingItem"(arg0: $ItemStack$$Type): boolean
public "isEnchantable"(arg0: $ItemStack$$Type): boolean
public "isValidRepairItem"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): boolean
public "getEnchantmentValue"(): integer
public "onItemUseFirst"(arg0: $ItemStack$$Type, arg1: $UseOnContext$$Type): $InteractionResult
public "isBookEnchantable"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): boolean
public "doesSneakBypassUse"(arg0: $ItemStack$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type): boolean
public static "canApplyAtEnchantingTable"(arg0: $Holder$$Type<($Enchantment)>): boolean
public "getCraftingRemainingItem"(arg0: $ItemStack$$Type): $ItemStack
public "getDestroySpeed"(arg0: $ItemStack$$Type, arg1: $BlockState$$Type): float
public "isCorrectToolForDrops"(arg0: $ItemStack$$Type, arg1: $BlockState$$Type): boolean
public "interactLivingEntity"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $LivingEntity$$Type, arg3: $InteractionHand$$Type): $InteractionResult
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "enchantmentValue"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HammerItem$$Type = ($HammerItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HammerItem$$Original = $HammerItem;}
declare module "blusunrize.immersiveengineering.common.items.BulletItem" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$IEBaseItem} from "blusunrize.immersiveengineering.common.items.IEBaseItem"
import {$IEItemInterfaces$IColouredItem$$Interface} from "blusunrize.immersiveengineering.common.items.IEItemInterfaces$IColouredItem"
import {$BulletHandler$IBullet, $BulletHandler$IBullet$$Type} from "blusunrize.immersiveengineering.api.tool.BulletHandler$IBullet"
import {$Item} from "net.minecraft.world.item.Item"
import {$Entity} from "net.minecraft.world.entity.Entity"

export class $BulletItem<T> extends $IEBaseItem implements $IEItemInterfaces$IColouredItem$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $BulletHandler$IBullet$$Type<(T)>)

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "getColourForIEItem"(arg0: $ItemStack$$Type, arg1: integer): integer
public "createBullet"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $Vec3$$Type, arg3: $Vec3$$Type, arg4: $ItemStack$$Type, arg5: boolean): $Entity
public "getType"(): $BulletHandler$IBullet<(never)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "type"(): $BulletHandler$IBullet<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BulletItem$$Type<T> = ($BulletItem<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BulletItem$$Original<T> = $BulletItem<(T)>;}
declare module "blusunrize.immersiveengineering.common.items.IEBaseItem" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$CreativeModeTab$Output$$Type} from "net.minecraft.world.item.CreativeModeTab$Output"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$RecipeType$$Type} from "net.minecraft.world.item.crafting.RecipeType"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"

export class $IEBaseItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)
constructor()

public "isRepairable"(arg0: $ItemStack$$Type): boolean
public "isBookEnchantable"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): boolean
public "getBurnTime"(arg0: $ItemStack$$Type, arg1: $RecipeType$$Type<(never)>): integer
public "isIERepairable"(arg0: $ItemStack$$Type): boolean
public "setBurnTime"(arg0: integer): $IEBaseItem
public "isHidden"(): boolean
public "getBarColor"(arg0: $ItemStack$$Type): integer
public "fillCreativeTab"(arg0: $CreativeModeTab$Output$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
set "burnTime"(value: integer)
get "hidden"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEBaseItem$$Type = ($IEBaseItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IEBaseItem$$Original = $IEBaseItem;}
declare module "blusunrize.immersiveengineering.common.items.IEItemInterfaces$IScrollwheel" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"

export interface $IEItemInterfaces$IScrollwheel$$Interface {

(arg0: $ItemStack, arg1: $Player, arg2: boolean): void
}

export class $IEItemInterfaces$IScrollwheel implements $IEItemInterfaces$IScrollwheel$$Interface {
 "onScrollwheel"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEItemInterfaces$IScrollwheel$$Type = ((arg0: $ItemStack, arg1: $Player, arg2: boolean) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IEItemInterfaces$IScrollwheel$$Original = $IEItemInterfaces$IScrollwheel;}
declare module "blusunrize.immersiveengineering.common.items.ShaderItem" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$IShaderItem$$Interface} from "blusunrize.immersiveengineering.api.shader.IShaderItem"
import {$IEBaseItem} from "blusunrize.immersiveengineering.common.items.IEBaseItem"
import {$IEItemInterfaces$IColouredItem$$Interface} from "blusunrize.immersiveengineering.common.items.IEItemInterfaces$IColouredItem"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"

export class $ShaderItem extends $IEBaseItem implements $IShaderItem$$Interface, $IEItemInterfaces$IColouredItem$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $ResourceLocation$$Type)

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public "getColourForIEItem"(arg0: $ItemStack$$Type, arg1: integer): integer
public "getShaderName"(): $ResourceLocation
public static "getShaderName"(arg0: $ResourceLocation$$Type): $Component
public static "getShaderNameKey"(arg0: $ResourceLocation$$Type): StringJS
public "getName"(arg0: $ItemStack$$Type): $Component
public "getDescriptionId"(): StringJS
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "shaderName"(): $ResourceLocation
get "descriptionId"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShaderItem$$Type = ($ShaderItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ShaderItem$$Original = $ShaderItem;}
declare module "blusunrize.immersiveengineering.common.items.ScrewdriverItem" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$IEBaseItem} from "blusunrize.immersiveengineering.common.items.IEBaseItem"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"

export class $ScrewdriverItem extends $IEBaseItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "doesSneakBypassUse"(arg0: $ItemStack$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type): boolean
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScrewdriverItem$$Type = ($ScrewdriverItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ScrewdriverItem$$Original = $ScrewdriverItem;}
declare module "blusunrize.immersiveengineering.common.items.RailgunItem" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Slot} from "net.minecraft.world.inventory.Slot"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$ZoomHandler$IZoomTool$$Interface} from "blusunrize.immersiveengineering.api.tool.ZoomHandler$IZoomTool"
import {$Item} from "net.minecraft.world.item.Item"
import {$Entity} from "net.minecraft.world.entity.Entity"
import {$IEItemInterfaces$IScrollwheel$$Interface} from "blusunrize.immersiveengineering.common.items.IEItemInterfaces$IScrollwheel"
import {$Map} from "java.util.Map"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$ItemCapabilityRegistration$ItemCapabilityRegistrar$$Type} from "blusunrize.immersiveengineering.common.items.ItemCapabilityRegistration$ItemCapabilityRegistrar"
import {$UpgradeableToolItem} from "blusunrize.immersiveengineering.common.items.UpgradeableToolItem"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"
import {$UseAnim} from "net.minecraft.world.item.UseAnim"
import {$AbstractContainerMenu$$Type} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export class $RailgunItem extends $UpgradeableToolItem implements $ZoomHandler$IZoomTool$$Interface, $IEItemInterfaces$IScrollwheel$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "TYPE": StringJS
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "shouldCauseReequipAnimation"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: boolean): boolean
public static "isAmmo"(arg0: $ItemStack$$Type): boolean
public "onScrollwheel"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: boolean): void
public "removeFromWorkbench"(arg0: $Player$$Type, arg1: $ItemStack$$Type): void
public "canModify"(arg0: $ItemStack$$Type): boolean
public "getWorkbenchSlots"(arg0: $AbstractContainerMenu$$Type, arg1: $ItemStack$$Type, arg2: $Level$$Type, arg3: $Supplier$$Type<($Player$$Type)>, arg4: $IItemHandler$$Type): ($Slot)[]
public "clearUpgrades"(arg0: $ItemStack$$Type): void
public "recalculateUpgrades"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $Player$$Type): void
public static "fireProjectile"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): $Entity
public "canZoom"(arg0: $ItemStack$$Type, arg1: $Player$$Type): boolean
public "getZoomSteps"(arg0: $ItemStack$$Type, arg1: $Player$$Type): (float)[]
public static "findAmmo"(arg0: $ItemStack$$Type, arg1: $Player$$Type): $ItemStack
public static "playChargeSound"(arg0: $LivingEntity$$Type, arg1: $ItemStack$$Type): void
public static "getChargeTime"(arg0: $ItemStack$$Type): integer
public static "findAmmoInSlot"(arg0: $Player$$Type, arg1: integer): $ItemStack
public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "onUseTick"(arg0: $Level$$Type, arg1: $LivingEntity$$Type, arg2: $ItemStack$$Type, arg3: integer): void
public "getUseDuration"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type): integer
public "getUseAnimation"(arg0: $ItemStack$$Type): $UseAnim
public "releaseUsing"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $LivingEntity$$Type, arg3: integer): void
public static "registerCapabilities"(arg0: $ItemCapabilityRegistration$ItemCapabilityRegistrar$$Type): void
public static "getMaxEnergyStored"(arg0: $ItemStack$$Type): integer
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RailgunItem$$Type = ($RailgunItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RailgunItem$$Original = $RailgunItem;}
