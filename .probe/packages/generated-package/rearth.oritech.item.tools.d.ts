declare module "rearth.oritech.item.tools.ElectricMaceItem" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ItemAttributeModifiers} from "net.minecraft.world.item.component.ItemAttributeModifiers"
import {$List$$Type} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$OritechEnergyItem$$Interface} from "rearth.oritech.item.tools.util.OritechEnergyItem"
import {$Runnable} from "java.lang.Runnable"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$MaceItem} from "net.minecraft.world.item.MaceItem"
import {$Item} from "net.minecraft.world.item.Item"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$Map} from "java.util.Map"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$DamageSource$$Type} from "net.minecraft.world.damagesource.DamageSource"
import {$EnergyApi$EnergyStorage} from "rearth.oritech.api.energy.EnergyApi$EnergyStorage"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$ParticleOptions$$Type} from "net.minecraft.core.particles.ParticleOptions"

export class $ElectricMaceItem extends $MaceItem implements $OritechEnergyItem$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "PENDING_LIGHTNING_HITS": $Map<(long), ($Runnable)>
static readonly "SMASH_ATTACK_KNOCKBACK_RADIUS": float
static readonly "SMASH_ATTACK_FALL_THRESHOLD": float
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "isEnchantable"(arg0: $ItemStack$$Type): boolean
public "isValidRepairItem"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): boolean
public "shouldCauseReequipAnimation"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: boolean): boolean
public "shouldCauseBlockBreakReset"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): boolean
public "getEnergyCapacity"(arg0: $ItemStack$$Type): long
public static "processLightningEvents"(arg0: $Level$$Type): void
public "getEnergyMaxInput"(arg0: $ItemStack$$Type): long
public static "createLightningBolt"(arg0: $ServerLevel$$Type, arg1: $Vec3$$Type, arg2: $Vec3$$Type, arg3: integer, arg4: double, arg5: double, arg6: $ParticleOptions$$Type, arg7: float, arg8: integer, arg9: integer): void
public "allowComponentsUpdateAnimation"(arg0: $Player$$Type, arg1: $InteractionHand$$Type, arg2: $ItemStack$$Type, arg3: $ItemStack$$Type): boolean
public "allowContinuingBlockBreaking"(arg0: $Player$$Type, arg1: $ItemStack$$Type, arg2: $ItemStack$$Type): boolean
public "isBarVisible"(arg0: $ItemStack$$Type): boolean
public "getBarWidth"(arg0: $ItemStack$$Type): integer
public "getBarColor"(arg0: $ItemStack$$Type): integer
public static "createAttributes"(): $ItemAttributeModifiers
public "getAttackDamageBonus"(arg0: $Entity$$Type, arg1: float, arg2: $DamageSource$$Type): float
public "postHurtEnemy"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type): void
public "getEnergyStorage"(arg0: $ItemStack$$Type): $EnergyApi$EnergyStorage
public "getEnergyMaxOutput"(arg0: $ItemStack$$Type): long
public "tryUseEnergy"(arg0: $ItemStack$$Type, arg1: long, arg2: $Player$$Type): boolean
public "getStoredEnergy"(arg0: $ItemStack$$Type): long
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ElectricMaceItem$$Type = ($ElectricMaceItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ElectricMaceItem$$Original = $ElectricMaceItem;}
declare module "rearth.oritech.item.tools.harvesting.PromethiumAxeItem" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Tuple} from "net.minecraft.util.Tuple"
import {$AxeItem} from "net.minecraft.world.item.AxeItem"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$GeoAnimatable$$Type} from "software.bernie.geckolib.animatable.GeoAnimatable"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Map} from "java.util.Map"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$GeoRenderProvider$$Type} from "software.bernie.geckolib.animatable.client.GeoRenderProvider"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$AnimatableInstanceCache} from "software.bernie.geckolib.animatable.instance.AnimatableInstanceCache"
import {$GeoItem$$Interface} from "software.bernie.geckolib.animatable.GeoItem"
import {$AnimatableManager$ControllerRegistrar$$Type} from "software.bernie.geckolib.animation.AnimatableManager$ControllerRegistrar"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$Deque} from "java.util.Deque"
import {$SerializableDataTicket$$Type} from "software.bernie.geckolib.constant.dataticket.SerializableDataTicket"

export class $PromethiumAxeItem extends $AxeItem implements $GeoItem$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "tier": $Tier
static readonly "pendingBlocks": $Deque<($Tuple<($Level), ($BlockPos)>)>
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static "STRIPPABLES": $Map<($Block), ($Block)>
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Tier$$Type, arg1: $Item$Properties$$Type)

public static "onTick"(arg0: $ServerLevel$$Type): void
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "mineBlock"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $BlockState$$Type, arg3: $BlockPos$$Type, arg4: $LivingEntity$$Type): boolean
public "isEnchantable"(arg0: $ItemStack$$Type): boolean
public "isValidRepairItem"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): boolean
public "createGeoRenderer"(arg0: $Consumer$$Type<($GeoRenderProvider)>): void
public "registerControllers"(arg0: $AnimatableManager$ControllerRegistrar$$Type): void
public "getAnimatableInstanceCache"(): $AnimatableInstanceCache
public static "processPendingBlocks"(arg0: $Level$$Type): void
public static "registerSyncedAnimatable"(arg0: $GeoAnimatable$$Type): void
public "isPerspectiveAware"(): boolean
public "animatableCacheOverride"(): $AnimatableInstanceCache
public static "getOrAssignId"(arg0: $ItemStack$$Type, arg1: $ServerLevel$$Type): long
public "getTick"(arg0: any): double
public static "getId"(arg0: $ItemStack$$Type): long
public "getAnimData"<D>(arg0: long, arg1: $SerializableDataTicket$$Type<(D)>): D
public "setAnimData"<D>(arg0: $Entity$$Type, arg1: long, arg2: $SerializableDataTicket$$Type<(D)>, arg3: D): void
public "syncAnimData"<D>(arg0: long, arg1: $SerializableDataTicket$$Type<(D)>, arg2: D, arg3: $Entity$$Type): void
public "triggerAnim"<D>(arg0: $Entity$$Type, arg1: long, arg2: StringJS, arg3: StringJS): void
public "stopTriggeredAnim"(arg0: $Entity$$Type, arg1: long, arg2: StringJS, arg3: StringJS): void
public "triggerArmorAnim"(arg0: $Entity$$Type, arg1: long, arg2: StringJS, arg3: StringJS): void
public "stopTriggeredArmorAnim"(arg0: $Entity$$Type, arg1: long, arg2: StringJS, arg3: StringJS): void
public "getRenderProvider"(): any
public "getBoneResetTime"(): double
public "shouldPlayAnimsWhileGamePaused"(): boolean
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "animatableInstanceCache"(): $AnimatableInstanceCache
get "perspectiveAware"(): boolean
get "renderProvider"(): any
get "boneResetTime"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PromethiumAxeItem$$Type = ($PromethiumAxeItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PromethiumAxeItem$$Original = $PromethiumAxeItem;}
declare module "rearth.oritech.item.tools.harvesting.DrillItem" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$OritechEnergyItem$$Interface} from "rearth.oritech.item.tools.util.OritechEnergyItem"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$EnergyApi$EnergyStorage} from "rearth.oritech.api.energy.EnergyApi$EnergyStorage"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$DiggerItem} from "net.minecraft.world.item.DiggerItem"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $DrillItem extends $DiggerItem implements $OritechEnergyItem$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "BAR_STEP_COUNT": integer
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Tier$$Type, arg1: $TagKey$$Type<($Block)>, arg2: $Item$Properties$$Type)

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "mineBlock"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $BlockState$$Type, arg3: $BlockPos$$Type, arg4: $LivingEntity$$Type): boolean
public "isEnchantable"(arg0: $ItemStack$$Type): boolean
public "isValidRepairItem"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): boolean
public "shouldCauseReequipAnimation"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: boolean): boolean
public "shouldCauseBlockBreakReset"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): boolean
public "getEnergyCapacity"(arg0: $ItemStack$$Type): long
public "getEnergyMaxInput"(arg0: $ItemStack$$Type): long
public "allowComponentsUpdateAnimation"(arg0: $Player$$Type, arg1: $InteractionHand$$Type, arg2: $ItemStack$$Type, arg3: $ItemStack$$Type): boolean
public "allowContinuingBlockBreaking"(arg0: $Player$$Type, arg1: $ItemStack$$Type, arg2: $ItemStack$$Type): boolean
public "isBarVisible"(arg0: $ItemStack$$Type): boolean
public "getBarWidth"(arg0: $ItemStack$$Type): integer
public "getBarColor"(arg0: $ItemStack$$Type): integer
public "getDestroySpeed"(arg0: $ItemStack$$Type, arg1: $BlockState$$Type): float
public "getEnergyStorage"(arg0: $ItemStack$$Type): $EnergyApi$EnergyStorage
public "getEnergyMaxOutput"(arg0: $ItemStack$$Type): long
public "tryUseEnergy"(arg0: $ItemStack$$Type, arg1: long, arg2: $Player$$Type): boolean
public "getStoredEnergy"(arg0: $ItemStack$$Type): long
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
declare module "rearth.oritech.item.tools.armor.BaseJetpackItem" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$FluidApi$ItemProvider$$Interface} from "rearth.oritech.api.fluid.FluidApi$ItemProvider"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$OritechEnergyItem$$Interface} from "rearth.oritech.item.tools.util.OritechEnergyItem"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$EnergyApi$EnergyStorage} from "rearth.oritech.api.energy.EnergyApi$EnergyStorage"
import {$FluidApi$SingleSlotStorage} from "rearth.oritech.api.fluid.FluidApi$SingleSlotStorage"
import {$FluidStack} from "dev.architectury.fluid.FluidStack"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"

