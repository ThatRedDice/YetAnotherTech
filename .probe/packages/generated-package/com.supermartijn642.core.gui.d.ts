declare module "com.supermartijn642.core.gui.BaseContainer" {
import {$Slot} from "net.minecraft.world.inventory.Slot"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ContainerListener} from "net.minecraft.world.inventory.ContainerListener"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$BaseContainerType, $BaseContainerType$$Type} from "com.supermartijn642.core.gui.BaseContainerType"
import {$AbstractContainerMenu} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$List} from "java.util.List"
import {$Level} from "net.minecraft.world.level.Level"
import {$NonNullList} from "net.minecraft.core.NonNullList"

export class $BaseContainer extends $AbstractContainerMenu {
readonly "level": $Level
 "stateId": integer
static readonly "QUICKCRAFT_HEADER_START": integer
readonly "remoteSlots": $NonNullList<($ItemStack)>
 "lastSlots": $NonNullList<($ItemStack)>
static readonly "QUICKCRAFT_HEADER_CONTINUE": integer
static readonly "QUICKCRAFT_TYPE_CLONE": integer
static readonly "QUICKCRAFT_TYPE_GREEDY": integer
static readonly "QUICKCRAFT_HEADER_END": integer
readonly "slots": $NonNullList<($Slot)>
static readonly "CARRIED_SLOT_SIZE": integer
static readonly "SLOT_CLICKED_OUTSIDE": integer
readonly "containerListeners": $List<($ContainerListener)>
 "containerId": integer
static readonly "QUICKCRAFT_TYPE_CHARITABLE": integer

constructor(type: $BaseContainerType$$Type<(never)>, player: $Player$$Type)

public "getContainerType"(): $BaseContainerType<(never)>
public "setContainerId"(id: integer): void
public "stillValid"(playerIn: $Player$$Type): boolean
get "containerType"(): $BaseContainerType<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseContainer$$Type = ($BaseContainer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BaseContainer$$Original = $BaseContainer;}
declare module "com.supermartijn642.core.gui.BaseContainerType" {
import {$LoomMenu} from "net.minecraft.world.inventory.LoomMenu"
import {$BaseContainer, $BaseContainer$$Type} from "com.supermartijn642.core.gui.BaseContainer"
import {$GrindstoneMenu} from "net.minecraft.world.inventory.GrindstoneMenu"
import {$CartographyTableMenu} from "net.minecraft.world.inventory.CartographyTableMenu"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$CraftingMenu} from "net.minecraft.world.inventory.CraftingMenu"
import {$BeaconMenu} from "net.minecraft.world.inventory.BeaconMenu"
import {$DispenserMenu} from "net.minecraft.world.inventory.DispenserMenu"
import {$AnvilMenu} from "net.minecraft.world.inventory.AnvilMenu"
import {$LecternMenu} from "net.minecraft.world.inventory.LecternMenu"
import {$FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$EnchantmentMenu} from "net.minecraft.world.inventory.EnchantmentMenu"
import {$SmokerMenu} from "net.minecraft.world.inventory.SmokerMenu"
import {$CrafterMenu} from "net.minecraft.world.inventory.CrafterMenu"
import {$ChestMenu} from "net.minecraft.world.inventory.ChestMenu"
import {$BiFunction$$Type} from "java.util.function.BiFunction"
import {$IContainerFactory$$Type} from "net.neoforged.neoforge.network.IContainerFactory"
import {$StonecutterMenu} from "net.minecraft.world.inventory.StonecutterMenu"
import {$AbstractContainerMenu} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$BlastFurnaceMenu} from "net.minecraft.world.inventory.BlastFurnaceMenu"
import {$ShulkerBoxMenu} from "net.minecraft.world.inventory.ShulkerBoxMenu"
import {$BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$MenuType} from "net.minecraft.world.inventory.MenuType"
import {$SmithingMenu} from "net.minecraft.world.inventory.SmithingMenu"
import {$BrewingStandMenu} from "net.minecraft.world.inventory.BrewingStandMenu"
import {$HopperMenu} from "net.minecraft.world.inventory.HopperMenu"
import {$FurnaceMenu} from "net.minecraft.world.inventory.FurnaceMenu"
import {$MerchantMenu} from "net.minecraft.world.inventory.MerchantMenu"

