declare module "com.hrznstudio.titanium.component.sideness.ICapabilityHolder" {
import {$FacingUtil$Sideness$$Type} from "com.hrznstudio.titanium.util.FacingUtil$Sideness"
import {$Optional} from "java.util.Optional"

export interface $ICapabilityHolder$$Interface<T> {
}

export class $ICapabilityHolder<T> implements $ICapabilityHolder$$Interface {
 "getCapabilityForSide"(arg0: $FacingUtil$Sideness$$Type): $Optional<(T)>
 "handleFacingChange"(arg0: StringJS, arg1: $FacingUtil$Sideness$$Type, arg2: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICapabilityHolder$$Type<T> = ($ICapabilityHolder<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ICapabilityHolder$$Original<T> = $ICapabilityHolder<(T)>;}
declare module "com.hrznstudio.titanium.component.IComponentBundle" {
import {$IComponentHandler$$Type} from "com.hrznstudio.titanium.component.IComponentHandler"
import {$IScreenAddon} from "com.hrznstudio.titanium.api.client.IScreenAddon"
import {$List} from "java.util.List"
import {$IFactory} from "com.hrznstudio.titanium.api.IFactory"
import {$IScreenAddonProvider$$Interface} from "com.hrznstudio.titanium.api.client.IScreenAddonProvider"
import {$IContainerAddonProvider$$Interface} from "com.hrznstudio.titanium.container.addon.IContainerAddonProvider"
import {$IContainerAddon} from "com.hrznstudio.titanium.container.addon.IContainerAddon"

export interface $IComponentBundle$$Interface extends $IScreenAddonProvider$$Interface, $IContainerAddonProvider$$Interface {
get "screenAddons"(): $List<($IFactory<($IScreenAddon)>)>
get "containerAddons"(): $List<($IFactory<($IContainerAddon)>)>
}

export class $IComponentBundle implements $IComponentBundle$$Interface {
 "accept"(...arg0: ($IComponentHandler$$Type)[]): void
 "getScreenAddons"(): $List<($IFactory<($IScreenAddon)>)>
 "getContainerAddons"(): $List<($IFactory<($IContainerAddon)>)>
 "canInteract"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IComponentBundle$$Type = ($IComponentBundle);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IComponentBundle$$Original = $IComponentBundle;}
declare module "com.hrznstudio.titanium.component.energy.EnergyStorageComponent" {
import {$EnergyStorage} from "net.neoforged.neoforge.energy.EnergyStorage"
import {$IScreenAddon} from "com.hrznstudio.titanium.api.client.IScreenAddon"
import {$IComponentHarness, $IComponentHarness$$Type} from "com.hrznstudio.titanium.component.IComponentHarness"
import {$List} from "java.util.List"
import {$IFactory} from "com.hrznstudio.titanium.api.IFactory"
import {$IScreenAddonProvider$$Interface} from "com.hrznstudio.titanium.api.client.IScreenAddonProvider"
import {$IContainerAddonProvider$$Interface} from "com.hrznstudio.titanium.container.addon.IContainerAddonProvider"
import {$IContainerAddon} from "com.hrznstudio.titanium.container.addon.IContainerAddon"

export class $EnergyStorageComponent<T extends $IComponentHarness> extends $EnergyStorage implements $IScreenAddonProvider$$Interface, $IContainerAddonProvider$$Interface {
constructor(arg0: integer, arg1: integer, arg2: integer)
constructor(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer)
constructor(arg0: integer, arg1: integer, arg2: integer, arg3: integer)

public "getScreenAddons"(): $List<($IFactory<($IScreenAddon)>)>
public "getContainerAddons"(): $List<($IFactory<($IContainerAddon)>)>
public "extractEnergy"(arg0: integer, arg1: boolean): integer
public "receiveEnergy"(arg0: integer, arg1: boolean): integer
public "setComponentHarness"(arg0: T): void
public "setEnergyStored"(arg0: integer): void
public "getY"(): integer
public "getX"(): integer
public "canInteract"(): boolean
get "screenAddons"(): $List<($IFactory<($IScreenAddon)>)>
get "containerAddons"(): $List<($IFactory<($IContainerAddon)>)>
set "componentHarness"(value: T)
set "energyStored"(value: integer)
get "y"(): integer
get "x"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnergyStorageComponent$$Type<T> = ($EnergyStorageComponent<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EnergyStorageComponent$$Original<T> = $EnergyStorageComponent<(T)>;}
declare module "com.hrznstudio.titanium.component.fluid.MultiTankComponent" {
import {$Optional} from "java.util.Optional"
import {$IComponentHarness} from "com.hrznstudio.titanium.component.IComponentHarness"
import {$List} from "java.util.List"
import {$IFactory} from "com.hrznstudio.titanium.api.IFactory"
import {$MultiTankComponent$MultiTankCapabilityHandler} from "com.hrznstudio.titanium.component.fluid.MultiTankComponent$MultiTankCapabilityHandler"
import {$IContainerAddon} from "com.hrznstudio.titanium.container.addon.IContainerAddon"
import {$FluidTankComponent} from "com.hrznstudio.titanium.component.fluid.FluidTankComponent"
import {$HashSet} from "java.util.HashSet"
import {$FacingUtil$Sideness$$Type} from "com.hrznstudio.titanium.util.FacingUtil$Sideness"
import {$IComponentHandler$$Interface} from "com.hrznstudio.titanium.component.IComponentHandler"
import {$IScreenAddon} from "com.hrznstudio.titanium.api.client.IScreenAddon"
import {$ICapabilityHolder$$Interface} from "com.hrznstudio.titanium.component.sideness.ICapabilityHolder"
import {$IContainerAddonProvider$$Interface} from "com.hrznstudio.titanium.container.addon.IContainerAddonProvider"
import {$IScreenAddonProvider$$Interface} from "com.hrznstudio.titanium.api.client.IScreenAddonProvider"

export class $MultiTankComponent<T extends $IComponentHarness> implements $IScreenAddonProvider$$Interface, $IContainerAddonProvider$$Interface, $ICapabilityHolder$$Interface<($MultiTankComponent$MultiTankCapabilityHandler<(T)>)>, $IComponentHandler$$Interface {
constructor()

public "getScreenAddons"(): $List<($IFactory<($IScreenAddon)>)>
public "getContainerAddons"(): $List<($IFactory<($IContainerAddon)>)>
public "getCapabilityForSide"(arg0: $FacingUtil$Sideness$$Type): $Optional<($MultiTankComponent$MultiTankCapabilityHandler<(T)>)>
public "handleFacingChange"(arg0: StringJS, arg1: $FacingUtil$Sideness$$Type, arg2: integer): boolean
public "rebuildCapability"(arg0: ($FacingUtil$Sideness$$Type)[]): void
public "getTanks"(): $HashSet<($FluidTankComponent<(T)>)>
public "add"(...arg0: (any)[]): void
public "canInteract"(): boolean
get "screenAddons"(): $List<($IFactory<($IScreenAddon)>)>
get "containerAddons"(): $List<($IFactory<($IContainerAddon)>)>
get "tanks"(): $HashSet<($FluidTankComponent<(T)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiTankComponent$$Type<T> = ($MultiTankComponent<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MultiTankComponent$$Original<T> = $MultiTankComponent<(T)>;}
declare module "com.hrznstudio.titanium.component.sideness.IFacingComponent" {
import {$FacingUtil$Sideness} from "com.hrznstudio.titanium.util.FacingUtil$Sideness"
import {$IAsset$$Type} from "com.hrznstudio.titanium.api.client.IAsset"
import {$Map} from "java.util.Map"
import {$Rectangle} from "java.awt.Rectangle"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$IFacingComponent$FaceMode} from "com.hrznstudio.titanium.component.sideness.IFacingComponent$FaceMode"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"

export interface $IFacingComponent$$Interface {
get "facingModes"(): $Map<($FacingUtil$Sideness), ($IFacingComponent$FaceMode)>
get "validFacingModes"(): ($IFacingComponent$FaceMode)[]
get "facingHandlerX"(): integer
get "facingHandlerY"(): integer
get "name"(): StringJS
get "color"(): integer
}

export class $IFacingComponent implements $IFacingComponent$$Interface {
 "getFacingModes"(): $Map<($FacingUtil$Sideness), ($IFacingComponent$FaceMode)>
 "getValidFacingModes"(): ($IFacingComponent$FaceMode)[]
 "getFacingHandlerX"(): integer
 "getFacingHandlerY"(): integer
 "setFacingHandlerPos"(arg0: integer, arg1: integer): $IFacingComponent
 "work"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type, arg3: integer): boolean
 "getName"(): StringJS
 "getColor"(): integer
 "getRectangle"(arg0: $IAsset$$Type): $Rectangle
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFacingComponent$$Type = ($IFacingComponent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IFacingComponent$$Original = $IFacingComponent;}
declare module "com.hrznstudio.titanium.component.fluid.FluidTankComponent$Type" {
import {$Enum} from "java.lang.Enum"
import {$ITankAsset} from "com.hrznstudio.titanium.api.client.assets.types.ITankAsset"
import {$IAssetType} from "com.hrznstudio.titanium.api.client.IAssetType"

export class $FluidTankComponent$Type extends $Enum<($FluidTankComponent$Type)> {
static readonly "SMALL": $FluidTankComponent$Type
static readonly "NORMAL": $FluidTankComponent$Type

public "getAssetType"(): $IAssetType<($ITankAsset)>
public static "values"(): ($FluidTankComponent$Type)[]
public static "valueOf"(arg0: StringJS): $FluidTankComponent$Type
get "assetType"(): $IAssetType<($ITankAsset)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidTankComponent$Type$$Type = (("normal") | ("small"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FluidTankComponent$Type$$Original = $FluidTankComponent$Type;}
declare module "com.hrznstudio.titanium.component.IComponentHarness" {
import {$Level} from "net.minecraft.world.level.Level"

export interface $IComponentHarness$$Interface {
get "componentWorld"(): $Level
}

export class $IComponentHarness implements $IComponentHarness$$Interface {
 "markComponentDirty"(): void
 "getComponentWorld"(): $Level
 "markComponentForUpdate"(arg0: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IComponentHarness$$Type = ($IComponentHarness);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IComponentHarness$$Original = $IComponentHarness;}
declare module "com.hrznstudio.titanium.component.button.MultiButtonComponent" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IComponentHandler$$Interface} from "com.hrznstudio.titanium.component.IComponentHandler"
import {$IScreenAddon} from "com.hrznstudio.titanium.api.client.IScreenAddon"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$List} from "java.util.List"
import {$IFactory} from "com.hrznstudio.titanium.api.IFactory"
import {$IScreenAddonProvider$$Interface} from "com.hrznstudio.titanium.api.client.IScreenAddonProvider"

export class $MultiButtonComponent implements $IScreenAddonProvider$$Interface, $IComponentHandler$$Interface {
constructor()

public "getScreenAddons"(): $List<($IFactory<($IScreenAddon)>)>
public "clickButton"(arg0: integer, arg1: $Player$$Type, arg2: $CompoundTag$$Type): void
public "add"(...arg0: (any)[]): void
get "screenAddons"(): $List<($IFactory<($IScreenAddon)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiButtonComponent$$Type = ($MultiButtonComponent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MultiButtonComponent$$Original = $MultiButtonComponent;}
declare module "com.hrznstudio.titanium.component.IComponentHandler" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IComponentHandler$$Interface {

(...arg0: (any)[]): void
}

export class $IComponentHandler implements $IComponentHandler$$Interface {
 "add"(...arg0: (any)[]): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IComponentHandler$$Type = ((arg0: (any)[]) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IComponentHandler$$Original = $IComponentHandler;}
declare module "com.hrznstudio.titanium.component.fluid.FluidTankComponent$Action" {
import {$Enum} from "java.lang.Enum"

export class $FluidTankComponent$Action extends $Enum<($FluidTankComponent$Action)> {
static readonly "FILL": $FluidTankComponent$Action
static readonly "DRAIN": $FluidTankComponent$Action
static readonly "NONE": $FluidTankComponent$Action
static readonly "BOTH": $FluidTankComponent$Action

public "canFill"(): boolean
public "canDrain"(): boolean
public static "values"(): ($FluidTankComponent$Action)[]
public static "valueOf"(arg0: StringJS): $FluidTankComponent$Action
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidTankComponent$Action$$Type = (("fill") | ("drain") | ("both") | ("none"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FluidTankComponent$Action$$Original = $FluidTankComponent$Action;}
declare module "com.hrznstudio.titanium.component.progress.ProgressBarComponent" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$IComponentHarness, $IComponentHarness$$Type} from "com.hrznstudio.titanium.component.IComponentHarness"
import {$List} from "java.util.List"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$IFactory} from "com.hrznstudio.titanium.api.IFactory"
import {$Runnable$$Type} from "java.lang.Runnable"
import {$IContainerAddon} from "com.hrznstudio.titanium.container.addon.IContainerAddon"
import {$INBTSerializable$$Interface} from "net.neoforged.neoforge.common.util.INBTSerializable"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$ProgressBarComponent$BarDirection, $ProgressBarComponent$BarDirection$$Type} from "com.hrznstudio.titanium.component.progress.ProgressBarComponent$BarDirection"
import {$IScreenAddon} from "com.hrznstudio.titanium.api.client.IScreenAddon"
import {$DyeColor, $DyeColor$$Type} from "net.minecraft.world.item.DyeColor"
import {$Tag$$Type} from "net.minecraft.nbt.Tag"
import {$IContainerAddonProvider$$Interface} from "com.hrznstudio.titanium.container.addon.IContainerAddonProvider"
import {$IScreenAddonProvider$$Interface} from "com.hrznstudio.titanium.api.client.IScreenAddonProvider"

export class $ProgressBarComponent<T extends $IComponentHarness> implements $INBTSerializable$$Interface<($CompoundTag)>, $IScreenAddonProvider$$Interface, $IContainerAddonProvider$$Interface {
constructor(arg0: integer, arg1: integer, arg2: integer, arg3: integer)
constructor(arg0: integer, arg1: integer, arg2: integer)

public "getScreenAddons"(): $List<($IFactory<($IScreenAddon)>)>
public "getContainerAddons"(): $List<($IFactory<($IContainerAddon)>)>
public "getPosX"(): integer
public "getPosY"(): integer
public "setComponentHarness"(arg0: T): $ProgressBarComponent<(T)>
public "getCanIncrease"(): $Predicate<(T)>
public "getIncreaseType"(): boolean
public "tickBar"(): void
public "getCanReset"(): $Predicate<(T)>
public "getComponentHarness"(): T
public "getMaxProgress"(): integer
public "setBarDirection"(arg0: $ProgressBarComponent$BarDirection$$Type): $ProgressBarComponent<(T)>
public "setIncreaseType"(arg0: boolean): $ProgressBarComponent<(T)>
public "setOnFinishWork"(arg0: $Runnable$$Type): $ProgressBarComponent<(T)>
public "setOnTickWork"(arg0: $Runnable$$Type): $ProgressBarComponent<(T)>
public "setCanReset"(arg0: $Predicate$$Type<(T)>): $ProgressBarComponent<(T)>
public "setCanIncrease"(arg0: $Predicate$$Type<(T)>): $ProgressBarComponent<(T)>
public "setProgressIncrease"(arg0: integer): $ProgressBarComponent<(T)>
public "getTickingTime"(): integer
public "setTickingTime"(arg0: integer): $ProgressBarComponent<(T)>
public "getProgressIncrease"(): integer
public "getBarDirection"(): $ProgressBarComponent$BarDirection
public static "getTextureDiffuseColors"(arg0: $DyeColor$$Type): (float)[]
public "setOnStart"(arg0: $Runnable$$Type): $ProgressBarComponent<(T)>
public "setColor"(arg0: $DyeColor$$Type): $ProgressBarComponent<(T)>
public "onStart"(): void
public "setMaxProgress"(arg0: integer): $ProgressBarComponent<(T)>
public "getColor"(): $DyeColor
public "deserializeNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): void
public "deserializeNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $Tag$$Type): void
public "serializeNBT"(arg0: $HolderLookup$Provider$$Type): $CompoundTag
public "getProgress"(): integer
public "setProgress"(arg0: integer): void
public "canInteract"(): boolean
get "screenAddons"(): $List<($IFactory<($IScreenAddon)>)>
get "containerAddons"(): $List<($IFactory<($IContainerAddon)>)>
get "posX"(): integer
get "posY"(): integer
set "componentHarness"(value: T)
get "canIncrease"(): $Predicate<(T)>
get "increaseType"(): boolean
get "canReset"(): $Predicate<(T)>
get "componentHarness"(): T
get "maxProgress"(): integer
set "barDirection"(value: $ProgressBarComponent$BarDirection$$Type)
set "increaseType"(value: boolean)
set "onFinishWork"(value: $Runnable$$Type)
set "onTickWork"(value: $Runnable$$Type)
set "canReset"(value: $Predicate$$Type<(T)>)
set "canIncrease"(value: $Predicate$$Type<(T)>)
set "progressIncrease"(value: integer)
get "tickingTime"(): integer
set "tickingTime"(value: integer)
get "progressIncrease"(): integer
get "barDirection"(): $ProgressBarComponent$BarDirection
set "color"(value: $DyeColor$$Type)
set "maxProgress"(value: integer)
get "color"(): $DyeColor
get "progress"(): integer
set "progress"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ProgressBarComponent$$Type<T> = ($ProgressBarComponent<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ProgressBarComponent$$Original<T> = $ProgressBarComponent<(T)>;}
declare module "com.hrznstudio.titanium.component.button.ButtonComponent" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IScreenAddon} from "com.hrznstudio.titanium.api.client.IScreenAddon"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$List} from "java.util.List"
import {$BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$IFactory} from "com.hrznstudio.titanium.api.IFactory"
import {$IScreenAddonProvider$$Interface} from "com.hrznstudio.titanium.api.client.IScreenAddonProvider"

export class $ButtonComponent implements $IScreenAddonProvider$$Interface {
constructor(arg0: integer, arg1: integer, arg2: integer, arg3: integer)

public "getScreenAddons"(): $List<($IFactory<($IScreenAddon)>)>
public "getSizeX"(): integer
public "getSizeY"(): integer
public "getPosX"(): integer
public "getPosY"(): integer
public "onButtonClicked"(arg0: $Player$$Type, arg1: $CompoundTag$$Type): void
public "setPredicate"(arg0: $BiConsumer$$Type<($Player), ($CompoundTag)>): $ButtonComponent
public "getId"(): integer
public "setId"(arg0: integer): $ButtonComponent
get "screenAddons"(): $List<($IFactory<($IScreenAddon)>)>
get "sizeX"(): integer
get "sizeY"(): integer
get "posX"(): integer
get "posY"(): integer
set "predicate"(value: $BiConsumer$$Type<($Player), ($CompoundTag)>)
get "id"(): integer
set "id"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ButtonComponent$$Type = ($ButtonComponent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ButtonComponent$$Original = $ButtonComponent;}
declare module "com.hrznstudio.titanium.component.inventory.SidedInventoryComponent" {
import {$IAsset$$Type} from "com.hrznstudio.titanium.api.client.IAsset"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Color} from "java.awt.Color"
import {$IComponentHarness} from "com.hrznstudio.titanium.component.IComponentHarness"
import {$List} from "java.util.List"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$IFactory} from "com.hrznstudio.titanium.api.IFactory"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$HashMap} from "java.util.HashMap"
import {$FacingUtil$Sideness} from "com.hrznstudio.titanium.util.FacingUtil$Sideness"
import {$IFacingComponent$$Interface} from "com.hrznstudio.titanium.component.sideness.IFacingComponent"
import {$IScreenAddon} from "com.hrznstudio.titanium.api.client.IScreenAddon"
import {$InventoryComponent} from "com.hrznstudio.titanium.component.inventory.InventoryComponent"
import {$DyeColor$$Type} from "net.minecraft.world.item.DyeColor"
import {$Rectangle} from "java.awt.Rectangle"
import {$Tag$$Type} from "net.minecraft.nbt.Tag"
import {$IFacingComponent$FaceMode, $IFacingComponent$FaceMode$$Type} from "com.hrznstudio.titanium.component.sideness.IFacingComponent$FaceMode"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"

export class $SidedInventoryComponent<T extends $IComponentHarness> extends $InventoryComponent<(T)> implements $IFacingComponent$$Interface {
constructor(arg0: StringJS, arg1: integer, arg2: integer, arg3: integer, arg4: integer)

public "getScreenAddons"(): $List<($IFactory<($IScreenAddon)>)>
public "getFacingModes"(): $HashMap<($FacingUtil$Sideness), ($IFacingComponent$FaceMode)>
public "getValidFacingModes"(): ($IFacingComponent$FaceMode)[]
public "getColorForSlotRendering"(arg0: integer): $Color
public "setValidFaceModes"(...arg0: ($IFacingComponent$FaceMode$$Type)[]): $SidedInventoryComponent<(T)>
public "disableFacingAddon"(): $SidedInventoryComponent<(T)>
public "getFacingHandlerX"(): integer
public "getFacingHandlerY"(): integer
public "setFacingHandlerPos"(arg0: integer, arg1: integer): $SidedInventoryComponent<(T)>
public "work"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type, arg3: integer): boolean
public "setColor"(arg0: integer): $SidedInventoryComponent<(T)>
public "setColor"(arg0: $DyeColor$$Type): $SidedInventoryComponent<(T)>
public "getColor"(): integer
public "deserializeNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): void
public "deserializeNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $Tag$$Type): void
public "serializeNBT"(arg0: $HolderLookup$Provider$$Type): $CompoundTag
public "getRectangle"(arg0: $IAsset$$Type): $Rectangle
public "getName"(): StringJS
get "screenAddons"(): $List<($IFactory<($IScreenAddon)>)>
get "facingModes"(): $HashMap<($FacingUtil$Sideness), ($IFacingComponent$FaceMode)>
get "validFacingModes"(): ($IFacingComponent$FaceMode)[]
set "validFaceModes"(value: ($IFacingComponent$FaceMode$$Type)[])
get "facingHandlerX"(): integer
get "facingHandlerY"(): integer
set "color"(value: integer)
set "color"(value: $DyeColor$$Type)
get "color"(): integer
get "name"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SidedInventoryComponent$$Type<T> = ($SidedInventoryComponent<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SidedInventoryComponent$$Original<T> = $SidedInventoryComponent<(T)>;}
declare module "com.hrznstudio.titanium.component.fluid.SidedFluidTankComponent" {
import {$IAsset$$Type} from "com.hrznstudio.titanium.api.client.IAsset"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Map} from "java.util.Map"
import {$IComponentHarness} from "com.hrznstudio.titanium.component.IComponentHarness"
import {$List} from "java.util.List"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$IFactory} from "com.hrznstudio.titanium.api.IFactory"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$FluidTankComponent} from "com.hrznstudio.titanium.component.fluid.FluidTankComponent"
import {$FacingUtil$Sideness} from "com.hrznstudio.titanium.util.FacingUtil$Sideness"
import {$IFacingComponent, $IFacingComponent$$Interface} from "com.hrznstudio.titanium.component.sideness.IFacingComponent"
import {$IScreenAddon} from "com.hrznstudio.titanium.api.client.IScreenAddon"
import {$FluidTank} from "net.neoforged.neoforge.fluids.capability.templates.FluidTank"
import {$DyeColor$$Type} from "net.minecraft.world.item.DyeColor"
import {$Rectangle} from "java.awt.Rectangle"
import {$IScreenAddonProvider$$Interface} from "com.hrznstudio.titanium.api.client.IScreenAddonProvider"
import {$IFacingComponent$FaceMode, $IFacingComponent$FaceMode$$Type} from "com.hrznstudio.titanium.component.sideness.IFacingComponent$FaceMode"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"

export class $SidedFluidTankComponent<T extends $IComponentHarness> extends $FluidTankComponent<(T)> implements $IFacingComponent$$Interface, $IScreenAddonProvider$$Interface {
constructor(arg0: StringJS, arg1: integer, arg2: integer, arg3: integer, arg4: integer)

public "getScreenAddons"(): $List<($IFactory<($IScreenAddon)>)>
public "getFacingModes"(): $Map<($FacingUtil$Sideness), ($IFacingComponent$FaceMode)>
public "getValidFacingModes"(): ($IFacingComponent$FaceMode)[]
public "readFromNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): $FluidTank
public "writeToNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): $CompoundTag
public "setValidFaceModes"(...arg0: ($IFacingComponent$FaceMode$$Type)[]): $SidedFluidTankComponent<(T)>
public "disableFacingAddon"(): $SidedFluidTankComponent<(T)>
public "getFacingHandlerX"(): integer
public "getFacingHandlerY"(): integer
public "setFacingHandlerPos"(arg0: integer, arg1: integer): $IFacingComponent
public "work"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type, arg3: integer): boolean
public "setColor"(arg0: integer): $SidedFluidTankComponent<(T)>
public "setColor"(arg0: $DyeColor$$Type): $SidedFluidTankComponent<(T)>
public "getColor"(): integer
public "getRectangle"(arg0: $IAsset$$Type): $Rectangle
public "getName"(): StringJS
get "screenAddons"(): $List<($IFactory<($IScreenAddon)>)>
get "facingModes"(): $Map<($FacingUtil$Sideness), ($IFacingComponent$FaceMode)>
get "validFacingModes"(): ($IFacingComponent$FaceMode)[]
set "validFaceModes"(value: ($IFacingComponent$FaceMode$$Type)[])
get "facingHandlerX"(): integer
get "facingHandlerY"(): integer
set "color"(value: integer)
set "color"(value: $DyeColor$$Type)
get "color"(): integer
get "name"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SidedFluidTankComponent$$Type<T> = ($SidedFluidTankComponent<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SidedFluidTankComponent$$Original<T> = $SidedFluidTankComponent<(T)>;}
declare module "com.hrznstudio.titanium.component.inventory.InventoryComponent" {
import {$BiPredicate, $BiPredicate$$Type} from "java.util.function.BiPredicate"
import {$Map} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Color, $Color$$Type} from "java.awt.Color"
import {$IComponentHarness, $IComponentHarness$$Type} from "com.hrznstudio.titanium.component.IComponentHarness"
import {$List} from "java.util.List"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$IFactory} from "com.hrznstudio.titanium.api.IFactory"
import {$IContainerAddon} from "com.hrznstudio.titanium.container.addon.IContainerAddon"
import {$IScreenAddon} from "com.hrznstudio.titanium.api.client.IScreenAddon"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$BiConsumer, $BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$DyeColor$$Type} from "net.minecraft.world.item.DyeColor"
import {$IScreenAddonProvider$$Interface} from "com.hrznstudio.titanium.api.client.IScreenAddonProvider"
import {$IContainerAddonProvider$$Interface} from "com.hrznstudio.titanium.container.addon.IContainerAddonProvider"
import {$Pair, $Pair$$Type} from "org.apache.commons.lang3.tuple.Pair"
import {$ItemStackHandler} from "net.neoforged.neoforge.items.ItemStackHandler"

export class $InventoryComponent<T extends $IComponentHarness> extends $ItemStackHandler implements $IScreenAddonProvider$$Interface, $IContainerAddonProvider$$Interface {
constructor(arg0: StringJS, arg1: integer, arg2: integer, arg3: integer)

public "getScreenAddons"(): $List<($IFactory<($IScreenAddon)>)>
public "getContainerAddons"(): $List<($IFactory<($IContainerAddon)>)>
public "getXPos"(): integer
public "getSlotPosition"(): $Function<(integer), ($Pair<(integer), (integer)>)>
public "getYPos"(): integer
public "setInputFilter"(arg0: $BiPredicate$$Type<($ItemStack), (integer)>): $InventoryComponent<(T)>
public "setOnSlotChanged"(arg0: $BiConsumer$$Type<($ItemStack), (integer)>): $InventoryComponent<(T)>
public "setSlotLimit"(arg0: integer, arg1: integer): $InventoryComponent<(T)>
public "setSlotLimit"(arg0: integer): $InventoryComponent<(T)>
public "setComponentHarness"(arg0: T): $InventoryComponent<(T)>
public "setColorGuiEnabled"(arg0: boolean): $InventoryComponent<(T)>
public "setOutputFilter"(arg0: $BiPredicate$$Type<($ItemStack), (integer)>): $InventoryComponent<(T)>
public "getItemStackForSlotRendering"(arg0: integer): $ItemStack
public "setYPos"(arg0: integer): void
public "getComponentHarness"(): T
public "getInsertPredicate"(): $BiPredicate<($ItemStack), (integer)>
public "getExtractPredicate"(): $BiPredicate<($ItemStack), (integer)>
public "getOnSlotChanged"(): $BiConsumer<($ItemStack), (integer)>
public "isColorGuiEnabled"(): boolean
public "getSlotToColorRenderMap"(): $Map<(integer), ($Color)>
public "setSlotToItemStackRender"(arg0: integer, arg1: $ItemStack$$Type): $InventoryComponent<(T)>
public "setSlotToColorRender"(arg0: integer, arg1: $Color$$Type): $InventoryComponent<(T)>
public "setSlotToColorRender"(arg0: integer, arg1: integer): $InventoryComponent<(T)>
public "setSlotToColorRender"(arg0: integer, arg1: $DyeColor$$Type): $InventoryComponent<(T)>
public "getColorForSlotRendering"(arg0: integer): $Color
public "getSlotVisiblePredicate"(): $Predicate<(integer)>
public "setSlotVisiblePredicate"(arg0: $Predicate$$Type<(integer)>): $InventoryComponent<(T)>
public "setSlotPosition"(arg0: $Function$$Type<(integer), ($Pair$$Type<(integer), (integer)>)>): $InventoryComponent<(T)>
public "setRange"(arg0: integer, arg1: integer): $InventoryComponent<(T)>
public "setXPos"(arg0: integer): void
public "getName"(): StringJS
public "insertItem"(arg0: integer, arg1: $ItemStack$$Type, arg2: boolean): $ItemStack
public "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
public "getSlotLimit"(arg0: integer): integer
public "isItemValid"(arg0: integer, arg1: $ItemStack$$Type): boolean
public "getXSize"(): integer
public "getYSize"(): integer
public "canInteract"(): boolean
get "screenAddons"(): $List<($IFactory<($IScreenAddon)>)>
get "containerAddons"(): $List<($IFactory<($IContainerAddon)>)>
get "XPos"(): integer
get "slotPosition"(): $Function<(integer), ($Pair<(integer), (integer)>)>
get "YPos"(): integer
set "inputFilter"(value: $BiPredicate$$Type<($ItemStack), (integer)>)
set "onSlotChanged"(value: $BiConsumer$$Type<($ItemStack), (integer)>)
set "slotLimit"(value: integer)
set "componentHarness"(value: T)
set "colorGuiEnabled"(value: boolean)
set "outputFilter"(value: $BiPredicate$$Type<($ItemStack), (integer)>)
set "YPos"(value: integer)
get "componentHarness"(): T
get "insertPredicate"(): $BiPredicate<($ItemStack), (integer)>
get "extractPredicate"(): $BiPredicate<($ItemStack), (integer)>
get "onSlotChanged"(): $BiConsumer<($ItemStack), (integer)>
get "colorGuiEnabled"(): boolean
get "slotToColorRenderMap"(): $Map<(integer), ($Color)>
get "slotVisiblePredicate"(): $Predicate<(integer)>
set "slotVisiblePredicate"(value: $Predicate$$Type<(integer)>)
set "slotPosition"(value: $Function$$Type<(integer), ($Pair$$Type<(integer), (integer)>)>)
set "XPos"(value: integer)
get "name"(): StringJS
get "XSize"(): integer
get "YSize"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InventoryComponent$$Type<T> = ($InventoryComponent<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $InventoryComponent$$Original<T> = $InventoryComponent<(T)>;}
declare module "com.hrznstudio.titanium.component.fluid.FluidTankComponent" {
import {$IFluidHandler$FluidAction$$Type} from "net.neoforged.neoforge.fluids.capability.IFluidHandler$FluidAction"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$IComponentHarness, $IComponentHarness$$Type} from "com.hrznstudio.titanium.component.IComponentHarness"
import {$List} from "java.util.List"
import {$IFactory} from "com.hrznstudio.titanium.api.IFactory"
import {$FluidTankComponent$Action, $FluidTankComponent$Action$$Type} from "com.hrznstudio.titanium.component.fluid.FluidTankComponent$Action"
import {$Runnable$$Type} from "java.lang.Runnable"
import {$FluidStack, $FluidStack$$Type} from "net.neoforged.neoforge.fluids.FluidStack"
import {$IContainerAddon} from "com.hrznstudio.titanium.container.addon.IContainerAddon"
import {$INBTSerializable$$Interface} from "net.neoforged.neoforge.common.util.INBTSerializable"
import {$FluidTankComponent$Type, $FluidTankComponent$Type$$Type} from "com.hrznstudio.titanium.component.fluid.FluidTankComponent$Type"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$IScreenAddon} from "com.hrznstudio.titanium.api.client.IScreenAddon"
import {$FluidTank} from "net.neoforged.neoforge.fluids.capability.templates.FluidTank"
import {$Tag$$Type} from "net.minecraft.nbt.Tag"
import {$IContainerAddonProvider$$Interface} from "com.hrznstudio.titanium.container.addon.IContainerAddonProvider"
import {$IScreenAddonProvider$$Interface} from "com.hrznstudio.titanium.api.client.IScreenAddonProvider"

export class $FluidTankComponent<T extends $IComponentHarness> extends $FluidTank implements $IScreenAddonProvider$$Interface, $IContainerAddonProvider$$Interface, $INBTSerializable$$Interface<($CompoundTag)> {
constructor(arg0: StringJS, arg1: integer, arg2: integer, arg3: integer)

public "getScreenAddons"(): $List<($IFactory<($IScreenAddon)>)>
public "getContainerAddons"(): $List<($IFactory<($IContainerAddon)>)>
public "drainForced"(arg0: integer, arg1: $IFluidHandler$FluidAction$$Type): $FluidStack
public "drainForced"(arg0: $FluidStack$$Type, arg1: $IFluidHandler$FluidAction$$Type): $FluidStack
public "setFluidStack"(arg0: $FluidStack$$Type): void
public "getPosX"(): integer
public "getPosY"(): integer
public "setComponentHarness"(arg0: T): $FluidTankComponent<(T)>
public "getComponentHarness"(): T
public "getTankAction"(): $FluidTankComponent$Action
public "getTankType"(): $FluidTankComponent$Type
public "setTankType"(arg0: $FluidTankComponent$Type$$Type): $FluidTankComponent<(T)>
public "setOnContentChange"(arg0: $Runnable$$Type): $FluidTankComponent<(T)>
public "fillForced"(arg0: $FluidStack$$Type, arg1: $IFluidHandler$FluidAction$$Type): integer
public "setTankAction"(arg0: $FluidTankComponent$Action$$Type): $FluidTankComponent<(T)>
public "drain"(arg0: $FluidStack$$Type, arg1: $IFluidHandler$FluidAction$$Type): $FluidStack
public "drain"(arg0: integer, arg1: $IFluidHandler$FluidAction$$Type): $FluidStack
public "getName"(): StringJS
public "fill"(arg0: $FluidStack$$Type, arg1: $IFluidHandler$FluidAction$$Type): integer
public "deserializeNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $Tag$$Type): void
public "deserializeNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): void
public "serializeNBT"(arg0: $HolderLookup$Provider$$Type): $CompoundTag
public "canInteract"(): boolean
get "screenAddons"(): $List<($IFactory<($IScreenAddon)>)>
get "containerAddons"(): $List<($IFactory<($IContainerAddon)>)>
set "fluidStack"(value: $FluidStack$$Type)
get "posX"(): integer
get "posY"(): integer
set "componentHarness"(value: T)
get "componentHarness"(): T
get "tankAction"(): $FluidTankComponent$Action
get "tankType"(): $FluidTankComponent$Type
set "tankType"(value: $FluidTankComponent$Type$$Type)
set "onContentChange"(value: $Runnable$$Type)
set "tankAction"(value: $FluidTankComponent$Action$$Type)
get "name"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidTankComponent$$Type<T> = ($FluidTankComponent<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FluidTankComponent$$Original<T> = $FluidTankComponent<(T)>;}
declare module "com.hrznstudio.titanium.component.sideness.IFacingComponent$FaceMode" {
import {$Enum} from "java.lang.Enum"
import {$StateButtonInfo} from "com.hrznstudio.titanium.client.screen.addon.StateButtonInfo"
import {$ChatFormatting} from "net.minecraft.ChatFormatting"

export class $IFacingComponent$FaceMode extends $Enum<($IFacingComponent$FaceMode)> {
static readonly "PULL": $IFacingComponent$FaceMode
static readonly "ENABLED": $IFacingComponent$FaceMode
static readonly "NONE": $IFacingComponent$FaceMode
static readonly "PUSH": $IFacingComponent$FaceMode

public "allowsConnection"(): boolean
public "getInfo"(arg0: integer): $StateButtonInfo
public static "values"(): ($IFacingComponent$FaceMode)[]
public static "valueOf"(arg0: StringJS): $IFacingComponent$FaceMode
public "getIndex"(): integer
public "getColor"(): $ChatFormatting
get "index"(): integer
get "color"(): $ChatFormatting
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFacingComponent$FaceMode$$Type = (("none") | ("enabled") | ("push") | ("pull"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IFacingComponent$FaceMode$$Original = $IFacingComponent$FaceMode;}
declare module "com.hrznstudio.titanium.component.filter.MultiFilterComponent" {
import {$IFilter} from "com.hrznstudio.titanium.api.filter.IFilter"
import {$IComponentHandler$$Interface} from "com.hrznstudio.titanium.component.IComponentHandler"
import {$IScreenAddon} from "com.hrznstudio.titanium.api.client.IScreenAddon"
import {$List} from "java.util.List"
import {$IFactory} from "com.hrznstudio.titanium.api.IFactory"
import {$IScreenAddonProvider$$Interface} from "com.hrznstudio.titanium.api.client.IScreenAddonProvider"

export class $MultiFilterComponent implements $IScreenAddonProvider$$Interface, $IComponentHandler$$Interface {
readonly "filters": $List<($IFilter<(object)>)>

constructor()

public "getScreenAddons"(): $List<($IFactory<($IScreenAddon)>)>
public "add"(...arg0: (any)[]): void
public "getFilters"(): $List<($IFilter<(object)>)>
get "screenAddons"(): $List<($IFactory<($IScreenAddon)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiFilterComponent$$Type = ($MultiFilterComponent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MultiFilterComponent$$Original = $MultiFilterComponent;}
declare module "com.hrznstudio.titanium.component.fluid.MultiTankComponent$MultiTankCapabilityHandler" {
import {$IFluidHandler$FluidAction$$Type} from "net.neoforged.neoforge.fluids.capability.IFluidHandler$FluidAction"
import {$IComponentHarness} from "com.hrznstudio.titanium.component.IComponentHarness"
import {$List$$Type} from "java.util.List"
import {$IFluidHandler$$Interface} from "net.neoforged.neoforge.fluids.capability.IFluidHandler"
import {$FluidStack, $FluidStack$$Type} from "net.neoforged.neoforge.fluids.FluidStack"
import {$FluidTankComponent$$Type} from "com.hrznstudio.titanium.component.fluid.FluidTankComponent"

export class $MultiTankComponent$MultiTankCapabilityHandler<T extends $IComponentHarness> implements $IFluidHandler$$Interface {
constructor(arg0: $List$$Type<($FluidTankComponent$$Type<(T)>)>)

public "getTanks"(): integer
public "getFluidInTank"(arg0: integer): $FluidStack
public "getTankCapacity"(arg0: integer): integer
public "isFluidValid"(arg0: integer, arg1: $FluidStack$$Type): boolean
public "drain"(arg0: $FluidStack$$Type, arg1: $IFluidHandler$FluidAction$$Type): $FluidStack
public "drain"(arg0: integer, arg1: $IFluidHandler$FluidAction$$Type): $FluidStack
public "isEmpty"(): boolean
public "fill"(arg0: $FluidStack$$Type, arg1: $IFluidHandler$FluidAction$$Type): integer
get "tanks"(): integer
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiTankComponent$MultiTankCapabilityHandler$$Type<T> = ($MultiTankComponent$MultiTankCapabilityHandler<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MultiTankComponent$MultiTankCapabilityHandler$$Original<T> = $MultiTankComponent$MultiTankCapabilityHandler<(T)>;}
declare module "com.hrznstudio.titanium.component.sideness.IFacingComponentHarness" {
import {$IFacingComponent} from "com.hrznstudio.titanium.component.sideness.IFacingComponent"
import {$IComponentHarness$$Interface} from "com.hrznstudio.titanium.component.IComponentHarness"
import {$Level} from "net.minecraft.world.level.Level"

export interface $IFacingComponentHarness$$Interface extends $IComponentHarness$$Interface {
get "componentWorld"(): $Level
}

export class $IFacingComponentHarness implements $IFacingComponentHarness$$Interface {
 "getHandlerFromName"(arg0: StringJS): $IFacingComponent
 "markComponentDirty"(): void
 "getComponentWorld"(): $Level
 "markComponentForUpdate"(arg0: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFacingComponentHarness$$Type = ($IFacingComponentHarness);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IFacingComponentHarness$$Original = $IFacingComponentHarness;}
declare module "com.hrznstudio.titanium.component.progress.ProgressBarComponent$BarDirection" {
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$Enum} from "java.lang.Enum"
import {$IAssetProvider$$Type} from "com.hrznstudio.titanium.client.screen.asset.IAssetProvider"
import {$IComponentHarness} from "com.hrznstudio.titanium.component.IComponentHarness"
import {$Screen$$Type} from "net.minecraft.client.gui.screens.Screen"
import {$ProgressBarScreenAddon$$Type} from "com.hrznstudio.titanium.client.screen.addon.ProgressBarScreenAddon"

export class $ProgressBarComponent$BarDirection extends $Enum<($ProgressBarComponent$BarDirection)> {
static readonly "VERTICAL_UP": $ProgressBarComponent$BarDirection
static readonly "ARROW_RIGHT": $ProgressBarComponent$BarDirection
static readonly "ARROW_DOWN": $ProgressBarComponent$BarDirection

public static "values"(): ($ProgressBarComponent$BarDirection)[]
public static "valueOf"(arg0: StringJS): $ProgressBarComponent$BarDirection
public "render"<T extends $IComponentHarness>(arg0: $GuiGraphics$$Type, arg1: $Screen$$Type, arg2: integer, arg3: integer, arg4: $IAssetProvider$$Type, arg5: $ProgressBarScreenAddon$$Type<(T)>): void
public "getXSize"(arg0: $IAssetProvider$$Type): integer
public "getYSize"(arg0: $IAssetProvider$$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ProgressBarComponent$BarDirection$$Type = (("vertical_up") | ("arrow_right") | ("arrow_down"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ProgressBarComponent$BarDirection$$Original = $ProgressBarComponent$BarDirection;}
declare module "com.hrznstudio.titanium.component.inventory.MultiInventoryComponent$MultiInvCapabilityHandler" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$IComponentHarness} from "com.hrznstudio.titanium.component.IComponentHarness"
import {$List$$Type} from "java.util.List"
import {$InventoryComponent, $InventoryComponent$$Type} from "com.hrznstudio.titanium.component.inventory.InventoryComponent"
import {$ItemStackHandler} from "net.neoforged.neoforge.items.ItemStackHandler"

export class $MultiInventoryComponent$MultiInvCapabilityHandler<T extends $IComponentHarness> extends $ItemStackHandler {
constructor(arg0: $List$$Type<($InventoryComponent$$Type<(T)>)>)

public "getRelativeSlot"(arg0: $InventoryComponent$$Type<(T)>, arg1: integer): integer
public "getFromSlot"(arg0: integer): $InventoryComponent<(T)>
public "getSlots"(): integer
public "getStackInSlot"(arg0: integer): $ItemStack
public "insertItem"(arg0: integer, arg1: $ItemStack$$Type, arg2: boolean): $ItemStack
public "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
public "getSlotLimit"(arg0: integer): integer
public "setStackInSlot"(arg0: integer, arg1: $ItemStack$$Type): void
get "slots"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiInventoryComponent$MultiInvCapabilityHandler$$Type<T> = ($MultiInventoryComponent$MultiInvCapabilityHandler<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MultiInventoryComponent$MultiInvCapabilityHandler$$Original<T> = $MultiInventoryComponent$MultiInvCapabilityHandler<(T)>;}
declare module "com.hrznstudio.titanium.component.inventory.MultiInventoryComponent" {
import {$Optional} from "java.util.Optional"
import {$IComponentHarness} from "com.hrznstudio.titanium.component.IComponentHarness"
import {$List} from "java.util.List"
import {$IFactory} from "com.hrznstudio.titanium.api.IFactory"
import {$MultiInventoryComponent$MultiInvCapabilityHandler} from "com.hrznstudio.titanium.component.inventory.MultiInventoryComponent$MultiInvCapabilityHandler"
import {$IContainerAddon} from "com.hrznstudio.titanium.container.addon.IContainerAddon"
import {$HashSet} from "java.util.HashSet"
import {$FacingUtil$Sideness$$Type} from "com.hrznstudio.titanium.util.FacingUtil$Sideness"
import {$IComponentHandler$$Interface} from "com.hrznstudio.titanium.component.IComponentHandler"
import {$IScreenAddon} from "com.hrznstudio.titanium.api.client.IScreenAddon"
import {$ICapabilityHolder$$Interface} from "com.hrznstudio.titanium.component.sideness.ICapabilityHolder"
import {$InventoryComponent} from "com.hrznstudio.titanium.component.inventory.InventoryComponent"
import {$IContainerAddonProvider$$Interface} from "com.hrznstudio.titanium.container.addon.IContainerAddonProvider"
import {$IScreenAddonProvider$$Interface} from "com.hrznstudio.titanium.api.client.IScreenAddonProvider"

export class $MultiInventoryComponent<T extends $IComponentHarness> implements $IScreenAddonProvider$$Interface, $IContainerAddonProvider$$Interface, $ICapabilityHolder$$Interface<($MultiInventoryComponent$MultiInvCapabilityHandler<(T)>)>, $IComponentHandler$$Interface {
constructor()

public "getInventoryHandlers"(): $HashSet<($InventoryComponent<(T)>)>
public "getScreenAddons"(): $List<($IFactory<($IScreenAddon)>)>
public "getContainerAddons"(): $List<($IFactory<($IContainerAddon)>)>
public "getCapabilityForSide"(arg0: $FacingUtil$Sideness$$Type): $Optional<($MultiInventoryComponent$MultiInvCapabilityHandler<(T)>)>
public "handleFacingChange"(arg0: StringJS, arg1: $FacingUtil$Sideness$$Type, arg2: integer): boolean
public "rebuildCapability"(arg0: ($FacingUtil$Sideness$$Type)[]): void
public "add"(...arg0: (any)[]): void
public "canInteract"(): boolean
get "inventoryHandlers"(): $HashSet<($InventoryComponent<(T)>)>
get "screenAddons"(): $List<($IFactory<($IScreenAddon)>)>
get "containerAddons"(): $List<($IFactory<($IContainerAddon)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiInventoryComponent$$Type<T> = ($MultiInventoryComponent<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MultiInventoryComponent$$Original<T> = $MultiInventoryComponent<(T)>;}
