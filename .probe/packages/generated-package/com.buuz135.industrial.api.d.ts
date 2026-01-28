declare module "com.buuz135.industrial.api.conveyor.ConveyorUpgradeFactory" {
import {$List} from "java.util.List"
import {$ImmutableSet} from "com.google.common.collect.ImmutableSet"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$RecipeOutput$$Type} from "net.minecraft.data.recipes.RecipeOutput"
import {$IBlockContainer$$Type} from "com.buuz135.industrial.api.IBlockContainer"
import {$ConveyorUpgrade} from "com.buuz135.industrial.api.conveyor.ConveyorUpgrade"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Set} from "java.util.Set"
import {$IRecipeProvider$$Interface} from "com.hrznstudio.titanium.api.IRecipeProvider"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"

export class $ConveyorUpgradeFactory implements $IRecipeProvider$$Interface {
static readonly "DOWN": $ImmutableSet<($Direction)>
static readonly "FACTORIES": $List<($ConveyorUpgradeFactory)>
static readonly "HORIZONTAL": $ImmutableSet<($Direction)>

constructor(arg0: StringJS)

public "getValidFacings"(): $Set<($Direction)>
public "getSideForPlacement"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Player$$Type): $Direction
public "setUpgradeItem"(arg0: $Item$$Type): void
public "getUpgradeItem"(): $Item
public "getName"(): StringJS
public "create"(arg0: $IBlockContainer$$Type, arg1: $Direction$$Type): $ConveyorUpgrade
public "getTextures"(): $Set<($ResourceLocation)>
public "getItemModel"(): $ResourceLocation
public "getModel"(arg0: $Direction$$Type, arg1: $Direction$$Type): $ResourceLocation
public "registerRecipe"(arg0: $RecipeOutput$$Type): void
get "validFacings"(): $Set<($Direction)>
set "upgradeItem"(value: $Item$$Type)
get "upgradeItem"(): $Item
get "name"(): StringJS
get "textures"(): $Set<($ResourceLocation)>
get "itemModel"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConveyorUpgradeFactory$$Type = ($ConveyorUpgradeFactory);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ConveyorUpgradeFactory$$Original = $ConveyorUpgradeFactory;}
declare module "com.buuz135.industrial.api.conveyor.ConveyorUpgrade" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$IGuiComponent$$Type} from "com.buuz135.industrial.api.conveyor.gui.IGuiComponent"
import {$Collection} from "java.util.Collection"
import {$List$$Type} from "java.util.List"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level} from "net.minecraft.world.level.Level"
import {$INBTSerializable$$Interface} from "net.neoforged.neoforge.common.util.INBTSerializable"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IBlockContainer, $IBlockContainer$$Type} from "com.buuz135.industrial.api.IBlockContainer"
import {$ConveyorUpgradeFactory, $ConveyorUpgradeFactory$$Type} from "com.buuz135.industrial.api.conveyor.ConveyorUpgradeFactory"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Tag$$Type} from "net.minecraft.nbt.Tag"
import {$BlockPos} from "net.minecraft.core.BlockPos"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $ConveyorUpgrade implements $INBTSerializable$$Interface<($CompoundTag)> {
constructor(arg0: $IBlockContainer$$Type, arg1: $ConveyorUpgradeFactory$$Type, arg2: $Direction$$Type)

public "onUpgradeActivated"(arg0: $Player$$Type, arg1: $InteractionHand$$Type): boolean
public "hasGui"(): boolean
public "ignoresCollision"(): boolean
public "handleEntity"(arg0: $Entity$$Type): void
public "onUpgradeRemoved"(): void
public "handleButtonInteraction"(arg0: integer, arg1: $CompoundTag$$Type): void
public "addComponentsToGui"(arg0: $List$$Type<($IGuiComponent$$Type)>): void
public "getDrops"(): $Collection<($ItemStack)>
public "getWorld"(): $Level
public "getRedstoneOutput"(): integer
public "getContainer"(): $IBlockContainer
public "update"(): void
public "getFactory"(): $ConveyorUpgradeFactory
public "getSide"(): $Direction
public "getBoundingBox"(): $VoxelShape
public "deserializeNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): void
public "deserializeNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $Tag$$Type): void
public "serializeNBT"(arg0: $HolderLookup$Provider$$Type): $CompoundTag
public "getPos"(): $BlockPos
get "drops"(): $Collection<($ItemStack)>
get "world"(): $Level
get "redstoneOutput"(): integer
get "container"(): $IBlockContainer
get "factory"(): $ConveyorUpgradeFactory
get "side"(): $Direction
get "boundingBox"(): $VoxelShape
get "pos"(): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConveyorUpgrade$$Type = ($ConveyorUpgrade);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ConveyorUpgrade$$Original = $ConveyorUpgrade;}
declare module "com.buuz135.industrial.api.straw.StrawHandler" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"