export interface $BaseJetpackItem$$Interface extends $OritechEnergyItem$$Interface, $FluidApi$ItemProvider$$Interface {
get "rfUsage"(): integer
get "fuelUsage"(): integer
get "fuelCapacity"(): long
get "speed"(): float
}

export class $BaseJetpackItem implements $BaseJetpackItem$$Interface {
 "isValidFuel"(arg0: $Fluid$$Type): boolean
 "tickJetpack"(arg0: $ItemStack$$Type, arg1: $Entity$$Type, arg2: $Level$$Type): void
 "getJetpackBarColor"(arg0: $ItemStack$$Type): integer
 "getJetpackBarStep"(arg0: $ItemStack$$Type): integer
 "addJetpackTooltip"(arg0: $ItemStack$$Type, arg1: $List$$Type<($Component$$Type)>, arg2: boolean): void
 "requireUpward"(): boolean
 "getRfUsage"(): integer
 "getFuelUsage"(): integer
 "getFuelCapacity"(): long
 "requireTakeoff"(): boolean
 "tryUseFluid"(arg0: $ItemStack$$Type): boolean
 "getStoredFluid"(arg0: $ItemStack$$Type): $FluidStack
 "getFluidStorage"(arg0: $ItemStack$$Type): $FluidApi$SingleSlotStorage
 "getSpeed"(): float
 "getEnergyStorage"(arg0: $ItemStack$$Type): $EnergyApi$EnergyStorage
 "getEnergyCapacity"(arg0: $ItemStack$$Type): long
 "getEnergyMaxInput"(arg0: $ItemStack$$Type): long
 "getEnergyMaxOutput"(arg0: $ItemStack$$Type): long
 "tryUseEnergy"(arg0: $ItemStack$$Type, arg1: long, arg2: $Player$$Type): boolean
 "getStoredEnergy"(arg0: $ItemStack$$Type): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseJetpackItem$$Type = ($BaseJetpackItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BaseJetpackItem$$Original = $BaseJetpackItem;}
declare module "rearth.oritech.item.tools.armor.ExoArmorItem" {
import {$ArmorMaterial$$Type} from "net.minecraft.world.item.ArmorMaterial"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ItemAttributeModifiers} from "net.minecraft.world.item.component.ItemAttributeModifiers"
import {$List$$Type} from "java.util.List"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Holder$$Type} from "net.minecraft.core.Holder"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$GeoAnimatable$$Type} from "software.bernie.geckolib.animatable.GeoAnimatable"
import {$EquipmentSlot$$Type} from "net.minecraft.world.entity.EquipmentSlot"
import {$Supplier} from "java.util.function.Supplier"
import {$ArmorItem} from "net.minecraft.world.item.ArmorItem"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$ArmorEventHandler$$Interface} from "rearth.oritech.item.tools.util.ArmorEventHandler"
import {$DispenseItemBehavior} from "net.minecraft.core.dispenser.DispenseItemBehavior"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$ArmorItem$Type$$Type} from "net.minecraft.world.item.ArmorItem$Type"
import {$Map} from "java.util.Map"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$GeoRenderProvider$$Type} from "software.bernie.geckolib.animatable.client.GeoRenderProvider"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$AnimatableInstanceCache} from "software.bernie.geckolib.animatable.instance.AnimatableInstanceCache"
import {$GeoItem$$Interface} from "software.bernie.geckolib.animatable.GeoItem"
import {$AnimatableManager$ControllerRegistrar$$Type} from "software.bernie.geckolib.animation.AnimatableManager$ControllerRegistrar"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$Equipable} from "net.minecraft.world.item.Equipable"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$SerializableDataTicket$$Type} from "software.bernie.geckolib.constant.dataticket.SerializableDataTicket"

export class $ExoArmorItem extends $ArmorItem implements $GeoItem$$Interface, $ArmorEventHandler$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
 "defaultModifiers": $Supplier<($ItemAttributeModifiers)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Holder$$Type<($ArmorMaterial)>, arg1: $ArmorItem$Type$$Type, arg2: $Item$Properties$$Type)

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "getDefaultMaxStackSize"(): integer
public "isValidRepairItem"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): boolean
public "getDefaultAttributeModifiers"(): $ItemAttributeModifiers
public "onEquipped"(arg0: $Player$$Type, arg1: $ItemStack$$Type): void
public "onUnequipped"(arg0: $Player$$Type, arg1: $ItemStack$$Type): void
public "createGeoRenderer"(arg0: $Consumer$$Type<($GeoRenderProvider)>): void
public "registerControllers"(arg0: $AnimatableManager$ControllerRegistrar$$Type): void
public "getAnimatableInstanceCache"(): $AnimatableInstanceCache
public "getModel"(): $ResourceLocation
public "isBarVisible"(arg0: $ItemStack$$Type): boolean
public static "registerSyncedAnimatable"(arg0: $GeoAnimatable$$Type): void
public "isPerspectiveAware"(): boolean
public "animatableCacheOverride"(): $AnimatableInstanceCache
public static "getOrAssignId"(arg0: $ItemStack$$Type, arg1: $ServerLevel$$Type): long
public "getTick"(arg0: any): double
public static "getId"(arg0: $ItemStack$$Type): long
public static "processEvent"(arg0: $LivingEntity$$Type, arg1: $EquipmentSlot$$Type, arg2: $ItemStack$$Type, arg3: $ItemStack$$Type): void
public "getAnimData"<D>(arg0: long, arg1: $SerializableDataTicket$$Type<(D)>): D
public "setAnimData"<D>(arg0: $Entity$$Type, arg1: long, arg2: $SerializableDataTicket$$Type<(D)>, arg3: D): void
public "syncAnimData"<D>(arg0: long, arg1: $SerializableDataTicket$$Type<(D)>, arg2: D, arg3: $Entity$$Type): void
public "triggerAnim"<D>(arg0: $Entity$$Type, arg1: long, arg2: StringJS, arg3: StringJS): void
public "stopTriggeredAnim"(arg0: $Entity$$Type, arg1: long, arg2: StringJS, arg3: StringJS): void
public "triggerArmorAnim"(arg0: $Entity$$Type, arg1: long, arg2: StringJS, arg3: StringJS): void
public "stopTriggeredArmorAnim"(arg0: $Entity$$Type, arg1: long, arg2: StringJS, arg3: StringJS): void
public "getRenderProvider"(): any
public static "get"(arg0: $ItemStack$$Type): $Equipable
public "getBoneResetTime"(): double
public "shouldPlayAnimsWhileGamePaused"(): boolean
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "defaultMaxStackSize"(): integer
get "defaultAttributeModifiers"(): $ItemAttributeModifiers
get "animatableInstanceCache"(): $AnimatableInstanceCache
get "model"(): $ResourceLocation
get "perspectiveAware"(): boolean
get "renderProvider"(): any
get "boneResetTime"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExoArmorItem$$Type = ($ExoArmorItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ExoArmorItem$$Original = $ExoArmorItem;}
declare module "rearth.oritech.item.tools.Wrench" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Tool} from "net.minecraft.world.item.component.Tool"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"

