declare module "blusunrize.immersiveengineering.api.tool.conveyor.ConveyorHandler$ConveyorDirection" {
import {$Enum} from "java.lang.Enum"

export class $ConveyorHandler$ConveyorDirection extends $Enum<($ConveyorHandler$ConveyorDirection)> {
static readonly "DOWN": $ConveyorHandler$ConveyorDirection
static readonly "HORIZONTAL": $ConveyorHandler$ConveyorDirection
static readonly "UP": $ConveyorHandler$ConveyorDirection

public static "values"(): ($ConveyorHandler$ConveyorDirection)[]
public static "valueOf"(arg0: StringJS): $ConveyorHandler$ConveyorDirection
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConveyorHandler$ConveyorDirection$$Type = (("horizontal") | ("up") | ("down"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ConveyorHandler$ConveyorDirection$$Original = $ConveyorHandler$ConveyorDirection;}
declare module "blusunrize.immersiveengineering.api.tool.IDrillHead" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ImmutableList} from "com.google.common.collect.ImmutableList"
import {$BlockPos} from "net.minecraft.core.BlockPos"
import {$HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$Tier} from "net.minecraft.world.item.Tier"

export interface $IDrillHead$$Interface {
}

export class $IDrillHead implements $IDrillHead$$Interface {
 "getMiningSpeed"(arg0: $ItemStack$$Type): float
 "getAttackDamage"(arg0: $ItemStack$$Type): float
 "getHeadDamage"(arg0: $ItemStack$$Type): integer
 "getMaximumHeadDamage"(arg0: $ItemStack$$Type): integer
 "damageHead"(arg0: $ItemStack$$Type, arg1: integer): void
 "getMiningLevel"(arg0: $ItemStack$$Type): $Tier
 "beforeBlockbreak"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: $Player$$Type): boolean
 "getExtraBlocksDug"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $Player$$Type, arg3: $HitResult$$Type): $ImmutableList<($BlockPos)>
 "afterBlockbreak"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: $Player$$Type): void
 "getDrillTexture"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDrillHead$$Type = ($IDrillHead);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IDrillHead$$Original = $IDrillHead;}