export class $StrawHandler {
constructor()

public "validFluid"(arg0: $Fluid$$Type): boolean
public "onDrink"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Fluid$$Type, arg3: $Player$$Type, arg4: boolean): void
public "getPriority"(): integer
get "priority"(): integer
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.IndustrialforegoingStraw
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.IndustrialforegoingStrawTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StrawHandler$$Type = (Special.IndustrialforegoingStraw);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StrawHandler$$Original = $StrawHandler;}
declare module "com.buuz135.industrial.api.IBlockContainer" {
import {$List} from "java.util.List"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level} from "net.minecraft.world.level.Level"
import {$BlockPos} from "net.minecraft.core.BlockPos"

export interface $IBlockContainer$$Interface<T> {
get "blockWorld"(): $Level
get "entityFilter"(): $List<(integer)>
get "blockPosition"(): $BlockPos
}

export class $IBlockContainer<T> implements $IBlockContainer$$Interface {
 "hasUpgrade"(arg0: $Direction$$Type): boolean
 "removeUpgrade"(arg0: $Direction$$Type, arg1: boolean): void
 "addUpgrade"(arg0: $Direction$$Type, arg1: T): void
 "getBlockWorld"(): $Level
 "getEntityFilter"(): $List<(integer)>
 "requestSync"(): void
 "requestFluidSync"(): void
 "getBlockPosition"(): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBlockContainer$$Type<T> = ($IBlockContainer<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IBlockContainer$$Original<T> = $IBlockContainer<(T)>;}
declare module "com.buuz135.industrial.api.transporter.TransporterTypeFactory" {
import {$List} from "java.util.List"
import {$ImmutableSet} from "com.google.common.collect.ImmutableSet"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$RecipeOutput$$Type} from "net.minecraft.data.recipes.RecipeOutput"
import {$IBlockContainer$$Type} from "com.buuz135.industrial.api.IBlockContainer"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$TransporterTypeFactory$TransporterAction$$Type} from "com.buuz135.industrial.api.transporter.TransporterTypeFactory$TransporterAction"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Set} from "java.util.Set"
import {$TransporterType} from "com.buuz135.industrial.api.transporter.TransporterType"
import {$IRecipeProvider$$Interface} from "com.hrznstudio.titanium.api.IRecipeProvider"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"