export class $Wrench extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static "ACTION_COOLDOWN": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public static "createToolComponent"(): $Tool
public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Wrench$$Type = ($Wrench);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Wrench$$Original = $Wrench;}
declare module "rearth.oritech.item.tools.armor.JetpackExoArmorItem" {
import {$BackstorageExoArmorItem} from "rearth.oritech.item.tools.armor.BackstorageExoArmorItem"
import {$ArmorMaterial$$Type} from "net.minecraft.world.item.ArmorMaterial"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ItemAttributeModifiers} from "net.minecraft.world.item.component.ItemAttributeModifiers"
import {$List$$Type} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Holder$$Type} from "net.minecraft.core.Holder"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$GeoAnimatable$$Type} from "software.bernie.geckolib.animatable.GeoAnimatable"
import {$BaseJetpackItem$$Interface} from "rearth.oritech.item.tools.armor.BaseJetpackItem"
import {$EquipmentSlot$$Type} from "net.minecraft.world.entity.EquipmentSlot"
import {$Supplier} from "java.util.function.Supplier"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$FluidApi$SingleSlotStorage} from "rearth.oritech.api.fluid.FluidApi$SingleSlotStorage"
import {$FluidStack} from "dev.architectury.fluid.FluidStack"
import {$DispenseItemBehavior} from "net.minecraft.core.dispenser.DispenseItemBehavior"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$ArmorItem$Type$$Type} from "net.minecraft.world.item.ArmorItem$Type"
import {$Map} from "java.util.Map"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$Equipable} from "net.minecraft.world.item.Equipable"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"

export class $JetpackExoArmorItem extends $BackstorageExoArmorItem implements $BaseJetpackItem$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
 "defaultModifiers": $Supplier<($ItemAttributeModifiers)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Holder$$Type<($ArmorMaterial)>, arg1: $ArmorItem$Type$$Type, arg2: $Item$Properties$$Type)

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "inventoryTick"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $Entity$$Type, arg3: integer, arg4: boolean): void
public "getEnergyCapacity"(arg0: $ItemStack$$Type): long
public "getEnergyMaxInput"(arg0: $ItemStack$$Type): long
public "requireUpward"(): boolean
public "getRfUsage"(): integer
public "getFuelUsage"(): integer
public "getFuelCapacity"(): long
public "getModel"(): $ResourceLocation
public "getBarWidth"(arg0: $ItemStack$$Type): integer
public "getBarColor"(arg0: $ItemStack$$Type): integer
public "getSpeed"(): float
public "isValidFuel"(arg0: $Fluid$$Type): boolean
public "tickJetpack"(arg0: $ItemStack$$Type, arg1: $Entity$$Type, arg2: $Level$$Type): void
public "getJetpackBarColor"(arg0: $ItemStack$$Type): integer
public "getJetpackBarStep"(arg0: $ItemStack$$Type): integer
public "addJetpackTooltip"(arg0: $ItemStack$$Type, arg1: $List$$Type<($Component$$Type)>, arg2: boolean): void
public "requireTakeoff"(): boolean
public "tryUseFluid"(arg0: $ItemStack$$Type): boolean
public "getStoredFluid"(arg0: $ItemStack$$Type): $FluidStack
public "getFluidStorage"(arg0: $ItemStack$$Type): $FluidApi$SingleSlotStorage
public static "registerSyncedAnimatable"(arg0: $GeoAnimatable$$Type): void
public static "getOrAssignId"(arg0: $ItemStack$$Type, arg1: $ServerLevel$$Type): long
public static "getId"(arg0: $ItemStack$$Type): long
public static "processEvent"(arg0: $LivingEntity$$Type, arg1: $EquipmentSlot$$Type, arg2: $ItemStack$$Type, arg3: $ItemStack$$Type): void
public static "get"(arg0: $ItemStack$$Type): $Equipable
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "rfUsage"(): integer
get "fuelUsage"(): integer
get "fuelCapacity"(): long
get "model"(): $ResourceLocation
get "speed"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JetpackExoArmorItem$$Type = ($JetpackExoArmorItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $JetpackExoArmorItem$$Original = $JetpackExoArmorItem;}
declare module "rearth.oritech.item.tools.util.OritechEnergyItem" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$EnergyApi$EnergyStorage} from "rearth.oritech.api.energy.EnergyApi$EnergyStorage"
import {$EnergyApi$ItemProvider$$Interface} from "rearth.oritech.api.energy.EnergyApi$ItemProvider"

export interface $OritechEnergyItem$$Interface extends $EnergyApi$ItemProvider$$Interface {
}

export class $OritechEnergyItem implements $OritechEnergyItem$$Interface {
 "getEnergyStorage"(arg0: $ItemStack$$Type): $EnergyApi$EnergyStorage
 "getEnergyCapacity"(arg0: $ItemStack$$Type): long
 "getEnergyMaxInput"(arg0: $ItemStack$$Type): long
 "getEnergyMaxOutput"(arg0: $ItemStack$$Type): long
 "tryUseEnergy"(arg0: $ItemStack$$Type, arg1: long, arg2: $Player$$Type): boolean
 "getStoredEnergy"(arg0: $ItemStack$$Type): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OritechEnergyItem$$Type = ($OritechEnergyItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $OritechEnergyItem$$Original = $OritechEnergyItem;}
declare module "rearth.oritech.item.tools.armor.JetpackElytraItem" {
import {$ArmorMaterial$$Type} from "net.minecraft.world.item.ArmorMaterial"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ItemAttributeModifiers} from "net.minecraft.world.item.component.ItemAttributeModifiers"
import {$List$$Type} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Holder$$Type} from "net.minecraft.core.Holder"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$GeoAnimatable$$Type} from "software.bernie.geckolib.animatable.GeoAnimatable"
import {$BaseJetpackItem$$Interface} from "rearth.oritech.item.tools.armor.BaseJetpackItem"
import {$Supplier} from "java.util.function.Supplier"
import {$ArmorItem} from "net.minecraft.world.item.ArmorItem"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$FluidApi$SingleSlotStorage} from "rearth.oritech.api.fluid.FluidApi$SingleSlotStorage"
import {$FluidStack} from "dev.architectury.fluid.FluidStack"
import {$DispenseItemBehavior} from "net.minecraft.core.dispenser.DispenseItemBehavior"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$ArmorItem$Type$$Type} from "net.minecraft.world.item.ArmorItem$Type"
import {$Map} from "java.util.Map"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$GeoRenderProvider$$Type} from "software.bernie.geckolib.animatable.client.GeoRenderProvider"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$AnimatableInstanceCache} from "software.bernie.geckolib.animatable.instance.AnimatableInstanceCache"
import {$GeoItem$$Interface} from "software.bernie.geckolib.animatable.GeoItem"
import {$AnimatableManager$ControllerRegistrar$$Type} from "software.bernie.geckolib.animation.AnimatableManager$ControllerRegistrar"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$Equipable} from "net.minecraft.world.item.Equipable"
import {$EnergyApi$EnergyStorage} from "rearth.oritech.api.energy.EnergyApi$EnergyStorage"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$SerializableDataTicket$$Type} from "software.bernie.geckolib.constant.dataticket.SerializableDataTicket"

