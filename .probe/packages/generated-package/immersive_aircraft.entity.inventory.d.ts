declare module "immersive_aircraft.entity.inventory.SparseSimpleInventory" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$SimpleContainer} from "net.minecraft.world.SimpleContainer"
import {$ListTag, $ListTag$$Type} from "net.minecraft.nbt.ListTag"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$InventoryVehicleEntity$$Type} from "immersive_aircraft.entity.InventoryVehicleEntity"

export class $SparseSimpleInventory extends $SimpleContainer {
constructor(size: integer)

public "tick"(entity: $InventoryVehicleEntity$$Type): void
public "createTag"(levelRegistry: $HolderLookup$Provider$$Type): $ListTag
public "fromTag"(tag: $ListTag$$Type, levelRegistry: $HolderLookup$Provider$$Type): void
public static "stillValidBlockEntity"(arg0: $BlockEntity$$Type, arg1: $Player$$Type): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$$Type, arg1: $Player$$Type, arg2: float): boolean
public static "tryClear"(arg0: any): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SparseSimpleInventory$$Type = ($SparseSimpleInventory);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SparseSimpleInventory$$Original = $SparseSimpleInventory;}
declare module "immersive_aircraft.entity.inventory.VehicleInventoryDescription" {
import {$Map} from "java.util.Map"
import {$RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Rect2iCommon} from "immersive_aircraft.util.Rect2iCommon"
import {$List} from "java.util.List"
import {$JsonObject$$Type} from "com.google.gson.JsonObject"
import {$JsonArray$$Type} from "com.google.gson.JsonArray"
import {$SlotDescription, $SlotDescription$$Type} from "immersive_aircraft.entity.inventory.slots.SlotDescription"
import {$SlotDescription$SlotDescriptionDecoder, $SlotDescription$SlotDescriptionDecoder$$Type} from "immersive_aircraft.entity.inventory.slots.SlotDescription$SlotDescriptionDecoder"
import {$SlotDescription$SlotDescriptionFactory, $SlotDescription$SlotDescriptionFactory$$Type} from "immersive_aircraft.entity.inventory.slots.SlotDescription$SlotDescriptionFactory"

export class $VehicleInventoryDescription {
static readonly "DYE": StringJS
static readonly "INVENTORY": StringJS
static readonly "BANNER": StringJS
static readonly "SLOT_DECODER": $Map<(StringJS), ($SlotDescription$SlotDescriptionDecoder)>
static readonly "SLOT_TYPES": $Map<(StringJS), ($SlotDescription$SlotDescriptionFactory)>
static readonly "BOILER": StringJS
static readonly "UPGRADE": StringJS
static readonly "BOOSTER": StringJS
static readonly "WEAPON": StringJS
static readonly "INGREDIENT": StringJS

constructor()
constructor(inventorySlots: $JsonArray$$Type)
constructor(buffer: $RegistryFriendlyByteBuf$$Type)

public "addRectangle"(x: integer, y: integer, w: integer, h: integer): $VehicleInventoryDescription
public static "registerSlotType"(name: StringJS, slotFactory: $SlotDescription$SlotDescriptionFactory$$Type, slotDecoder: $SlotDescription$SlotDescriptionDecoder$$Type): StringJS
public "getLastSyncIndex"(): integer
public "getRectangles"(): $List<($Rect2iCommon)>
public "addSlot"(slotDescription: $SlotDescription$$Type): $VehicleInventoryDescription
public "getInventorySize"(): integer
public "addSlots"(type: StringJS, x: integer, y: integer, cols: integer, rows: integer, boxed: boolean, json: $JsonObject$$Type): $VehicleInventoryDescription
public "getHeight"(): integer
public "encode"(buffer: $RegistryFriendlyByteBuf$$Type): void
public "build"(): $VehicleInventoryDescription
public "getSlots"(): $List<($SlotDescription)>
public "getSlots"(type: StringJS): $List<($SlotDescription)>
get "lastSyncIndex"(): integer
get "rectangles"(): $List<($Rect2iCommon)>
get "inventorySize"(): integer
get "height"(): integer
get "slots"(): $List<($SlotDescription)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VehicleInventoryDescription$$Type = ($VehicleInventoryDescription);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $VehicleInventoryDescription$$Original = $VehicleInventoryDescription;}
