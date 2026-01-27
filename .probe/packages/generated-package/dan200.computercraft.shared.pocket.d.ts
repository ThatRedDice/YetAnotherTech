declare module "dan200.computercraft.shared.pocket.core.PocketServerComputer" {
import {$PocketBrain} from "dan200.computercraft.shared.pocket.core.PocketBrain"
import {$ServerComputer} from "dan200.computercraft.shared.computer.core.ServerComputer"
import {$MetricsObserver} from "dan200.computercraft.core.metrics.MetricsObserver"
import {$ComputerComponent} from "dan200.computercraft.api.component.ComputerComponent"

export class $PocketServerComputer extends $ServerComputer {
static readonly "METRICS": $ComputerComponent<($MetricsObserver)>

public "getBrain"(): $PocketBrain
get "brain"(): $PocketBrain
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PocketServerComputer$$Type = ($PocketServerComputer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PocketServerComputer$$Original = $PocketServerComputer;}
declare module "dan200.computercraft.shared.pocket.core.PocketHolder" {
import {$Vec3} from "net.minecraft.world.phys.Vec3"
import {$ServerComputer$$Type} from "dan200.computercraft.shared.computer.core.ServerComputer"
import {$ServerLevel} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos} from "net.minecraft.core.BlockPos"

export interface $PocketHolder$$Interface {
get "terminalAlwaysVisible"(): boolean
get "changed"(): void
}

export class $PocketHolder implements $PocketHolder$$Interface {
 "isTerminalAlwaysVisible"(): boolean
 "isValid"(arg0: $ServerComputer$$Type): boolean
 "level"(): $ServerLevel
 "pos"(): $Vec3
 "setChanged"(): void
 "blockPos"(): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PocketHolder$$Type = ($PocketHolder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PocketHolder$$Original = $PocketHolder;}
declare module "dan200.computercraft.shared.pocket.peripherals.PocketSpeaker" {
import {$IPocketAccess$$Type} from "dan200.computercraft.api.pocket.IPocketAccess"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Registry} from "net.minecraft.core.Registry"
import {$AbstractPocketUpgrade} from "dan200.computercraft.api.pocket.AbstractPocketUpgrade"
import {$IPocketUpgrade} from "dan200.computercraft.api.pocket.IPocketUpgrade"
import {$ResourceKey} from "net.minecraft.resources.ResourceKey"
import {$IPeripheral, $IPeripheral$$Type} from "dan200.computercraft.api.peripheral.IPeripheral"
import {$UpgradeType} from "dan200.computercraft.api.upgrades.UpgradeType"

export class $PocketSpeaker extends $AbstractPocketUpgrade {
constructor(arg0: $ItemStack$$Type)

public "createPeripheral"(arg0: $IPocketAccess$$Type): $IPeripheral
public "update"(arg0: $IPocketAccess$$Type, arg1: $IPeripheral$$Type): void
public "getType"(): $UpgradeType<($PocketSpeaker)>
public static "typeRegistry"(): $ResourceKey<($Registry<($UpgradeType<($IPocketUpgrade)>)>)>
public static "getDefaultAdjective"(arg0: $ResourceLocation$$Type): StringJS
get "type"(): $UpgradeType<($PocketSpeaker)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PocketSpeaker$$Type = ($PocketSpeaker);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PocketSpeaker$$Original = $PocketSpeaker;}
declare module "dan200.computercraft.shared.pocket.peripherals.PocketModem" {
import {$IPocketAccess$$Type} from "dan200.computercraft.api.pocket.IPocketAccess"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Registry} from "net.minecraft.core.Registry"
import {$AbstractPocketUpgrade} from "dan200.computercraft.api.pocket.AbstractPocketUpgrade"
import {$IPocketUpgrade} from "dan200.computercraft.api.pocket.IPocketUpgrade"
import {$ResourceKey} from "net.minecraft.resources.ResourceKey"
import {$IPeripheral, $IPeripheral$$Type} from "dan200.computercraft.api.peripheral.IPeripheral"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$UpgradeType} from "dan200.computercraft.api.upgrades.UpgradeType"

export class $PocketModem extends $AbstractPocketUpgrade {
static readonly "CODEC": $MapCodec<($PocketModem)>

constructor(arg0: $ItemStack$$Type, arg1: boolean)

public "createPeripheral"(arg0: $IPocketAccess$$Type): $IPeripheral
public "update"(arg0: $IPocketAccess$$Type, arg1: $IPeripheral$$Type): void
public "getType"(): $UpgradeType<($PocketModem)>
public static "typeRegistry"(): $ResourceKey<($Registry<($UpgradeType<($IPocketUpgrade)>)>)>
public static "getDefaultAdjective"(arg0: $ResourceLocation$$Type): StringJS
get "type"(): $UpgradeType<($PocketModem)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PocketModem$$Type = ($PocketModem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PocketModem$$Original = $PocketModem;}
declare module "dan200.computercraft.shared.pocket.core.PocketBrain" {
import {$UpgradeData, $UpgradeData$$Type} from "dan200.computercraft.api.upgrades.UpgradeData"
import {$IPocketAccess$$Interface} from "dan200.computercraft.api.pocket.IPocketAccess"
import {$DataComponentPatch, $DataComponentPatch$$Type} from "net.minecraft.core.component.DataComponentPatch"
import {$Vec3} from "net.minecraft.world.phys.Vec3"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ServerComputer$Properties$$Type} from "dan200.computercraft.shared.computer.core.ServerComputer$Properties"
import {$PocketServerComputer} from "dan200.computercraft.shared.pocket.core.PocketServerComputer"
import {$IPocketUpgrade, $IPocketUpgrade$$Type} from "dan200.computercraft.api.pocket.IPocketUpgrade"
import {$PocketHolder$$Type} from "dan200.computercraft.shared.pocket.core.PocketHolder"
import {$ServerLevel} from "net.minecraft.server.level.ServerLevel"
import {$Entity} from "net.minecraft.world.entity.Entity"

export class $PocketBrain implements $IPocketAccess$$Interface {
constructor(arg0: $PocketHolder$$Type, arg1: $UpgradeData$$Type<($IPocketUpgrade$$Type)>, arg2: integer, arg3: $ServerComputer$Properties$$Type)

public "getUpgrade"(): $UpgradeData<($IPocketUpgrade)>
public "setUpgrade"(arg0: $UpgradeData$$Type<($IPocketUpgrade$$Type)>): void
public "computer"(): $PocketServerComputer
public "getLight"(): integer
public "getUpgradeData"(): $DataComponentPatch
public "setColour"(arg0: integer): void
public "getColour"(): integer
public "updateHolder"(arg0: $PocketHolder$$Type): void
public "setUpgradeData"(arg0: $DataComponentPatch$$Type): void
public "invalidatePeripheral"(): void
public "getPosition"(): $Vec3
public "getLevel"(): $ServerLevel
public "getEntity"(): $Entity
public "setLight"(arg0: integer): void
public "updateItem"(arg0: $ItemStack$$Type): boolean
get "upgrade"(): $UpgradeData<($IPocketUpgrade)>
set "upgrade"(value: $UpgradeData$$Type<($IPocketUpgrade$$Type)>)
get "light"(): integer
get "upgradeData"(): $DataComponentPatch
set "colour"(value: integer)
get "colour"(): integer
set "upgradeData"(value: $DataComponentPatch$$Type)
get "position"(): $Vec3
get "level"(): $ServerLevel
get "entity"(): $Entity
set "light"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PocketBrain$$Type = ($PocketBrain);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PocketBrain$$Original = $PocketBrain;}
declare module "dan200.computercraft.shared.pocket.items.PocketComputerItem" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ItemEntity$$Type} from "net.minecraft.world.entity.item.ItemEntity"
import {$Component} from "net.minecraft.network.chat.Component"
import {$UpgradeData, $UpgradeData$$Type} from "dan200.computercraft.api.upgrades.UpgradeData"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$PocketBrain, $PocketBrain$$Type} from "dan200.computercraft.shared.pocket.core.PocketBrain"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$ServerComputer$$Type} from "dan200.computercraft.shared.computer.core.ServerComputer"
import {$IPocketUpgrade, $IPocketUpgrade$$Type} from "dan200.computercraft.api.pocket.IPocketUpgrade"
import {$PocketHolder$$Type} from "dan200.computercraft.shared.pocket.core.PocketHolder"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$ComputerFamily, $ComputerFamily$$Type} from "dan200.computercraft.shared.computer.core.ComputerFamily"