export class $JetpackElytraItem extends $ArmorItem implements $GeoItem$$Interface, $BaseJetpackItem$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
 "defaultModifiers": $Supplier<($ItemAttributeModifiers)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Holder$$Type<($ArmorMaterial)>, arg1: $ArmorItem$Type$$Type, arg2: $Item$Properties$$Type)

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "getDefaultMaxStackSize"(): integer
public "inventoryTick"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $Entity$$Type, arg3: integer, arg4: boolean): void
public "isValidRepairItem"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): boolean
public "getEnergyCapacity"(arg0: $ItemStack$$Type): long
public "createGeoRenderer"(arg0: $Consumer$$Type<($GeoRenderProvider)>): void
public "registerControllers"(arg0: $AnimatableManager$ControllerRegistrar$$Type): void
public "getAnimatableInstanceCache"(): $AnimatableInstanceCache
public "getEnergyMaxInput"(arg0: $ItemStack$$Type): long
public "requireUpward"(): boolean
public "getRfUsage"(): integer
public "getFuelUsage"(): integer
public "getFuelCapacity"(): long
public "requireTakeoff"(): boolean
public "useCustomElytra"(arg0: $LivingEntity$$Type, arg1: $ItemStack$$Type, arg2: boolean): boolean
public "isBarVisible"(arg0: $ItemStack$$Type): boolean
public "getBarWidth"(arg0: $ItemStack$$Type): integer
public "getBarColor"(arg0: $ItemStack$$Type): integer
public "getSpeed"(): float
public "canElytraFly"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type): boolean
public "elytraFlightTick"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type, arg2: integer): boolean
public static "registerSyncedAnimatable"(arg0: $GeoAnimatable$$Type): void
public "isPerspectiveAware"(): boolean
public "animatableCacheOverride"(): $AnimatableInstanceCache
public static "getOrAssignId"(arg0: $ItemStack$$Type, arg1: $ServerLevel$$Type): long
public "getTick"(arg0: any): double
public static "getId"(arg0: $ItemStack$$Type): long
public "isValidFuel"(arg0: $Fluid$$Type): boolean
public "tickJetpack"(arg0: $ItemStack$$Type, arg1: $Entity$$Type, arg2: $Level$$Type): void
public "getJetpackBarColor"(arg0: $ItemStack$$Type): integer
public "getJetpackBarStep"(arg0: $ItemStack$$Type): integer
public "addJetpackTooltip"(arg0: $ItemStack$$Type, arg1: $List$$Type<($Component$$Type)>, arg2: boolean): void
public "tryUseFluid"(arg0: $ItemStack$$Type): boolean
public "getStoredFluid"(arg0: $ItemStack$$Type): $FluidStack
public "getFluidStorage"(arg0: $ItemStack$$Type): $FluidApi$SingleSlotStorage
public "getAnimData"<D>(arg0: long, arg1: $SerializableDataTicket$$Type<(D)>): D
public "setAnimData"<D>(arg0: $Entity$$Type, arg1: long, arg2: $SerializableDataTicket$$Type<(D)>, arg3: D): void
public "syncAnimData"<D>(arg0: long, arg1: $SerializableDataTicket$$Type<(D)>, arg2: D, arg3: $Entity$$Type): void
public "triggerAnim"<D>(arg0: $Entity$$Type, arg1: long, arg2: StringJS, arg3: StringJS): void
public "stopTriggeredAnim"(arg0: $Entity$$Type, arg1: long, arg2: StringJS, arg3: StringJS): void
public "triggerArmorAnim"(arg0: $Entity$$Type, arg1: long, arg2: StringJS, arg3: StringJS): void
public "stopTriggeredArmorAnim"(arg0: $Entity$$Type, arg1: long, arg2: StringJS, arg3: StringJS): void
public "getRenderProvider"(): any
public "getEnergyStorage"(arg0: $ItemStack$$Type): $EnergyApi$EnergyStorage
public "getEnergyMaxOutput"(arg0: $ItemStack$$Type): long
public "tryUseEnergy"(arg0: $ItemStack$$Type, arg1: long, arg2: $Player$$Type): boolean
public "getStoredEnergy"(arg0: $ItemStack$$Type): long
public static "get"(arg0: $ItemStack$$Type): $Equipable
public "getBoneResetTime"(): double
public "shouldPlayAnimsWhileGamePaused"(): boolean
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "defaultMaxStackSize"(): integer
get "animatableInstanceCache"(): $AnimatableInstanceCache
get "rfUsage"(): integer
get "fuelUsage"(): integer
get "fuelCapacity"(): long
get "speed"(): float
get "perspectiveAware"(): boolean
get "renderProvider"(): any
get "boneResetTime"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JetpackElytraItem$$Type = ($JetpackElytraItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $JetpackElytraItem$$Original = $JetpackElytraItem;}
declare module "rearth.oritech.item.tools.armor.JetpackItem$JetpackUsageUpdatePacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$PacketFlow$$Type} from "net.minecraft.network.protocol.PacketFlow"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$List$$Type} from "java.util.List"
import {$CustomPacketPayload$Type} from "net.minecraft.network.protocol.common.custom.CustomPacketPayload$Type"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$CustomPacketPayload, $CustomPacketPayload$$Interface} from "net.minecraft.network.protocol.common.custom.CustomPacketPayload"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$ServerboundCustomPayloadPacket} from "net.minecraft.network.protocol.common.ServerboundCustomPayloadPacket"
import {$ClientboundCustomPayloadPacket} from "net.minecraft.network.protocol.common.ClientboundCustomPayloadPacket"
import {$ConnectionProtocol$$Type} from "net.minecraft.network.ConnectionProtocol"
import {$CustomPacketPayload$TypeAndCodec$$Type} from "net.minecraft.network.protocol.common.custom.CustomPacketPayload$TypeAndCodec"
import {$CustomPacketPayload$FallbackProvider$$Type} from "net.minecraft.network.protocol.common.custom.CustomPacketPayload$FallbackProvider"
import {$Record} from "java.lang.Record"