export class $TransporterTypeFactory implements $IRecipeProvider$$Interface {
static readonly "ALL": $ImmutableSet<($Direction)>
static readonly "DOWN": $ImmutableSet<($Direction)>
static readonly "FACTORIES": $List<($TransporterTypeFactory)>
static readonly "HORIZONTAL": $ImmutableSet<($Direction)>

constructor(arg0: StringJS)

public "getValidFacings"(): $Set<($Direction)>
public "setUpgradeItem"(arg0: $Item$$Type): void
public "canBeAttachedAgainst"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type): boolean
public "getUpgradeItem"(): $Item
public "getName"(): StringJS
public "create"(arg0: $IBlockContainer$$Type, arg1: $Direction$$Type, arg2: $TransporterTypeFactory$TransporterAction$$Type): $TransporterType
public "getTextures"(): $Set<($ResourceLocation)>
public "getItemModel"(): $ResourceLocation
public "getModel"(arg0: $Direction$$Type, arg1: $TransporterTypeFactory$TransporterAction$$Type): $ResourceLocation
public "registerRecipe"(arg0: $RecipeOutput$$Type): void
get "validFacings"(): $Set<($Direction)>
set "upgradeItem"(value: $Item$$Type)
get "upgradeItem"(): $Item
get "name"(): StringJS
get "textures"(): $Set<($ResourceLocation)>
get "itemModel"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TransporterTypeFactory$$Type = ($TransporterTypeFactory);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TransporterTypeFactory$$Original = $TransporterTypeFactory;}
declare module "com.buuz135.industrial.api.plant.PlantRecollectable$Type" {
import {$Enum} from "java.lang.Enum"

export class $PlantRecollectable$Type extends $Enum<($PlantRecollectable$Type)> {
static readonly "PLANT": $PlantRecollectable$Type
static readonly "TREE": $PlantRecollectable$Type
static readonly "ANY": $PlantRecollectable$Type

public static "values"(): ($PlantRecollectable$Type)[]
public static "valueOf"(arg0: StringJS): $PlantRecollectable$Type
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlantRecollectable$Type$$Type = (("tree") | ("plant") | ("any"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlantRecollectable$Type$$Original = $PlantRecollectable$Type;}
declare module "com.buuz135.industrial.api.transporter.TransporterTypeFactory$TransporterAction" {
import {$Enum} from "java.lang.Enum"

export class $TransporterTypeFactory$TransporterAction extends $Enum<($TransporterTypeFactory$TransporterAction)> {
static readonly "INSERT": $TransporterTypeFactory$TransporterAction
static readonly "EXTRACT": $TransporterTypeFactory$TransporterAction

public static "values"(): ($TransporterTypeFactory$TransporterAction)[]
public static "valueOf"(arg0: StringJS): $TransporterTypeFactory$TransporterAction
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TransporterTypeFactory$TransporterAction$$Type = (("insert") | ("extract"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TransporterTypeFactory$TransporterAction$$Original = $TransporterTypeFactory$TransporterAction;}
declare module "com.buuz135.industrial.api.transporter.TransporterType" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$IGuiComponent$$Type} from "com.buuz135.industrial.api.conveyor.gui.IGuiComponent"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Collection} from "java.util.Collection"
import {$List$$Type} from "java.util.List"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Vector3f$$Type} from "org.joml.Vector3f"
import {$INBTSerializable$$Interface} from "net.neoforged.neoforge.common.util.INBTSerializable"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$TransporterTypeFactory, $TransporterTypeFactory$$Type} from "com.buuz135.industrial.api.transporter.TransporterTypeFactory"
import {$IBlockContainer, $IBlockContainer$$Type} from "com.buuz135.industrial.api.IBlockContainer"
import {$MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$TransporterTypeFactory$TransporterAction, $TransporterTypeFactory$TransporterAction$$Type} from "com.buuz135.industrial.api.transporter.TransporterTypeFactory$TransporterAction"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Tag$$Type} from "net.minecraft.nbt.Tag"
import {$BlockPos} from "net.minecraft.core.BlockPos"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $TransporterType implements $INBTSerializable$$Interface<($CompoundTag)> {
constructor(arg0: $IBlockContainer$$Type, arg1: $TransporterTypeFactory$$Type, arg2: $Direction$$Type, arg3: $TransporterTypeFactory$TransporterAction$$Type)

public "hasGui"(): boolean
public "ignoresCollision"(): boolean
public "getCenterBoundingBox"(): $VoxelShape
public "getBorderBoundingBox"(): $VoxelShape
public "toggleAction"(): void
public "handleEntity"(arg0: $Entity$$Type): void
public "onUpgradeRemoved"(): void
public "handleButtonInteraction"(arg0: integer, arg1: $CompoundTag$$Type): void
public "addComponentsToGui"(arg0: $List$$Type<($IGuiComponent$$Type)>): void
public "updateClient"(): void
public "handleRenderSync"(arg0: $Direction$$Type, arg1: $CompoundTag$$Type): void
public "syncRender"(arg0: $Direction$$Type, arg1: $CompoundTag$$Type): void
public "renderTransfer"(arg0: $Vector3f$$Type, arg1: $Direction$$Type, arg2: integer, arg3: $PoseStack$$Type, arg4: integer, arg5: $MultiBufferSource$$Type, arg6: float, arg7: $Level$$Type): void
public "getDrops"(): $Collection<($ItemStack)>
public "getRedstoneOutput"(): integer
public "getContainer"(): $IBlockContainer
public "getLevel"(): $Level
public "update"(): void
public "getFactory"(): $TransporterTypeFactory
public "getSide"(): $Direction
public "getAction"(): $TransporterTypeFactory$TransporterAction
public "getSpeed"(): float
public "deserializeNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $Tag$$Type): void
public "deserializeNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): void
public "serializeNBT"(arg0: $HolderLookup$Provider$$Type): $CompoundTag
public "getEfficiency"(): float
public "getPos"(): $BlockPos
get "centerBoundingBox"(): $VoxelShape
get "borderBoundingBox"(): $VoxelShape
get "drops"(): $Collection<($ItemStack)>
get "redstoneOutput"(): integer
get "container"(): $IBlockContainer
get "level"(): $Level
get "factory"(): $TransporterTypeFactory
get "side"(): $Direction
get "action"(): $TransporterTypeFactory$TransporterAction
get "speed"(): float
get "efficiency"(): float
get "pos"(): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TransporterType$$Type = ($TransporterType);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TransporterType$$Original = $TransporterType;}
declare module "com.buuz135.industrial.api.IMachineSettings" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$List} from "java.util.List"
import {$InventoryComponent$$Type} from "com.hrznstudio.titanium.component.inventory.InventoryComponent"
import {$RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"

export interface $IMachineSettings$$Interface {
}

export class $IMachineSettings implements $IMachineSettings$$Interface {
 "loadSettings"(arg0: $Player$$Type, arg1: $CompoundTag$$Type): void
 "saveSettings"(arg0: $Player$$Type, arg1: $CompoundTag$$Type): void
static "readInventory"(arg0: $RegistryAccess$$Type, arg1: $CompoundTag$$Type): $List<($ItemStack)>
static "writeInventory"(arg0: $RegistryAccess$$Type, arg1: $InventoryComponent$$Type): $CompoundTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMachineSettings$$Type = ($IMachineSettings);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IMachineSettings$$Original = $IMachineSettings;}
declare module "com.buuz135.industrial.api.plant.PlantRecollectable" {
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$List} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$PlantRecollectable$Type} from "com.buuz135.industrial.api.plant.PlantRecollectable$Type"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $PlantRecollectable {
constructor(arg0: StringJS)

public "canBeHarvested"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): boolean
public "doHarvestOperation"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): $List<($ItemStack)>
public "doHarvestOperation"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, ...arg3: (any)[]): $List<($ItemStack)>
public "shouldCheckNextPlant"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): boolean
public "getRecollectablesNames"(): $List<(StringJS)>
public "getSeedDrop"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): $ItemStack
public "getRecollectableType"(): $PlantRecollectable$Type
public "getPriority"(): integer
get "recollectablesNames"(): $List<(StringJS)>
get "recollectableType"(): $PlantRecollectable$Type
get "priority"(): integer
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.IndustrialforegoingPlantRecollectable
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.IndustrialforegoingPlantRecollectableTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlantRecollectable$$Type = (Special.IndustrialforegoingPlantRecollectable);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlantRecollectable$$Original = $PlantRecollectable;}
declare module "com.buuz135.industrial.api.conveyor.gui.IGuiComponent" {
import {$AbstractContainerScreen$$Type} from "net.minecraft.client.gui.screens.inventory.AbstractContainerScreen"
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$List} from "java.util.List"
import {$Component} from "net.minecraft.network.chat.Component"

export interface $IGuiComponent$$Interface {
get "XPos"(): integer
get "YPos"(): integer
get "XSize"(): integer
get "YSize"(): integer
}

export class $IGuiComponent implements $IGuiComponent$$Interface {
 "getXPos"(): integer
 "getYPos"(): integer
 "isInside"(arg0: double, arg1: double): boolean
 "handleClick"(arg0: $AbstractContainerScreen$$Type, arg1: integer, arg2: integer, arg3: double, arg4: double): boolean
 "getTooltip"(arg0: integer, arg1: integer, arg2: double, arg3: double): $List<($Component)>
 "getXSize"(): integer
 "getYSize"(): integer
 "drawGuiBackgroundLayer"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer, arg3: double, arg4: double): void
 "drawGuiForegroundLayer"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer, arg3: double, arg4: double): void
 "onScrolled"(arg0: $AbstractContainerScreen$$Type, arg1: integer, arg2: integer, arg3: double, arg4: double, arg5: double, arg6: double): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IGuiComponent$$Type = ($IGuiComponent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IGuiComponent$$Original = $IGuiComponent;}