export class $PocketComputerItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type, arg1: $ComputerFamily$$Type)

public static "getUpgrade"(arg0: $ItemStack$$Type): $IPocketUpgrade
public static "setUpgrade"(arg0: $ItemStack$$Type, arg1: $UpgradeData$$Type<($IPocketUpgrade$$Type)>): void
public "inventoryTick"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $Entity$$Type, arg3: integer, arg4: boolean): void
public "onCraftedPostProcess"(arg0: $ItemStack$$Type, arg1: $Level$$Type): void
public "onEntityItemUpdate"(arg0: $ItemStack$$Type, arg1: $ItemEntity$$Type): boolean
public "getCreatorModId"(arg0: $ItemStack$$Type): StringJS
public static "getUpgradeWithData"(arg0: $ItemStack$$Type): $UpgradeData<($IPocketUpgrade)>
public "getOrCreateBrain"(arg0: $PocketHolder$$Type, arg1: $ItemStack$$Type): $PocketBrain
public static "isServerComputer"(arg0: $ServerComputer$$Type, arg1: $ItemStack$$Type): boolean
public "tick"(arg0: $ItemStack$$Type, arg1: $PocketHolder$$Type, arg2: $PocketBrain$$Type): void
public "getFamily"(): $ComputerFamily
public "getName"(arg0: $ItemStack$$Type): $Component
public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "getBrain"(arg0: $PocketHolder$$Type, arg1: $ItemStack$$Type): $PocketBrain
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "family"(): $ComputerFamily
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PocketComputerItem$$Type = ($PocketComputerItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PocketComputerItem$$Original = $PocketComputerItem;}