export class $JetpackItem$JetpackUsageUpdatePacket extends $Record implements $CustomPacketPayload$$Interface {
static readonly "PACKET_ID": $CustomPacketPayload$Type<($JetpackItem$JetpackUsageUpdatePacket)>

constructor(energyStored: long, fluidType: StringJS, fluidAmount: long)

public "energyStored"(): long
public "fluidAmount"(): long
public "type"(): $CustomPacketPayload$Type<($CustomPacketPayload)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "fluidType"(): StringJS
public static "codec"<B extends $FriendlyByteBuf>(arg0: $CustomPacketPayload$FallbackProvider$$Type<(B)>, arg1: $List$$Type<($CustomPacketPayload$TypeAndCodec$$Type<(B), (never)>)>, arg2: $ConnectionProtocol$$Type, arg3: $PacketFlow$$Type): $StreamCodec<(B), ($CustomPacketPayload)>
public static "codec"<B extends $ByteBuf, T extends $CustomPacketPayload>(arg0: $StreamMemberEncoder$$Type<(B), (T)>, arg1: $StreamDecoder$$Type<(B), (T)>): $StreamCodec<(B), (T)>
public "toVanillaClientbound"(): $ClientboundCustomPayloadPacket
public "toVanillaServerbound"(): $ServerboundCustomPayloadPacket
public static "createType"<T extends $CustomPacketPayload>(arg0: StringJS): $CustomPacketPayload$Type<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JetpackItem$JetpackUsageUpdatePacket$$Type = ({"fluidType"?: StringJS, "energyStored"?: long, "fluidAmount"?: long}) | ([fluidType?: StringJS, energyStored?: long, fluidAmount?: long]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $JetpackItem$JetpackUsageUpdatePacket$$Original = $JetpackItem$JetpackUsageUpdatePacket;}
declare module "rearth.oritech.item.tools.armor.BackstorageExoArmorItem" {
import {$ArmorMaterial$$Type} from "net.minecraft.world.item.ArmorMaterial"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ExoArmorItem} from "rearth.oritech.item.tools.armor.ExoArmorItem"
import {$ItemAttributeModifiers} from "net.minecraft.world.item.component.ItemAttributeModifiers"
import {$List$$Type} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$OritechEnergyItem$$Interface} from "rearth.oritech.item.tools.util.OritechEnergyItem"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Holder$$Type} from "net.minecraft.core.Holder"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$GeoAnimatable$$Type} from "software.bernie.geckolib.animatable.GeoAnimatable"
import {$EquipmentSlot$$Type} from "net.minecraft.world.entity.EquipmentSlot"
import {$Supplier} from "java.util.function.Supplier"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$DispenseItemBehavior} from "net.minecraft.core.dispenser.DispenseItemBehavior"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$ArmorItem$Type$$Type} from "net.minecraft.world.item.ArmorItem$Type"
import {$Map} from "java.util.Map"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Equipable} from "net.minecraft.world.item.Equipable"
import {$EnergyApi$EnergyStorage} from "rearth.oritech.api.energy.EnergyApi$EnergyStorage"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"