export class $BaseContainerType<T extends $BaseContainer> extends $MenuType<(T)> {
static readonly "ENCHANTMENT": $MenuType<($EnchantmentMenu)>
static readonly "LOOM": $MenuType<($LoomMenu)>
static readonly "BLAST_FURNACE": $MenuType<($BlastFurnaceMenu)>
static readonly "CARTOGRAPHY_TABLE": $MenuType<($CartographyTableMenu)>
static readonly "BEACON": $MenuType<($BeaconMenu)>
static readonly "MERCHANT": $MenuType<($MerchantMenu)>
static readonly "CRAFTER_3x3": $MenuType<($CrafterMenu)>
static readonly "FURNACE": $MenuType<($FurnaceMenu)>
static readonly "ANVIL": $MenuType<($AnvilMenu)>
static readonly "STONECUTTER": $MenuType<($StonecutterMenu)>
static readonly "GENERIC_3x3": $MenuType<($DispenserMenu)>
static readonly "CRAFTING": $MenuType<($CraftingMenu)>
static readonly "GENERIC_9x1": $MenuType<($ChestMenu)>
static readonly "GENERIC_9x2": $MenuType<($ChestMenu)>
static readonly "GENERIC_9x3": $MenuType<($ChestMenu)>
static readonly "GENERIC_9x4": $MenuType<($ChestMenu)>
static readonly "GENERIC_9x5": $MenuType<($ChestMenu)>
static readonly "GENERIC_9x6": $MenuType<($ChestMenu)>
static readonly "BREWING_STAND": $MenuType<($BrewingStandMenu)>
static readonly "SMOKER": $MenuType<($SmokerMenu)>
static readonly "SMITHING": $MenuType<($SmithingMenu)>
static readonly "HOPPER": $MenuType<($HopperMenu)>
static readonly "LECTERN": $MenuType<($LecternMenu)>
static readonly "GRINDSTONE": $MenuType<($GrindstoneMenu)>
static readonly "SHULKER_BOX": $MenuType<($ShulkerBoxMenu)>

public "writeContainer"(container: T, buffer: $FriendlyByteBuf$$Type): void
public static "create"<T extends $BaseContainer>(containerSerializer: $BiConsumer$$Type<(T), ($FriendlyByteBuf)>, containerDeserializer: $BiFunction$$Type<($Player), ($FriendlyByteBuf), (T)>): $BaseContainerType<(T)>
public static "create"<T extends $AbstractContainerMenu>(arg0: $IContainerFactory$$Type<(T)>): $MenuType<(T)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseContainerType$$Type<T> = ($BaseContainerType<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BaseContainerType$$Original<T> = $BaseContainerType<(T)>;}
declare module "com.supermartijn642.core.gui.ObjectBaseContainer" {
import {$Slot} from "net.minecraft.world.inventory.Slot"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ContainerListener} from "net.minecraft.world.inventory.ContainerListener"
import {$BaseContainerType$$Type} from "com.supermartijn642.core.gui.BaseContainerType"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$BaseContainer} from "com.supermartijn642.core.gui.BaseContainer"
import {$List} from "java.util.List"
import {$Level} from "net.minecraft.world.level.Level"
import {$NonNullList} from "net.minecraft.core.NonNullList"

export class $ObjectBaseContainer<T> extends $BaseContainer {
readonly "level": $Level
 "stateId": integer
static readonly "QUICKCRAFT_HEADER_START": integer
readonly "remoteSlots": $NonNullList<($ItemStack)>
 "lastSlots": $NonNullList<($ItemStack)>
static readonly "QUICKCRAFT_HEADER_CONTINUE": integer
static readonly "QUICKCRAFT_TYPE_CLONE": integer
static readonly "QUICKCRAFT_TYPE_GREEDY": integer
static readonly "QUICKCRAFT_HEADER_END": integer
readonly "slots": $NonNullList<($Slot)>
static readonly "CARRIED_SLOT_SIZE": integer
static readonly "SLOT_CLICKED_OUTSIDE": integer
readonly "containerListeners": $List<($ContainerListener)>
 "containerId": integer
static readonly "QUICKCRAFT_TYPE_CHARITABLE": integer

constructor(type: $BaseContainerType$$Type<(never)>, player: $Player$$Type)
constructor(type: $BaseContainerType$$Type<(never)>, player: $Player$$Type, alwaysRenewObject: boolean)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ObjectBaseContainer$$Type<T> = ($ObjectBaseContainer<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ObjectBaseContainer$$Original<T> = $ObjectBaseContainer<(T)>;}
declare module "com.supermartijn642.core.gui.BlockEntityBaseContainer" {
import {$Slot} from "net.minecraft.world.inventory.Slot"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ContainerListener} from "net.minecraft.world.inventory.ContainerListener"
import {$BaseContainerType$$Type} from "com.supermartijn642.core.gui.BaseContainerType"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$List} from "java.util.List"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$ObjectBaseContainer} from "com.supermartijn642.core.gui.ObjectBaseContainer"
import {$NonNullList} from "net.minecraft.core.NonNullList"

export class $BlockEntityBaseContainer<T extends $BlockEntity> extends $ObjectBaseContainer<(T)> {
readonly "level": $Level
 "stateId": integer
static readonly "QUICKCRAFT_HEADER_START": integer
readonly "remoteSlots": $NonNullList<($ItemStack)>
 "lastSlots": $NonNullList<($ItemStack)>
static readonly "QUICKCRAFT_HEADER_CONTINUE": integer
static readonly "QUICKCRAFT_TYPE_CLONE": integer
static readonly "QUICKCRAFT_TYPE_GREEDY": integer
static readonly "QUICKCRAFT_HEADER_END": integer
readonly "slots": $NonNullList<($Slot)>
static readonly "CARRIED_SLOT_SIZE": integer
static readonly "SLOT_CLICKED_OUTSIDE": integer
readonly "containerListeners": $List<($ContainerListener)>
 "containerId": integer
static readonly "QUICKCRAFT_TYPE_CHARITABLE": integer

constructor(type: $BaseContainerType$$Type<(never)>, player: $Player$$Type, blockEntityLevel: $Level$$Type, blockEntityPos: $BlockPos$$Type)
constructor(type: $BaseContainerType$$Type<(never)>, player: $Player$$Type, blockEntityPos: $BlockPos$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockEntityBaseContainer$$Type<T> = ($BlockEntityBaseContainer<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockEntityBaseContainer$$Original<T> = $BlockEntityBaseContainer<(T)>;}