declare module "blusunrize.immersiveengineering.api.tool.IConfigurableTool$ToolConfig$ToolConfigBoolean" {
import {$IConfigurableTool$ToolConfig} from "blusunrize.immersiveengineering.api.tool.IConfigurableTool$ToolConfig"

export class $IConfigurableTool$ToolConfig$ToolConfigBoolean extends $IConfigurableTool$ToolConfig {
 "x": integer
 "name": StringJS
 "y": integer
 "value": boolean

constructor(arg0: StringJS, arg1: integer, arg2: integer, arg3: boolean)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IConfigurableTool$ToolConfig$ToolConfigBoolean$$Type = ($IConfigurableTool$ToolConfig$ToolConfigBoolean);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IConfigurableTool$ToolConfig$ToolConfigBoolean$$Original = $IConfigurableTool$ToolConfig$ToolConfigBoolean;}
declare module "blusunrize.immersiveengineering.api.tool.upgrade.UpgradeEffect" {
import {$PrevSlot} from "blusunrize.immersiveengineering.api.tool.upgrade.PrevSlot"
import {$UpgradeData$UpgradeEntry} from "blusunrize.immersiveengineering.api.tool.upgrade.UpgradeData$UpgradeEntry"
import {$Cooldown} from "blusunrize.immersiveengineering.api.tool.upgrade.Cooldown"
import {$Unit} from "com.mojang.datafixers.util.Unit"
import {$ByteBuf, $ByteBuf$$Type} from "io.netty.buffer.ByteBuf"
import {$DualCodec, $DualCodec$$Type} from "malte0811.dualcodecs.DualCodec"
import {$Record} from "java.lang.Record"

export class $UpgradeEffect<T> extends $Record {
static readonly "SCOPE": $UpgradeEffect<($Unit)>
static readonly "ELECTRO": $UpgradeEffect<($Unit)>
static readonly "FOCUS": $UpgradeEffect<($Unit)>
static readonly "SPAREBLADES": $UpgradeEffect<($Unit)>
static readonly "MELEE": $UpgradeEffect<(float)>
static readonly "NOISE": $UpgradeEffect<(float)>
static readonly "INDUCTION": $UpgradeEffect<($Unit)>
static readonly "WATERPROOF": $UpgradeEffect<($Unit)>
static readonly "FORTUNE": $UpgradeEffect<($Unit)>
static readonly "NERF": $UpgradeEffect<($Unit)>
static readonly "SPEED": $UpgradeEffect<(float)>
static readonly "LUCK": $UpgradeEffect<(float)>
static readonly "MACE_ATTACK": $UpgradeEffect<($Unit)>
static readonly "CAPACITY": $UpgradeEffect<(integer)>
static readonly "BARREL_SNUB": $UpgradeEffect<($Unit)>
static readonly "BULLETS": $UpgradeEffect<(integer)>
static readonly "INSULATED": $UpgradeEffect<($Unit)>
static readonly "OILED": $UpgradeEffect<($Unit)>
static readonly "ANTENNA": $UpgradeEffect<($Unit)>
static readonly "FLASH": $UpgradeEffect<($Cooldown)>
static readonly "DAMAGE": $UpgradeEffect<(integer)>
static readonly "MAGNET": $UpgradeEffect<($PrevSlot)>
static readonly "SHOCK": $UpgradeEffect<($Cooldown)>
static readonly "FANCY_ANIMATION": $UpgradeEffect<($Unit)>
static readonly "COOLDOWN": $UpgradeEffect<(float)>
static readonly "SLOPE_MODIFIER": $UpgradeEffect<(float)>
static readonly "MULTITANK": $UpgradeEffect<($Unit)>
static readonly "TESLA": $UpgradeEffect<($Unit)>

constructor(name: StringJS, valueCodec: $DualCodec$$Type<($ByteBuf$$Type), (T)>, defaultValue: T)

public "entryCodec"(): $DualCodec<($ByteBuf), ($UpgradeData$UpgradeEntry<(never)>)>
public "name"(): StringJS
public static "get"(arg0: StringJS): $UpgradeEffect<(never)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "defaultValue"(): T
public "valueCodec"(): $DualCodec<($ByteBuf), (T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UpgradeEffect$$Type<T> = ({"valueCodec"?: $DualCodec$$Type<($ByteBuf$$Type), (T)>, "name"?: StringJS, "defaultValue"?: T}) | ([valueCodec?: $DualCodec$$Type<($ByteBuf$$Type), (T)>, name?: StringJS, defaultValue?: T]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $UpgradeEffect$$Original<T> = $UpgradeEffect<(T)>;}
declare module "blusunrize.immersiveengineering.api.tool.upgrade.Cooldown" {
import {$DualCodec} from "malte0811.dualcodecs.DualCodec"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$Record} from "java.lang.Record"

export class $Cooldown extends $Record {
static readonly "CODECS": $DualCodec<($ByteBuf), ($Cooldown)>
static readonly "IDLE": $Cooldown

constructor(remainingCooldown: integer)

public "remainingCooldown"(): integer
public "tick"(): $Cooldown
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "isOnCooldown"(): boolean
get "onCooldown"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Cooldown$$Type = ({"remainingCooldown"?: integer}) | ([remainingCooldown?: integer]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Cooldown$$Original = $Cooldown;}
declare module "blusunrize.immersiveengineering.api.tool.LogicCircuitHandler$LogicCircuitInstruction" {
import {$LogicCircuitHandler$LogicCircuitRegister, $LogicCircuitHandler$LogicCircuitRegister$$Type} from "blusunrize.immersiveengineering.api.tool.LogicCircuitHandler$LogicCircuitRegister"
import {$LogicCircuitHandler$ILogicCircuitHandler$$Type} from "blusunrize.immersiveengineering.api.tool.LogicCircuitHandler$ILogicCircuitHandler"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Component} from "net.minecraft.network.chat.Component"
import {$LogicCircuitHandler$LogicCircuitOperator, $LogicCircuitHandler$LogicCircuitOperator$$Type} from "blusunrize.immersiveengineering.api.tool.LogicCircuitHandler$LogicCircuitOperator"
import {$DualCodec} from "malte0811.dualcodecs.DualCodec"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"

export class $LogicCircuitHandler$LogicCircuitInstruction {
static readonly "CODECS": $DualCodec<($ByteBuf), ($LogicCircuitHandler$LogicCircuitInstruction)>

constructor(arg0: $LogicCircuitHandler$LogicCircuitOperator$$Type, arg1: $LogicCircuitHandler$LogicCircuitRegister$$Type, arg2: ($LogicCircuitHandler$LogicCircuitRegister$$Type)[])

public "getFormattedString"(): $Component
public "getOutput"(): $LogicCircuitHandler$LogicCircuitRegister
public "getInputs"(): ($LogicCircuitHandler$LogicCircuitRegister)[]
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "apply"(arg0: $LogicCircuitHandler$ILogicCircuitHandler$$Type): void
public static "deserialize"(arg0: $CompoundTag$$Type): $LogicCircuitHandler$LogicCircuitInstruction
public "serialize"(): $CompoundTag
public "getOperator"(): $LogicCircuitHandler$LogicCircuitOperator
get "formattedString"(): $Component
get "output"(): $LogicCircuitHandler$LogicCircuitRegister
get "inputs"(): ($LogicCircuitHandler$LogicCircuitRegister)[]
get "operator"(): $LogicCircuitHandler$LogicCircuitOperator
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LogicCircuitHandler$LogicCircuitInstruction$$Type = ($LogicCircuitHandler$LogicCircuitInstruction);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LogicCircuitHandler$LogicCircuitInstruction$$Original = $LogicCircuitHandler$LogicCircuitInstruction;}
declare module "blusunrize.immersiveengineering.api.tool.LogicCircuitHandler$LogicCircuitOperator" {
import {$Enum} from "java.lang.Enum"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$DualCodec} from "malte0811.dualcodecs.DualCodec"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"

export class $LogicCircuitHandler$LogicCircuitOperator extends $Enum<($LogicCircuitHandler$LogicCircuitOperator)> {
static readonly "NOR": $LogicCircuitHandler$LogicCircuitOperator
static readonly "XNOR": $LogicCircuitHandler$LogicCircuitOperator
static readonly "CODECS": $DualCodec<($ByteBuf), ($LogicCircuitHandler$LogicCircuitOperator)>
static readonly "IMPLY": $LogicCircuitHandler$LogicCircuitOperator
static readonly "NOT": $LogicCircuitHandler$LogicCircuitOperator
static readonly "SET": $LogicCircuitHandler$LogicCircuitOperator
static readonly "OR": $LogicCircuitHandler$LogicCircuitOperator
static readonly "TOTAL_MAX_INPUTS": integer
static readonly "AND": $LogicCircuitHandler$LogicCircuitOperator
static readonly "NIMPLY": $LogicCircuitHandler$LogicCircuitOperator
static readonly "XOR": $LogicCircuitHandler$LogicCircuitOperator
static readonly "NAND": $LogicCircuitHandler$LogicCircuitOperator

public "getComplexity"(): integer
public static "getByString"(arg0: StringJS): $LogicCircuitHandler$LogicCircuitOperator
public "getDescription"(): $MutableComponent
public static "values"(): ($LogicCircuitHandler$LogicCircuitOperator)[]
public static "valueOf"(arg0: StringJS): $LogicCircuitHandler$LogicCircuitOperator
public "apply"(arg0: (boolean)[]): boolean
public "getArgumentCount"(): integer
get "complexity"(): integer
get "description"(): $MutableComponent
get "argumentCount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LogicCircuitHandler$LogicCircuitOperator$$Type = (("set") | ("not") | ("or") | ("and") | ("xor") | ("nor") | ("nand") | ("xnor") | ("imply") | ("nimply"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LogicCircuitHandler$LogicCircuitOperator$$Original = $LogicCircuitHandler$LogicCircuitOperator;}
declare module "blusunrize.immersiveengineering.api.tool.conveyor.IConveyorModelRender$RenderContext" {
import {$IConveyorType, $IConveyorType$$Type} from "blusunrize.immersiveengineering.api.tool.conveyor.IConveyorType"
import {$IConveyorBelt, $IConveyorBelt$$Type} from "blusunrize.immersiveengineering.api.tool.conveyor.IConveyorBelt"
import {$Direction} from "net.minecraft.core.Direction"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$ConveyorHandler$ConveyorDirection} from "blusunrize.immersiveengineering.api.tool.conveyor.ConveyorHandler$ConveyorDirection"
import {$Record} from "java.lang.Record"

export class $IConveyorModelRender$RenderContext<T extends $IConveyorBelt> extends $Record {
constructor(type: $IConveyorType$$Type<(T)>, instance: T, coverFallback: $Block$$Type)

public "getConveyorDirection"(): $ConveyorHandler$ConveyorDirection
public "getCover"(): $Block
public "getFacing"(): $Direction
public "coverFallback"(): $Block
public "type"(): $IConveyorType<(T)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "instance"(): T
public "isActiveOr"(arg0: boolean): boolean
get "conveyorDirection"(): $ConveyorHandler$ConveyorDirection
get "cover"(): $Block
get "facing"(): $Direction
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IConveyorModelRender$RenderContext$$Type<T> = ({"type"?: $IConveyorType$$Type<(T)>, "coverFallback"?: $Block$$Type, "instance"?: T}) | ([type?: $IConveyorType$$Type<(T)>, coverFallback?: $Block$$Type, instance?: T]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IConveyorModelRender$RenderContext$$Original<T> = $IConveyorModelRender$RenderContext<(T)>;}
declare module "blusunrize.immersiveengineering.api.tool.upgrade.IUpgradeableTool" {
import {$Slot} from "net.minecraft.world.inventory.Slot"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$AbstractContainerMenu$$Type} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$UpgradeData} from "blusunrize.immersiveengineering.api.tool.upgrade.UpgradeData"
import {$IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"
import {$RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"

export interface $IUpgradeableTool$$Interface {
}

export class $IUpgradeableTool implements $IUpgradeableTool$$Interface {
 "removeUpgrade"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $ItemStack$$Type): void
 "finishUpgradeRecalculation"(arg0: $ItemStack$$Type, arg1: $RegistryAccess$$Type): void
 "removeFromWorkbench"(arg0: $Player$$Type, arg1: $ItemStack$$Type): void
 "canModify"(arg0: $ItemStack$$Type): boolean
 "getWorkbenchSlots"(arg0: $AbstractContainerMenu$$Type, arg1: $ItemStack$$Type, arg2: $Level$$Type, arg3: $Supplier$$Type<($Player$$Type)>, arg4: $IItemHandler$$Type): ($Slot)[]
 "clearUpgrades"(arg0: $ItemStack$$Type): void
 "recalculateUpgrades"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $Player$$Type): void
 "canTakeFromWorkbench"(arg0: $ItemStack$$Type): boolean
 "getUpgradeAfterRemoval"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): $ItemStack
 "getUpgrades"(arg0: $ItemStack$$Type): $UpgradeData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IUpgradeableTool$$Type = ($IUpgradeableTool);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IUpgradeableTool$$Original = $IUpgradeableTool;}
declare module "blusunrize.immersiveengineering.api.tool.BulletHandler$CodecsAndDefault" {
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$DataComponentType, $DataComponentType$$Type} from "net.minecraft.core.component.DataComponentType"
import {$Unit} from "com.mojang.datafixers.util.Unit"
import {$DualCodec, $DualCodec$$Type} from "malte0811.dualcodecs.DualCodec"
import {$Record} from "java.lang.Record"

export class $BulletHandler$CodecsAndDefault<T> extends $Record {
static readonly "UNIT": $BulletHandler$CodecsAndDefault<($Unit)>

constructor(arg0: $DualCodec$$Type<($RegistryFriendlyByteBuf$$Type), (T)>, arg1: T)
constructor(codecs: $DualCodec$$Type<($RegistryFriendlyByteBuf$$Type), (T)>, defaultValue: T, vanillaDataComponent: $DataComponentType$$Type<(T)>)

public "vanillaDataComponent"(): $DataComponentType<(T)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "defaultValue"(): T
public "codecs"(): $DualCodec<($RegistryFriendlyByteBuf), (T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BulletHandler$CodecsAndDefault$$Type<T> = ({"defaultValue"?: T, "codecs"?: $DualCodec$$Type<($RegistryFriendlyByteBuf$$Type), (T)>, "vanillaDataComponent"?: $DataComponentType$$Type<(T)>}) | ([defaultValue?: T, codecs?: $DualCodec$$Type<($RegistryFriendlyByteBuf$$Type), (T)>, vanillaDataComponent?: $DataComponentType$$Type<(T)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BulletHandler$CodecsAndDefault$$Original<T> = $BulletHandler$CodecsAndDefault<(T)>;}
declare module "blusunrize.immersiveengineering.api.tool.INoisyTool" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$Holder} from "net.minecraft.core.Holder"

export interface $INoisyTool$$Interface {
}

export class $INoisyTool implements $INoisyTool$$Interface {
 "getIdleSound"(arg0: $ItemStack$$Type): $Holder<($SoundEvent)>
 "getBusySound"(arg0: $ItemStack$$Type): $Holder<($SoundEvent)>
 "getFadingSound"(arg0: $ItemStack$$Type): $Holder<($SoundEvent)>
 "getAttackSound"(arg0: $ItemStack$$Type): $Holder<($SoundEvent)>
 "getHarvestSound"(arg0: $ItemStack$$Type): $Holder<($SoundEvent)>
 "ableToMakeNoise"(arg0: $ItemStack$$Type): boolean
 "noisySameStack"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): boolean
static "isAbleNoisyTool"(arg0: $ItemStack$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $INoisyTool$$Type = ($INoisyTool);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $INoisyTool$$Original = $INoisyTool;}
declare module "blusunrize.immersiveengineering.api.tool.upgrade.IUpgrade" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$UpgradeData, $UpgradeData$$Type} from "blusunrize.immersiveengineering.api.tool.upgrade.UpgradeData"
import {$Set} from "java.util.Set"

export interface $IUpgrade$$Interface {
}

export class $IUpgrade implements $IUpgrade$$Interface {
 "getUpgradeTypes"(arg0: $ItemStack$$Type): $Set<(StringJS)>
 "canApplyUpgrades"(arg0: $UpgradeData$$Type, arg1: $ItemStack$$Type): boolean
 "applyUpgrades"(arg0: $UpgradeData$$Type, arg1: $ItemStack$$Type): $UpgradeData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IUpgrade$$Type = ($IUpgrade);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IUpgrade$$Original = $IUpgrade;}
declare module "blusunrize.immersiveengineering.api.tool.IConfigurableTool$ToolConfig$ToolConfigFloat" {
import {$IConfigurableTool$ToolConfig} from "blusunrize.immersiveengineering.api.tool.IConfigurableTool$ToolConfig"

export class $IConfigurableTool$ToolConfig$ToolConfigFloat extends $IConfigurableTool$ToolConfig {
readonly "min": float
readonly "max": float
 "x": integer
 "name": StringJS
 "y": integer
readonly "value": float

constructor(arg0: StringJS, arg1: integer, arg2: integer, arg3: float)
constructor(arg0: StringJS, arg1: integer, arg2: integer, arg3: float, arg4: float, arg5: float)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IConfigurableTool$ToolConfig$ToolConfigFloat$$Type = ($IConfigurableTool$ToolConfig$ToolConfigFloat);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IConfigurableTool$ToolConfig$ToolConfigFloat$$Original = $IConfigurableTool$ToolConfig$ToolConfigFloat;}
declare module "blusunrize.immersiveengineering.api.tool.conveyor.ConveyorWall" {
import {$Enum} from "java.lang.Enum"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"

export class $ConveyorWall extends $Enum<($ConveyorWall)> {
static readonly "LEFT": $ConveyorWall
static readonly "RIGHT": $ConveyorWall

public "getWallSide"(arg0: $Direction$$Type): $Direction
public static "values"(): ($ConveyorWall)[]
public static "valueOf"(arg0: StringJS): $ConveyorWall
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConveyorWall$$Type = (("left") | ("right"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ConveyorWall$$Original = $ConveyorWall;}
declare module "blusunrize.immersiveengineering.api.tool.IElectricEquipment" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$DamageSource, $DamageSource$$Type} from "net.minecraft.world.damagesource.DamageSource"
import {$EquipmentSlot, $EquipmentSlot$$Type} from "net.minecraft.world.entity.EquipmentSlot"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$IElectricEquipment$ElectricSource, $IElectricEquipment$ElectricSource$$Type} from "blusunrize.immersiveengineering.api.tool.IElectricEquipment$ElectricSource"

export interface $IElectricEquipment$$Interface {

(arg0: $ItemStack, arg1: $EquipmentSlot, arg2: $LivingEntity, arg3: $Map<(StringJS), (any)>, arg4: $DamageSource, arg5: $IElectricEquipment$ElectricSource): void
}

export class $IElectricEquipment implements $IElectricEquipment$$Interface {
 "onStrike"(arg0: $ItemStack$$Type, arg1: $EquipmentSlot$$Type, arg2: $LivingEntity$$Type, arg3: $Map$$Type<(StringJS), (any)>, arg4: $DamageSource$$Type, arg5: $IElectricEquipment$ElectricSource$$Type): void
static "applyToEntity"(arg0: $LivingEntity$$Type, arg1: $DamageSource$$Type, arg2: $IElectricEquipment$ElectricSource$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IElectricEquipment$$Type = ((arg0: $ItemStack, arg1: $EquipmentSlot, arg2: $LivingEntity, arg3: $Map<(StringJS), (any)>, arg4: $DamageSource, arg5: $IElectricEquipment$ElectricSource) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IElectricEquipment$$Original = $IElectricEquipment;}
declare module "blusunrize.immersiveengineering.api.tool.conveyor.IConveyorModelRender" {
import {$TextureAtlasSprite$$Type} from "net.minecraft.client.renderer.texture.TextureAtlasSprite"
import {$BasicConveyorCacheData} from "blusunrize.immersiveengineering.api.tool.conveyor.BasicConveyorCacheData"
import {$Material$$Type} from "net.minecraft.client.resources.model.Material"
import {$List, $List$$Type} from "java.util.List"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$BakedQuad, $BakedQuad$$Type} from "net.minecraft.client.renderer.block.model.BakedQuad"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$ConveyorWall$$Type} from "blusunrize.immersiveengineering.api.tool.conveyor.ConveyorWall"
import {$Function$$Type} from "java.util.function.Function"
import {$Transformation, $Transformation$$Type} from "com.mojang.math.Transformation"
import {$IConveyorBelt} from "blusunrize.immersiveengineering.api.tool.conveyor.IConveyorBelt"
import {$ModelBaker$$Type} from "net.minecraft.client.resources.model.ModelBaker"
import {$RenderType$$Type} from "net.minecraft.client.renderer.RenderType"
import {$IConveyorModelRender$RenderContext$$Type} from "blusunrize.immersiveengineering.api.tool.conveyor.IConveyorModelRender$RenderContext"

export interface $IConveyorModelRender$$Interface<T extends $IConveyorBelt> {
get "inactiveTexture"(): $ResourceLocation
get "colouredStripesTexture"(): $ResourceLocation
get "activeTexture"(): $ResourceLocation
}

export class $IConveyorModelRender<T extends $IConveyorBelt> implements $IConveyorModelRender$$Interface {
static "getDefaultData"<T extends $IConveyorBelt>(arg0: $IConveyorModelRender$$Type<(T)>, arg1: $IConveyorModelRender$RenderContext$$Type<(T)>): $BasicConveyorCacheData
 "shouldRenderWall"(arg0: $Direction$$Type, arg1: $ConveyorWall$$Type, arg2: $IConveyorModelRender$RenderContext$$Type<(T)>): boolean
 "getModelCacheKey"(arg0: $IConveyorModelRender$RenderContext$$Type<(T)>): any
 "modifyBaseRotationMatrix"(arg0: $Transformation$$Type): $Transformation
 "getInactiveTexture"(): $ResourceLocation
 "getColouredStripesTexture"(): $ResourceLocation
 "updateCachedModels"(arg0: $ModelBaker$$Type, arg1: $Function$$Type<($Material), ($TextureAtlasSprite$$Type)>): void
 "modifyQuads"(arg0: $List$$Type<($BakedQuad$$Type)>, arg1: $IConveyorModelRender$RenderContext$$Type<(T)>, arg2: $RenderType$$Type): $List<($BakedQuad)>
 "getActiveTexture"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IConveyorModelRender$$Type<T> = ($IConveyorModelRender<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IConveyorModelRender$$Original<T> = $IConveyorModelRender<(T)>;}
declare module "blusunrize.immersiveengineering.api.tool.conveyor.IConveyorType" {
import {$IConveyorModelRender$$Type} from "blusunrize.immersiveengineering.api.tool.conveyor.IConveyorModelRender"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$IConveyorBelt} from "blusunrize.immersiveengineering.api.tool.conveyor.IConveyorBelt"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$Consumer$$Type} from "java.util.function.Consumer"

export interface $IConveyorType$$Interface<T extends $IConveyorBelt> {
get "ticking"(): boolean
get "id"(): $ResourceLocation
}

export class $IConveyorType<T extends $IConveyorBelt> implements $IConveyorType$$Interface {
 "isTicking"(): boolean
 "makeInstance"(arg0: $BlockEntity$$Type): T
 "canBeDyed"(): boolean
 "initClientData"(arg0: $Consumer$$Type<($IConveyorModelRender<(T)>)>): void
 "acceptsCovers"(): boolean
 "getId"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IConveyorType$$Type<T> = ($IConveyorType<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IConveyorType$$Original<T> = $IConveyorType<(T)>;}
declare module "blusunrize.immersiveengineering.api.tool.conveyor.ConveyorHandler$IConveyorBlockEntity" {
import {$ConveyorHandler$IConveyorAttachable$$Interface} from "blusunrize.immersiveengineering.api.tool.conveyor.ConveyorHandler$IConveyorAttachable"
import {$IConveyorBelt} from "blusunrize.immersiveengineering.api.tool.conveyor.IConveyorBelt"
import {$Direction} from "net.minecraft.core.Direction"

export interface $ConveyorHandler$IConveyorBlockEntity$$Interface<T extends $IConveyorBelt> extends $ConveyorHandler$IConveyorAttachable$$Interface {
get "conveyorInstance"(): T
get "facing"(): $Direction
}

export class $ConveyorHandler$IConveyorBlockEntity<T extends $IConveyorBelt> implements $ConveyorHandler$IConveyorBlockEntity$$Interface {
 "getConveyorInstance"(): T
 "sigOutputDirections"(): ($Direction)[]
 "getFacing"(): $Direction
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConveyorHandler$IConveyorBlockEntity$$Type<T> = ($ConveyorHandler$IConveyorBlockEntity<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ConveyorHandler$IConveyorBlockEntity$$Original<T> = $ConveyorHandler$IConveyorBlockEntity<(T)>;}
declare module "blusunrize.immersiveengineering.api.tool.IElectricEquipment$ElectricSource" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $IElectricEquipment$ElectricSource {
readonly "level": float

constructor(arg0: float)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IElectricEquipment$ElectricSource$$Type = ($IElectricEquipment$ElectricSource);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IElectricEquipment$ElectricSource$$Original = $IElectricEquipment$ElectricSource;}
declare module "blusunrize.immersiveengineering.api.tool.IConfigurableTool" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$IConfigurableTool$ToolConfig$ToolConfigFloat} from "blusunrize.immersiveengineering.api.tool.IConfigurableTool$ToolConfig$ToolConfigFloat"
import {$IConfigurableTool$ToolConfig$$Type} from "blusunrize.immersiveengineering.api.tool.IConfigurableTool$ToolConfig"
import {$IConfigurableTool$ToolConfig$ToolConfigBoolean} from "blusunrize.immersiveengineering.api.tool.IConfigurableTool$ToolConfig$ToolConfigBoolean"

export interface $IConfigurableTool$$Interface {
}

export class $IConfigurableTool implements $IConfigurableTool$$Interface {
 "canConfigure"(arg0: $ItemStack$$Type): boolean
 "getFloatOptions"(arg0: $ItemStack$$Type): ($IConfigurableTool$ToolConfig$ToolConfigFloat)[]
 "fomatConfigName"(arg0: $ItemStack$$Type, arg1: $IConfigurableTool$ToolConfig$$Type): StringJS
 "fomatConfigDescription"(arg0: $ItemStack$$Type, arg1: $IConfigurableTool$ToolConfig$$Type): StringJS
 "applyConfigOption"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: any): void
 "getBooleanOptions"(arg0: $ItemStack$$Type): ($IConfigurableTool$ToolConfig$ToolConfigBoolean)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IConfigurableTool$$Type = ($IConfigurableTool);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IConfigurableTool$$Original = $IConfigurableTool;}
declare module "blusunrize.immersiveengineering.api.tool.conveyor.IConveyorBelt" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List} from "java.util.List"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$ItemEntity$$Type} from "net.minecraft.world.entity.item.ItemEntity"
import {$ConveyorHandler$ConveyorDirection, $ConveyorHandler$ConveyorDirection$$Type} from "blusunrize.immersiveengineering.api.tool.conveyor.ConveyorHandler$ConveyorDirection"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IConveyorType} from "blusunrize.immersiveengineering.api.tool.conveyor.IConveyorType"
import {$Vec3} from "net.minecraft.world.phys.Vec3"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$DyeColor, $DyeColor$$Type} from "net.minecraft.world.item.DyeColor"
import {$BlockPos} from "net.minecraft.core.BlockPos"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"

export interface $IConveyorBelt$$Interface {
get "selectionShape"(): $VoxelShape
get "conveyorDirection"(): $ConveyorHandler$ConveyorDirection
set "conveyorDirection"(value: $ConveyorHandler$ConveyorDirection$$Type)
set "dyeColour"(value: $DyeColor$$Type)
get "dyeColour"(): $DyeColor
get "cover"(): $Block
set "cover"(value: $Block$$Type)
get "outputBlocked"(): boolean
get "nextConveyorCandidates"(): $List<($BlockPos)>
get "outputConveyor"(): $IConveyorBelt
get "facing"(): $Direction
get "outputInventory"(): $BlockPos
get "type"(): $IConveyorType<(never)>
get "active"(): boolean
get "blocked"(): boolean
get "blockEntity"(): $BlockEntity
get "collisionShape"(): $VoxelShape
}

export class $IConveyorBelt implements $IConveyorBelt$$Interface {
static readonly "conveyorBounds": $VoxelShape
static readonly "highConveyorBounds": $VoxelShape
static readonly "FULL_BLOCK": $VoxelShape

 "tickServer"(): void
static "isCovered"(arg0: $IConveyorBelt$$Type, arg1: $Block$$Type): boolean
 "onEntityCollision"(arg0: $Entity$$Type): void
 "sigTransportDirections"(): ($Direction)[]
 "onItemDeployed"(arg0: $ItemEntity$$Type): void
 "getSelectionShape"(): $VoxelShape
 "getConveyorDirection"(): $ConveyorHandler$ConveyorDirection
 "changeConveyorDirection"(): boolean
 "setConveyorDirection"(arg0: $ConveyorHandler$ConveyorDirection$$Type): boolean
 "playerInteraction"(arg0: $Player$$Type, arg1: $InteractionHand$$Type, arg2: $ItemStack$$Type, arg3: float, arg4: float, arg5: float, arg6: $Direction$$Type): boolean
 "writeConveyorNBT"(): $CompoundTag
 "readConveyorNBT"(arg0: $CompoundTag$$Type): void
 "setDyeColour"(arg0: $DyeColor$$Type): boolean
 "getDyeColour"(): $DyeColor
 "getCover"(): $Block
 "setCover"(arg0: $Block$$Type): void
 "isOutputBlocked"(): boolean
 "getNextConveyorCandidates"(): $List<($BlockPos)>
static "getCoverOrDefault"(arg0: $IConveyorBelt$$Type, arg1: $Block$$Type): $Block
 "afterRotation"(arg0: $Direction$$Type, arg1: $Direction$$Type): void
 "getOutputConveyor"(): $IConveyorBelt
 "getFacing"(): $Direction
 "handleInsertion"(arg0: $ItemEntity$$Type, arg1: $ConveyorHandler$ConveyorDirection$$Type, arg2: double, arg3: double): void
 "getOutputInventory"(): $BlockPos
 "getType"(): $IConveyorType<(never)>
 "isActive"(): boolean
 "getDirection"(arg0: $Entity$$Type, arg1: boolean): $Vec3
 "isBlocked"(): boolean
 "getBlockEntity"(): $BlockEntity
 "getCollisionShape"(): $VoxelShape
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IConveyorBelt$$Type = ($IConveyorBelt);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IConveyorBelt$$Original = $IConveyorBelt;}
declare module "blusunrize.immersiveengineering.api.tool.conveyor.ConveyorHandler$IConveyorBlock" {
import {$IConveyorType, $IConveyorType$$Type} from "blusunrize.immersiveengineering.api.tool.conveyor.IConveyorType"

export interface $ConveyorHandler$IConveyorBlock$$Interface {

(): $IConveyorType$$Type<(never)>
get "type"(): $IConveyorType<(never)>
}

export class $ConveyorHandler$IConveyorBlock implements $ConveyorHandler$IConveyorBlock$$Interface {
 "getType"(): $IConveyorType<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConveyorHandler$IConveyorBlock$$Type = (() => $IConveyorType$$Type<(never)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ConveyorHandler$IConveyorBlock$$Original = $ConveyorHandler$IConveyorBlock;}
declare module "blusunrize.immersiveengineering.api.tool.LogicCircuitHandler$LogicCircuitRegister" {
import {$Enum} from "java.lang.Enum"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$DualCodec} from "malte0811.dualcodecs.DualCodec"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"

export class $LogicCircuitHandler$LogicCircuitRegister extends $Enum<($LogicCircuitHandler$LogicCircuitRegister)> {
static readonly "GRAY": $LogicCircuitHandler$LogicCircuitRegister
static readonly "BLUE": $LogicCircuitHandler$LogicCircuitRegister
static readonly "CODECS": $DualCodec<($ByteBuf), ($LogicCircuitHandler$LogicCircuitRegister)>
static readonly "PINK": $LogicCircuitHandler$LogicCircuitRegister
static readonly "BLACK": $LogicCircuitHandler$LogicCircuitRegister
static readonly "BROWN": $LogicCircuitHandler$LogicCircuitRegister
static readonly "R0": $LogicCircuitHandler$LogicCircuitRegister
static readonly "ORANGE": $LogicCircuitHandler$LogicCircuitRegister
static readonly "R1": $LogicCircuitHandler$LogicCircuitRegister
static readonly "R2": $LogicCircuitHandler$LogicCircuitRegister
static readonly "R3": $LogicCircuitHandler$LogicCircuitRegister
static readonly "WHITE": $LogicCircuitHandler$LogicCircuitRegister
static readonly "R4": $LogicCircuitHandler$LogicCircuitRegister
static readonly "R5": $LogicCircuitHandler$LogicCircuitRegister
static readonly "R6": $LogicCircuitHandler$LogicCircuitRegister
static readonly "R7": $LogicCircuitHandler$LogicCircuitRegister
static readonly "PURPLE": $LogicCircuitHandler$LogicCircuitRegister
static readonly "GREEN": $LogicCircuitHandler$LogicCircuitRegister
static readonly "RED": $LogicCircuitHandler$LogicCircuitRegister
static readonly "LIGHT_GRAY": $LogicCircuitHandler$LogicCircuitRegister
static readonly "LIGHT_BLUE": $LogicCircuitHandler$LogicCircuitRegister
static readonly "LIME": $LogicCircuitHandler$LogicCircuitRegister
static readonly "MAGENTA": $LogicCircuitHandler$LogicCircuitRegister
static readonly "YELLOW": $LogicCircuitHandler$LogicCircuitRegister
static readonly "CYAN": $LogicCircuitHandler$LogicCircuitRegister

public "getDescription"(): $MutableComponent
public static "values"(): ($LogicCircuitHandler$LogicCircuitRegister)[]
public static "valueOf"(arg0: StringJS): $LogicCircuitHandler$LogicCircuitRegister
get "description"(): $MutableComponent
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LogicCircuitHandler$LogicCircuitRegister$$Type = (("white") | ("orange") | ("magenta") | ("light_blue") | ("yellow") | ("lime") | ("pink") | ("gray") | ("light_gray") | ("cyan") | ("purple") | ("blue") | ("brown") | ("green") | ("red") | ("black") | ("r0") | ("r1") | ("r2") | ("r3") | ("r4") | ("r5") | ("r6") | ("r7"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LogicCircuitHandler$LogicCircuitRegister$$Original = $LogicCircuitHandler$LogicCircuitRegister;}
declare module "blusunrize.immersiveengineering.api.tool.LogicCircuitHandler$ILogicCircuitHandler" {
import {$LogicCircuitHandler$LogicCircuitRegister$$Type} from "blusunrize.immersiveengineering.api.tool.LogicCircuitHandler$LogicCircuitRegister"

export interface $LogicCircuitHandler$ILogicCircuitHandler$$Interface {
}

export class $LogicCircuitHandler$ILogicCircuitHandler implements $LogicCircuitHandler$ILogicCircuitHandler$$Interface {
 "getLogicCircuitRegister"(arg0: $LogicCircuitHandler$LogicCircuitRegister$$Type): boolean
 "setLogicCircuitRegister"(arg0: $LogicCircuitHandler$LogicCircuitRegister$$Type, arg1: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LogicCircuitHandler$ILogicCircuitHandler$$Type = ($LogicCircuitHandler$ILogicCircuitHandler);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LogicCircuitHandler$ILogicCircuitHandler$$Original = $LogicCircuitHandler$ILogicCircuitHandler;}
declare module "blusunrize.immersiveengineering.api.tool.upgrade.UpgradeData$UpgradeEntry" {
import {$UpgradeEffect, $UpgradeEffect$$Type} from "blusunrize.immersiveengineering.api.tool.upgrade.UpgradeEffect"
import {$DualCodec} from "malte0811.dualcodecs.DualCodec"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$Record} from "java.lang.Record"

export class $UpgradeData$UpgradeEntry<T> extends $Record {
static readonly "CODECS": $DualCodec<($ByteBuf), ($UpgradeData$UpgradeEntry<(never)>)>

constructor(type: $UpgradeEffect$$Type<(T)>, value: T)

public "type"(): $UpgradeEffect<(T)>
public "value"(): T
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UpgradeData$UpgradeEntry$$Type<T> = ({"value"?: T, "type"?: $UpgradeEffect$$Type<(T)>}) | ([value?: T, type?: $UpgradeEffect$$Type<(T)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $UpgradeData$UpgradeEntry$$Original<T> = $UpgradeData$UpgradeEntry<(T)>;}
declare module "blusunrize.immersiveengineering.api.tool.upgrade.PrevSlot" {
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$DualCodec} from "malte0811.dualcodecs.DualCodec"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$Record} from "java.lang.Record"

export class $PrevSlot extends $Record {
static readonly "CODECS": $DualCodec<($ByteBuf), ($PrevSlot)>
static readonly "NONE": $PrevSlot

constructor(arg0: integer)
constructor(prevSlot: (integer)?)

public "prevSlot"(): $Optional<(integer)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PrevSlot$$Type = ({"prevSlot"?: (integer)?}) | ([prevSlot?: (integer)?]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PrevSlot$$Original = $PrevSlot;}
declare module "blusunrize.immersiveengineering.api.tool.IConfigurableTool$ToolConfig" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $IConfigurableTool$ToolConfig {
 "x": integer
 "name": StringJS
 "y": integer

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IConfigurableTool$ToolConfig$$Type = ($IConfigurableTool$ToolConfig);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IConfigurableTool$ToolConfig$$Original = $IConfigurableTool$ToolConfig;}
declare module "blusunrize.immersiveengineering.api.tool.conveyor.BasicConveyorCacheData" {
import {$DyeColor, $DyeColor$$Type} from "net.minecraft.world.item.DyeColor"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$ConveyorHandler$ConveyorDirection, $ConveyorHandler$ConveyorDirection$$Type} from "blusunrize.immersiveengineering.api.tool.conveyor.ConveyorHandler$ConveyorDirection"
import {$Record} from "java.lang.Record"

export class $BasicConveyorCacheData extends $Record {
constructor(cover: $Block$$Type, facing: $Direction$$Type, direction: $ConveyorHandler$ConveyorDirection$$Type, active: boolean, leftWall: boolean, rightWall: boolean, color: $DyeColor$$Type)

public "cover"(): $Block
public "leftWall"(): boolean
public "rightWall"(): boolean
public "active"(): boolean
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "color"(): $DyeColor
public "direction"(): $ConveyorHandler$ConveyorDirection
public "facing"(): $Direction
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BasicConveyorCacheData$$Type = ({"active"?: boolean, "rightWall"?: boolean, "color"?: $DyeColor$$Type, "leftWall"?: boolean, "cover"?: $Block$$Type, "facing"?: $Direction$$Type, "direction"?: $ConveyorHandler$ConveyorDirection$$Type}) | ([active?: boolean, rightWall?: boolean, color?: $DyeColor$$Type, leftWall?: boolean, cover?: $Block$$Type, facing?: $Direction$$Type, direction?: $ConveyorHandler$ConveyorDirection$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BasicConveyorCacheData$$Original = $BasicConveyorCacheData;}
declare module "blusunrize.immersiveengineering.api.tool.ZoomHandler$IZoomTool" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"

export interface $ZoomHandler$IZoomTool$$Interface {
}

export class $ZoomHandler$IZoomTool implements $ZoomHandler$IZoomTool$$Interface {
 "canZoom"(arg0: $ItemStack$$Type, arg1: $Player$$Type): boolean
 "getZoomSteps"(arg0: $ItemStack$$Type, arg1: $Player$$Type): (float)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ZoomHandler$IZoomTool$$Type = ($ZoomHandler$IZoomTool);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ZoomHandler$IZoomTool$$Original = $ZoomHandler$IZoomTool;}
declare module "blusunrize.immersiveengineering.api.tool.BulletHandler$IBullet" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$UUID$$Type} from "java.util.UUID"
import {$List$$Type} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$BulletHandler$CodecsAndDefault} from "blusunrize.immersiveengineering.api.tool.BulletHandler$CodecsAndDefault"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Color4} from "blusunrize.immersiveengineering.api.utils.Color4"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"

export interface $BulletHandler$IBullet$$Interface<StackData> {
get "properCartridge"(): boolean
get "validForTurret"(): boolean
get "textures"(): ($ResourceLocation)[]
get "codec"(): $BulletHandler$CodecsAndDefault<(StackData)>
get "sound"(): $SoundEvent
}

export class $BulletHandler$IBullet<StackData> implements $BulletHandler$IBullet$$Interface {
 "addTooltip"(arg0: StackData, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
 "onHitTarget"(arg0: $Level$$Type, arg1: $HitResult$$Type, arg2: $UUID$$Type, arg3: $Entity$$Type, arg4: boolean, arg5: StackData): void
 "getTranslationKey"(arg0: StackData, arg1: StringJS): StringJS
 "isProperCartridge"(): boolean
 "getProjectileCount"(arg0: $Player$$Type): integer
 "isValidForTurret"(): boolean
 "getColour"(arg0: StackData, arg1: integer): $Color4
 "getCasing"(arg0: $ItemStack$$Type): $ItemStack
 "getTextures"(): ($ResourceLocation)[]
 "getCodec"(): $BulletHandler$CodecsAndDefault<(StackData)>
 "getProjectile"(arg0: $Player$$Type, arg1: StackData, arg2: $Entity$$Type, arg3: boolean): $Entity
 "getSound"(): $SoundEvent
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BulletHandler$IBullet$$Type<StackData> = ($BulletHandler$IBullet<(StackData)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BulletHandler$IBullet$$Original<StackData> = $BulletHandler$IBullet<(StackData)>;}
declare module "blusunrize.immersiveengineering.api.tool.conveyor.ConveyorHandler$IConveyorAttachable" {
import {$Direction} from "net.minecraft.core.Direction"

export interface $ConveyorHandler$IConveyorAttachable$$Interface {
get "facing"(): $Direction
}

export class $ConveyorHandler$IConveyorAttachable implements $ConveyorHandler$IConveyorAttachable$$Interface {
 "sigOutputDirections"(): ($Direction)[]
 "getFacing"(): $Direction
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConveyorHandler$IConveyorAttachable$$Type = ($ConveyorHandler$IConveyorAttachable);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ConveyorHandler$IConveyorAttachable$$Original = $ConveyorHandler$IConveyorAttachable;}
declare module "blusunrize.immersiveengineering.api.tool.upgrade.UpgradeData" {
import {$UnaryOperator$$Type} from "java.util.function.UnaryOperator"
import {$List, $List$$Type} from "java.util.List"
import {$UpgradeData$UpgradeEntry, $UpgradeData$UpgradeEntry$$Type} from "blusunrize.immersiveengineering.api.tool.upgrade.UpgradeData$UpgradeEntry"
import {$UpgradeEffect$$Type} from "blusunrize.immersiveengineering.api.tool.upgrade.UpgradeEffect"
import {$Unit$$Type} from "com.mojang.datafixers.util.Unit"
import {$DualCodec} from "malte0811.dualcodecs.DualCodec"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$Record} from "java.lang.Record"

export class $UpgradeData extends $Record {
static readonly "CODECS": $DualCodec<($ByteBuf), ($UpgradeData)>
static readonly "SPECIAL_REVOLVER_CODEC": $DualCodec<($ByteBuf), ($UpgradeData)>
static readonly "EMPTY": $UpgradeData

constructor(entries: $List$$Type<($UpgradeData$UpgradeEntry$$Type<(never)>)>)

public "withModified"<T>(arg0: $UpgradeEffect$$Type<(T)>, arg1: $UnaryOperator$$Type<(T)>): $UpgradeData
public "has"<T>(arg0: $UpgradeEffect$$Type<(T)>): boolean
public "get"<T>(arg0: $UpgradeEffect$$Type<(T)>): T
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "add"(arg0: $UpgradeEffect$$Type<(float)>, arg1: float): $UpgradeData
public "add"(arg0: $UpgradeEffect$$Type<(integer)>, arg1: integer): $UpgradeData
public "entries"(): $List<($UpgradeData$UpgradeEntry<(never)>)>
public "with"<T>(arg0: $UpgradeEffect$$Type<(T)>, arg1: T): $UpgradeData
public "with"(arg0: $UpgradeEffect$$Type<($Unit$$Type)>): $UpgradeData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UpgradeData$$Type = ({"entries"?: $List$$Type<($UpgradeData$UpgradeEntry$$Type<(never)>)>}) | ([entries?: $List$$Type<($UpgradeData$UpgradeEntry$$Type<(never)>)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $UpgradeData$$Original = $UpgradeData;}