export class $BackstorageExoArmorItem extends $ExoArmorItem implements $OritechEnergyItem$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
 "defaultModifiers": $Supplier<($ItemAttributeModifiers)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Holder$$Type<($ArmorMaterial)>, arg1: $ArmorItem$Type$$Type, arg2: $Item$Properties$$Type)

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "inventoryTick"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $Entity$$Type, arg3: integer, arg4: boolean): void
public "getEnergyCapacity"(arg0: $ItemStack$$Type): long
public "getEnergyMaxInput"(arg0: $ItemStack$$Type): long
public "getEnergyMaxOutput"(arg0: $ItemStack$$Type): long
public "isBarVisible"(arg0: $ItemStack$$Type): boolean
public "getBarWidth"(arg0: $ItemStack$$Type): integer
public "getBarColor"(arg0: $ItemStack$$Type): integer
public "getEnergyStorage"(arg0: $ItemStack$$Type): $EnergyApi$EnergyStorage
public "tryUseEnergy"(arg0: $ItemStack$$Type, arg1: long, arg2: $Player$$Type): boolean
public "getStoredEnergy"(arg0: $ItemStack$$Type): long
public static "registerSyncedAnimatable"(arg0: $GeoAnimatable$$Type): void
public static "getOrAssignId"(arg0: $ItemStack$$Type, arg1: $ServerLevel$$Type): long
public static "getId"(arg0: $ItemStack$$Type): long
public static "processEvent"(arg0: $LivingEntity$$Type, arg1: $EquipmentSlot$$Type, arg2: $ItemStack$$Type, arg3: $ItemStack$$Type): void
public static "get"(arg0: $ItemStack$$Type): $Equipable
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BackstorageExoArmorItem$$Type = ($BackstorageExoArmorItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BackstorageExoArmorItem$$Original = $BackstorageExoArmorItem;}
declare module "rearth.oritech.item.tools.armor.JetpackItem" {
import {$ArmorMaterial$$Type} from "net.minecraft.world.item.ArmorMaterial"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ItemAttributeModifiers} from "net.minecraft.world.item.component.ItemAttributeModifiers"
import {$List$$Type} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Holder$$Type} from "net.minecraft.core.Holder"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$GeoAnimatable$$Type} from "software.bernie.geckolib.animatable.GeoAnimatable"
import {$JetpackItem$JetpackUsageUpdatePacket$$Type} from "rearth.oritech.item.tools.armor.JetpackItem$JetpackUsageUpdatePacket"
import {$BaseJetpackItem$$Interface} from "rearth.oritech.item.tools.armor.BaseJetpackItem"
import {$Supplier} from "java.util.function.Supplier"
import {$ArmorItem} from "net.minecraft.world.item.ArmorItem"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$FluidApi$SingleSlotStorage} from "rearth.oritech.api.fluid.FluidApi$SingleSlotStorage"
import {$FluidStack} from "dev.architectury.fluid.FluidStack"
import {$DispenseItemBehavior} from "net.minecraft.core.dispenser.DispenseItemBehavior"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$ArmorItem$Type$$Type} from "net.minecraft.world.item.ArmorItem$Type"
import {$Map} from "java.util.Map"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$GeoRenderProvider$$Type} from "software.bernie.geckolib.animatable.client.GeoRenderProvider"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$AnimatableInstanceCache} from "software.bernie.geckolib.animatable.instance.AnimatableInstanceCache"
import {$GeoItem$$Interface} from "software.bernie.geckolib.animatable.GeoItem"
import {$AnimatableManager$ControllerRegistrar$$Type} from "software.bernie.geckolib.animation.AnimatableManager$ControllerRegistrar"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$Equipable} from "net.minecraft.world.item.Equipable"
import {$EnergyApi$EnergyStorage} from "rearth.oritech.api.energy.EnergyApi$EnergyStorage"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$SerializableDataTicket$$Type} from "software.bernie.geckolib.constant.dataticket.SerializableDataTicket"
import {$RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"

export class $JetpackItem extends $ArmorItem implements $GeoItem$$Interface, $BaseJetpackItem$$Interface {
static "PRESSED_SPACE": boolean
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static "LAST_GROUND_CONTACT": long
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
 "defaultModifiers": $Supplier<($ItemAttributeModifiers)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Holder$$Type<($ArmorMaterial)>, arg1: $ArmorItem$Type$$Type, arg2: $Item$Properties$$Type)

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "getDefaultMaxStackSize"(): integer
public "inventoryTick"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $Entity$$Type, arg3: integer, arg4: boolean): void
public "isValidRepairItem"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): boolean
public "getEnergyCapacity"(arg0: $ItemStack$$Type): long
public static "receiveUsagePacket"(arg0: $JetpackItem$JetpackUsageUpdatePacket$$Type, arg1: $Player$$Type, arg2: $RegistryAccess$$Type): void
public "createGeoRenderer"(arg0: $Consumer$$Type<($GeoRenderProvider)>): void
public "registerControllers"(arg0: $AnimatableManager$ControllerRegistrar$$Type): void
public "getAnimatableInstanceCache"(): $AnimatableInstanceCache
public "getEnergyMaxInput"(arg0: $ItemStack$$Type): long
public "requireUpward"(): boolean
public "getRfUsage"(): integer
public "getFuelUsage"(): integer
public "getFuelCapacity"(): long
public "isBarVisible"(arg0: $ItemStack$$Type): boolean
public "getBarWidth"(arg0: $ItemStack$$Type): integer
public "getBarColor"(arg0: $ItemStack$$Type): integer
public "getSpeed"(): float
public static "registerSyncedAnimatable"(arg0: $GeoAnimatable$$Type): void
public "isPerspectiveAware"(): boolean
public "animatableCacheOverride"(): $AnimatableInstanceCache
public static "getOrAssignId"(arg0: $ItemStack$$Type, arg1: $ServerLevel$$Type): long
public "getTick"(arg0: any): double
public static "getId"(arg0: $ItemStack$$Type): long
public "isValidFuel"(arg0: $Fluid$$Type): boolean
public "tickJetpack"(arg0: $ItemStack$$Type, arg1: $Entity$$Type, arg2: $Level$$Type): void
public "getJetpackBarColor"(arg0: $ItemStack$$Type): integer
public "getJetpackBarStep"(arg0: $ItemStack$$Type): integer
public "addJetpackTooltip"(arg0: $ItemStack$$Type, arg1: $List$$Type<($Component$$Type)>, arg2: boolean): void
public "requireTakeoff"(): boolean
public "tryUseFluid"(arg0: $ItemStack$$Type): boolean
public "getStoredFluid"(arg0: $ItemStack$$Type): $FluidStack
public "getFluidStorage"(arg0: $ItemStack$$Type): $FluidApi$SingleSlotStorage
public "getAnimData"<D>(arg0: long, arg1: $SerializableDataTicket$$Type<(D)>): D
public "setAnimData"<D>(arg0: $Entity$$Type, arg1: long, arg2: $SerializableDataTicket$$Type<(D)>, arg3: D): void
public "syncAnimData"<D>(arg0: long, arg1: $SerializableDataTicket$$Type<(D)>, arg2: D, arg3: $Entity$$Type): void
public "triggerAnim"<D>(arg0: $Entity$$Type, arg1: long, arg2: StringJS, arg3: StringJS): void
public "stopTriggeredAnim"(arg0: $Entity$$Type, arg1: long, arg2: StringJS, arg3: StringJS): void
public "triggerArmorAnim"(arg0: $Entity$$Type, arg1: long, arg2: StringJS, arg3: StringJS): void
public "stopTriggeredArmorAnim"(arg0: $Entity$$Type, arg1: long, arg2: StringJS, arg3: StringJS): void
public "getRenderProvider"(): any
public "getEnergyStorage"(arg0: $ItemStack$$Type): $EnergyApi$EnergyStorage
public "getEnergyMaxOutput"(arg0: $ItemStack$$Type): long
public "tryUseEnergy"(arg0: $ItemStack$$Type, arg1: long, arg2: $Player$$Type): boolean
public "getStoredEnergy"(arg0: $ItemStack$$Type): long
public static "get"(arg0: $ItemStack$$Type): $Equipable
public "getBoneResetTime"(): double
public "shouldPlayAnimsWhileGamePaused"(): boolean
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "defaultMaxStackSize"(): integer
get "animatableInstanceCache"(): $AnimatableInstanceCache
get "rfUsage"(): integer
get "fuelUsage"(): integer
get "fuelCapacity"(): long
get "speed"(): float
get "perspectiveAware"(): boolean
get "renderProvider"(): any
get "boneResetTime"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JetpackItem$$Type = ($JetpackItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $JetpackItem$$Original = $JetpackItem;}
declare module "rearth.oritech.item.tools.harvesting.ChainsawItem" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$OritechEnergyItem$$Interface} from "rearth.oritech.item.tools.util.OritechEnergyItem"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$AxeItem} from "net.minecraft.world.item.AxeItem"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$EnergyApi$EnergyStorage} from "rearth.oritech.api.energy.EnergyApi$EnergyStorage"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $ChainsawItem extends $AxeItem implements $OritechEnergyItem$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static "STRIPPABLES": $Map<($Block), ($Block)>
static readonly "BAR_STEP_COUNT": integer
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Tier$$Type, arg1: $Item$Properties$$Type)

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "mineBlock"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $BlockState$$Type, arg3: $BlockPos$$Type, arg4: $LivingEntity$$Type): boolean
public "isEnchantable"(arg0: $ItemStack$$Type): boolean
public "isValidRepairItem"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): boolean
public "shouldCauseReequipAnimation"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: boolean): boolean
public "shouldCauseBlockBreakReset"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): boolean
public "getEnergyCapacity"(arg0: $ItemStack$$Type): long
public "getEnergyMaxInput"(arg0: $ItemStack$$Type): long
public "allowComponentsUpdateAnimation"(arg0: $Player$$Type, arg1: $InteractionHand$$Type, arg2: $ItemStack$$Type, arg3: $ItemStack$$Type): boolean
public "allowContinuingBlockBreaking"(arg0: $Player$$Type, arg1: $ItemStack$$Type, arg2: $ItemStack$$Type): boolean
public "isBarVisible"(arg0: $ItemStack$$Type): boolean
public "getBarWidth"(arg0: $ItemStack$$Type): integer
public "getBarColor"(arg0: $ItemStack$$Type): integer
public "getDestroySpeed"(arg0: $ItemStack$$Type, arg1: $BlockState$$Type): float
public "getEnergyStorage"(arg0: $ItemStack$$Type): $EnergyApi$EnergyStorage
public "getEnergyMaxOutput"(arg0: $ItemStack$$Type): long
public "tryUseEnergy"(arg0: $ItemStack$$Type, arg1: long, arg2: $Player$$Type): boolean
public "getStoredEnergy"(arg0: $ItemStack$$Type): long
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChainsawItem$$Type = ($ChainsawItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChainsawItem$$Original = $ChainsawItem;}
declare module "rearth.oritech.item.tools.PortableLaserItem" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$OritechEnergyItem$$Interface} from "rearth.oritech.item.tools.util.OritechEnergyItem"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$GeoAnimatable$$Type} from "software.bernie.geckolib.animatable.GeoAnimatable"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$PortableLaserItem$LaserPlayerUsePacket$$Type} from "rearth.oritech.item.tools.PortableLaserItem$LaserPlayerUsePacket"
import {$Map} from "java.util.Map"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$GeoRenderProvider$$Type} from "software.bernie.geckolib.animatable.client.GeoRenderProvider"
import {$HitResult} from "net.minecraft.world.phys.HitResult"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$AnimatableInstanceCache} from "software.bernie.geckolib.animatable.instance.AnimatableInstanceCache"
import {$GeoItem$$Interface} from "software.bernie.geckolib.animatable.GeoItem"
import {$AnimatableManager$ControllerRegistrar$$Type} from "software.bernie.geckolib.animation.AnimatableManager$ControllerRegistrar"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$Enchantment$$Type} from "net.minecraft.world.item.enchantment.Enchantment"
import {$EnergyApi$EnergyStorage} from "rearth.oritech.api.energy.EnergyApi$EnergyStorage"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$SerializableDataTicket$$Type} from "software.bernie.geckolib.constant.dataticket.SerializableDataTicket"
import {$RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"

export class $PortableLaserItem extends $Item implements $OritechEnergyItem$$Interface, $GeoItem$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static "lastSingleShot": long
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "ACTION_COOLDOWN": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "isEnchantable"(arg0: $ItemStack$$Type): boolean
public "getEnchantmentValue"(): integer
public static "getEnchantmentLevel"(arg0: $ItemStack$$Type, arg1: $ResourceKey$$Type<($Enchantment)>): integer
public "shouldCauseReequipAnimation"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: boolean): boolean
public "shouldCauseBlockBreakReset"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): boolean
public "getEnergyCapacity"(arg0: $ItemStack$$Type): long
public static "receiveUsePacket"(arg0: $PortableLaserItem$LaserPlayerUsePacket$$Type, arg1: $Player$$Type, arg2: $RegistryAccess$$Type): void
public "createGeoRenderer"(arg0: $Consumer$$Type<($GeoRenderProvider)>): void
public "registerControllers"(arg0: $AnimatableManager$ControllerRegistrar$$Type): void
public "getAnimatableInstanceCache"(): $AnimatableInstanceCache
public static "getPlayerTargetRay"(arg0: $Player$$Type): $HitResult
public "getEnergyMaxInput"(arg0: $ItemStack$$Type): long
public "getEnergyMaxOutput"(arg0: $ItemStack$$Type): long
public "isMiningEnabled"(arg0: $ItemStack$$Type): boolean
public "setMiningEnabled"(arg0: $ItemStack$$Type, arg1: boolean): void
public "allowComponentsUpdateAnimation"(arg0: $Player$$Type, arg1: $InteractionHand$$Type, arg2: $ItemStack$$Type, arg3: $ItemStack$$Type): boolean
public "allowContinuingBlockBreaking"(arg0: $Player$$Type, arg1: $ItemStack$$Type, arg2: $ItemStack$$Type): boolean
public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "isBarVisible"(arg0: $ItemStack$$Type): boolean
public "getBarWidth"(arg0: $ItemStack$$Type): integer
public "getBarColor"(arg0: $ItemStack$$Type): integer
public static "onUseTick"(arg0: $Player$$Type): void
public "getEnergyStorage"(arg0: $ItemStack$$Type): $EnergyApi$EnergyStorage
public "tryUseEnergy"(arg0: $ItemStack$$Type, arg1: long, arg2: $Player$$Type): boolean
public "getStoredEnergy"(arg0: $ItemStack$$Type): long
public static "registerSyncedAnimatable"(arg0: $GeoAnimatable$$Type): void
public "isPerspectiveAware"(): boolean
public "animatableCacheOverride"(): $AnimatableInstanceCache
public static "getOrAssignId"(arg0: $ItemStack$$Type, arg1: $ServerLevel$$Type): long
public "getTick"(arg0: any): double
public static "getId"(arg0: $ItemStack$$Type): long
public "getAnimData"<D>(arg0: long, arg1: $SerializableDataTicket$$Type<(D)>): D
public "setAnimData"<D>(arg0: $Entity$$Type, arg1: long, arg2: $SerializableDataTicket$$Type<(D)>, arg3: D): void
public "syncAnimData"<D>(arg0: long, arg1: $SerializableDataTicket$$Type<(D)>, arg2: D, arg3: $Entity$$Type): void
public "triggerAnim"<D>(arg0: $Entity$$Type, arg1: long, arg2: StringJS, arg3: StringJS): void
public "stopTriggeredAnim"(arg0: $Entity$$Type, arg1: long, arg2: StringJS, arg3: StringJS): void
public "triggerArmorAnim"(arg0: $Entity$$Type, arg1: long, arg2: StringJS, arg3: StringJS): void
public "stopTriggeredArmorAnim"(arg0: $Entity$$Type, arg1: long, arg2: StringJS, arg3: StringJS): void
public "getRenderProvider"(): any
public "getBoneResetTime"(): double
public "shouldPlayAnimsWhileGamePaused"(): boolean
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "enchantmentValue"(): integer
get "animatableInstanceCache"(): $AnimatableInstanceCache
get "perspectiveAware"(): boolean
get "renderProvider"(): any
get "boneResetTime"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PortableLaserItem$$Type = ($PortableLaserItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PortableLaserItem$$Original = $PortableLaserItem;}
declare module "rearth.oritech.item.tools.harvesting.PromethiumPickaxeItem" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ItemAttributeModifiers} from "net.minecraft.world.item.component.ItemAttributeModifiers"
import {$List, $List$$Type} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$IntValue$$Type} from "dev.architectury.utils.value.IntValue"
import {$EventResult} from "dev.architectury.event.EventResult"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$GeoAnimatable$$Type} from "software.bernie.geckolib.animatable.GeoAnimatable"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Map} from "java.util.Map"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$GeoRenderProvider$$Type} from "software.bernie.geckolib.animatable.client.GeoRenderProvider"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$AnimatableInstanceCache} from "software.bernie.geckolib.animatable.instance.AnimatableInstanceCache"
import {$GeoItem$$Interface} from "software.bernie.geckolib.animatable.GeoItem"
import {$AnimatableManager$ControllerRegistrar$$Type} from "software.bernie.geckolib.animation.AnimatableManager$ControllerRegistrar"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$ClientLevel$$Type} from "net.minecraft.client.multiplayer.ClientLevel"
import {$TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$DiggerItem} from "net.minecraft.world.item.DiggerItem"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$SerializableDataTicket$$Type} from "software.bernie.geckolib.constant.dataticket.SerializableDataTicket"

export class $PromethiumPickaxeItem extends $DiggerItem implements $GeoItem$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Tier$$Type, arg1: $TagKey$$Type<($Block)>, arg2: $Item$Properties$$Type)

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "mineBlock"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $BlockState$$Type, arg3: $BlockPos$$Type, arg4: $LivingEntity$$Type): boolean
public "isEnchantable"(arg0: $ItemStack$$Type): boolean
public "isValidRepairItem"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): boolean
public static "createPromethiumAttributes"(arg0: $Tier$$Type, arg1: float, arg2: float, arg3: float): $ItemAttributeModifiers
public static "preMine"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $ServerPlayer$$Type, arg4: $IntValue$$Type): $EventResult
public "createGeoRenderer"(arg0: $Consumer$$Type<($GeoRenderProvider)>): void
public "registerControllers"(arg0: $AnimatableManager$ControllerRegistrar$$Type): void
public "getAnimatableInstanceCache"(): $AnimatableInstanceCache
public "onHeldTick"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $ClientLevel$$Type): void
public static "getOffsetBlocks"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $BlockPos$$Type): $List<($BlockPos)>
public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public static "registerSyncedAnimatable"(arg0: $GeoAnimatable$$Type): void
public "isPerspectiveAware"(): boolean
public "animatableCacheOverride"(): $AnimatableInstanceCache
public static "getOrAssignId"(arg0: $ItemStack$$Type, arg1: $ServerLevel$$Type): long
public "getTick"(arg0: any): double
public static "getId"(arg0: $ItemStack$$Type): long
public "getAnimData"<D>(arg0: long, arg1: $SerializableDataTicket$$Type<(D)>): D
public "setAnimData"<D>(arg0: $Entity$$Type, arg1: long, arg2: $SerializableDataTicket$$Type<(D)>, arg3: D): void
public "syncAnimData"<D>(arg0: long, arg1: $SerializableDataTicket$$Type<(D)>, arg2: D, arg3: $Entity$$Type): void
public "triggerAnim"<D>(arg0: $Entity$$Type, arg1: long, arg2: StringJS, arg3: StringJS): void
public "stopTriggeredAnim"(arg0: $Entity$$Type, arg1: long, arg2: StringJS, arg3: StringJS): void
public "triggerArmorAnim"(arg0: $Entity$$Type, arg1: long, arg2: StringJS, arg3: StringJS): void
public "stopTriggeredArmorAnim"(arg0: $Entity$$Type, arg1: long, arg2: StringJS, arg3: StringJS): void
public "getRenderProvider"(): any
public "getBoneResetTime"(): double
public "shouldPlayAnimsWhileGamePaused"(): boolean
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "animatableInstanceCache"(): $AnimatableInstanceCache
get "perspectiveAware"(): boolean
get "renderProvider"(): any
get "boneResetTime"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PromethiumPickaxeItem$$Type = ($PromethiumPickaxeItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PromethiumPickaxeItem$$Original = $PromethiumPickaxeItem;}
declare module "rearth.oritech.item.tools.WeedKiller" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"

export class $WeedKiller extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WeedKiller$$Type = ($WeedKiller);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WeedKiller$$Original = $WeedKiller;}
declare module "rearth.oritech.item.tools.util.ArmorEventHandler" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$EquipmentSlot$$Type} from "net.minecraft.world.entity.EquipmentSlot"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export interface $ArmorEventHandler$$Interface {
}

export class $ArmorEventHandler implements $ArmorEventHandler$$Interface {
 "onEquipped"(arg0: $Player$$Type, arg1: $ItemStack$$Type): void
 "onUnequipped"(arg0: $Player$$Type, arg1: $ItemStack$$Type): void
static "processEvent"(arg0: $LivingEntity$$Type, arg1: $EquipmentSlot$$Type, arg2: $ItemStack$$Type, arg3: $ItemStack$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArmorEventHandler$$Type = ($ArmorEventHandler);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ArmorEventHandler$$Original = $ArmorEventHandler;}
declare module "rearth.oritech.item.tools.PortableLaserItem$LaserPlayerUsePacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$PacketFlow$$Type} from "net.minecraft.network.protocol.PacketFlow"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$List$$Type} from "java.util.List"
import {$CustomPacketPayload$Type} from "net.minecraft.network.protocol.common.custom.CustomPacketPayload$Type"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$CustomPacketPayload, $CustomPacketPayload$$Interface} from "net.minecraft.network.protocol.common.custom.CustomPacketPayload"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$ServerboundCustomPayloadPacket} from "net.minecraft.network.protocol.common.ServerboundCustomPayloadPacket"
import {$ClientboundCustomPayloadPacket} from "net.minecraft.network.protocol.common.ClientboundCustomPayloadPacket"
import {$ConnectionProtocol$$Type} from "net.minecraft.network.ConnectionProtocol"
import {$CustomPacketPayload$TypeAndCodec$$Type} from "net.minecraft.network.protocol.common.custom.CustomPacketPayload$TypeAndCodec"
import {$CustomPacketPayload$FallbackProvider$$Type} from "net.minecraft.network.protocol.common.custom.CustomPacketPayload$FallbackProvider"
import {$Record} from "java.lang.Record"

export class $PortableLaserItem$LaserPlayerUsePacket extends $Record implements $CustomPacketPayload$$Interface {
static readonly "PACKET_ID": $CustomPacketPayload$Type<($PortableLaserItem$LaserPlayerUsePacket)>

constructor()

public "type"(): $CustomPacketPayload$Type<($CustomPacketPayload)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public static "codec"<B extends $FriendlyByteBuf>(arg0: $CustomPacketPayload$FallbackProvider$$Type<(B)>, arg1: $List$$Type<($CustomPacketPayload$TypeAndCodec$$Type<(B), (never)>)>, arg2: $ConnectionProtocol$$Type, arg3: $PacketFlow$$Type): $StreamCodec<(B), ($CustomPacketPayload)>
public static "codec"<B extends $ByteBuf, T extends $CustomPacketPayload>(arg0: $StreamMemberEncoder$$Type<(B), (T)>, arg1: $StreamDecoder$$Type<(B), (T)>): $StreamCodec<(B), (T)>
public "toVanillaClientbound"(): $ClientboundCustomPayloadPacket
public "toVanillaServerbound"(): $ServerboundCustomPayloadPacket
public static "createType"<T extends $CustomPacketPayload>(arg0: StringJS): $CustomPacketPayload$Type<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PortableLaserItem$LaserPlayerUsePacket$$Type = ({}) | ([]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PortableLaserItem$LaserPlayerUsePacket$$Original = $PortableLaserItem$LaserPlayerUsePacket;}
declare module "rearth.oritech.item.tools.Wrench$Wrenchable" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $Wrench$Wrenchable$$Interface {
}

export class $Wrench$Wrenchable implements $Wrench$Wrenchable$$Interface {
 "onWrenchUseNeighbor"(arg0: $BlockState$$Type, arg1: $BlockState$$Type, arg2: $Level$$Type, arg3: $BlockPos$$Type, arg4: $BlockPos$$Type, arg5: $Direction$$Type, arg6: $Player$$Type, arg7: $InteractionHand$$Type): $InteractionResult
 "onWrenchUse"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type, arg4: $InteractionHand$$Type): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Wrench$Wrenchable$$Type = ($Wrench$Wrenchable);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Wrench$Wrenchable$$Original = $Wrench$Wrenchable;}
declare module "rearth.oritech.item.tools.armor.JetpackExoElytraItem" {
import {$BackstorageExoArmorItem} from "rearth.oritech.item.tools.armor.BackstorageExoArmorItem"
import {$ArmorMaterial$$Type} from "net.minecraft.world.item.ArmorMaterial"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ItemAttributeModifiers} from "net.minecraft.world.item.component.ItemAttributeModifiers"
import {$List$$Type} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Holder$$Type} from "net.minecraft.core.Holder"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$GeoAnimatable$$Type} from "software.bernie.geckolib.animatable.GeoAnimatable"
import {$BaseJetpackItem$$Interface} from "rearth.oritech.item.tools.armor.BaseJetpackItem"
import {$EquipmentSlot$$Type} from "net.minecraft.world.entity.EquipmentSlot"
import {$Supplier} from "java.util.function.Supplier"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$FluidApi$SingleSlotStorage} from "rearth.oritech.api.fluid.FluidApi$SingleSlotStorage"
import {$FluidStack} from "dev.architectury.fluid.FluidStack"
import {$DispenseItemBehavior} from "net.minecraft.core.dispenser.DispenseItemBehavior"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$ArmorItem$Type$$Type} from "net.minecraft.world.item.ArmorItem$Type"
import {$Map} from "java.util.Map"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$Equipable} from "net.minecraft.world.item.Equipable"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"

export class $JetpackExoElytraItem extends $BackstorageExoArmorItem implements $BaseJetpackItem$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
 "defaultModifiers": $Supplier<($ItemAttributeModifiers)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Holder$$Type<($ArmorMaterial)>, arg1: $ArmorItem$Type$$Type, arg2: $Item$Properties$$Type)

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "inventoryTick"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $Entity$$Type, arg3: integer, arg4: boolean): void
public "getEnergyCapacity"(arg0: $ItemStack$$Type): long
public "getEnergyMaxInput"(arg0: $ItemStack$$Type): long
public "requireUpward"(): boolean
public "getRfUsage"(): integer
public "getFuelUsage"(): integer
public "getFuelCapacity"(): long
public "requireTakeoff"(): boolean
public "useCustomElytra"(arg0: $LivingEntity$$Type, arg1: $ItemStack$$Type, arg2: boolean): boolean
public "getModel"(): $ResourceLocation
public "getBarWidth"(arg0: $ItemStack$$Type): integer
public "getBarColor"(arg0: $ItemStack$$Type): integer
public "getSpeed"(): float
public "canElytraFly"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type): boolean
public "elytraFlightTick"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type, arg2: integer): boolean
public "isValidFuel"(arg0: $Fluid$$Type): boolean
public "tickJetpack"(arg0: $ItemStack$$Type, arg1: $Entity$$Type, arg2: $Level$$Type): void
public "getJetpackBarColor"(arg0: $ItemStack$$Type): integer
public "getJetpackBarStep"(arg0: $ItemStack$$Type): integer
public "addJetpackTooltip"(arg0: $ItemStack$$Type, arg1: $List$$Type<($Component$$Type)>, arg2: boolean): void
public "tryUseFluid"(arg0: $ItemStack$$Type): boolean
public "getStoredFluid"(arg0: $ItemStack$$Type): $FluidStack
public "getFluidStorage"(arg0: $ItemStack$$Type): $FluidApi$SingleSlotStorage
public static "registerSyncedAnimatable"(arg0: $GeoAnimatable$$Type): void
public static "getOrAssignId"(arg0: $ItemStack$$Type, arg1: $ServerLevel$$Type): long
public static "getId"(arg0: $ItemStack$$Type): long
public static "processEvent"(arg0: $LivingEntity$$Type, arg1: $EquipmentSlot$$Type, arg2: $ItemStack$$Type, arg3: $ItemStack$$Type): void
public static "get"(arg0: $ItemStack$$Type): $Equipable
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "rfUsage"(): integer
get "fuelUsage"(): integer
get "fuelCapacity"(): long
get "model"(): $ResourceLocation
get "speed"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JetpackExoElytraItem$$Type = ($JetpackExoElytraItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $JetpackExoElytraItem$$Original = $JetpackExoElytraItem;}
declare module "rearth.oritech.item.tools.LaserTargetDesignator" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"

export class $LaserTargetDesignator extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LaserTargetDesignator$$Type = ($LaserTargetDesignator);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LaserTargetDesignator$$Original = $LaserTargetDesignator;}
