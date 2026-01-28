declare module "de.maxhenkel.gravestone.corelib.death.PlayerDeathEvent" {
import {$Death, $Death$$Type} from "de.maxhenkel.gravestone.corelib.death.Death"
import {$DamageSource, $DamageSource$$Type} from "net.minecraft.world.damagesource.DamageSource"
import {$Event} from "net.neoforged.bus.api.Event"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"

export class $PlayerDeathEvent extends $Event {
constructor(arg0: $Death$$Type, arg1: $ServerPlayer$$Type, arg2: $DamageSource$$Type)

public "getDeath"(): $Death
public "storeDeath"(): void
public "removeDrops"(): void
public "getSource"(): $DamageSource
public "getPlayer"(): $ServerPlayer
get "death"(): $Death
get "source"(): $DamageSource
get "player"(): $ServerPlayer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerDeathEvent$$Type = ($PlayerDeathEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlayerDeathEvent$$Original = $PlayerDeathEvent;}
declare module "de.maxhenkel.gravestone.corelib.block.IItemBlock" {
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"

export interface $IItemBlock$$Interface {

(): $Item$$Type
}

export class $IItemBlock implements $IItemBlock$$Interface {
 "toItem"(): $Item
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IItemBlock$$Type = (() => $Item$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IItemBlock$$Original = $IItemBlock;}
declare module "de.maxhenkel.gravestone.corelib.death.Death" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Collection$$Type} from "java.util.Collection"
import {$UUID} from "java.util.UUID"
import {$ItemEntity$$Type} from "net.minecraft.world.entity.item.ItemEntity"
import {$BlockPos} from "net.minecraft.core.BlockPos"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $Death {
public "getPosX"(): double
public "getPosY"(): double
public "getExperience"(): integer
public "getEquipment"(): $NonNullList<($ItemStack)>
public static "fromNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): $Death
public "getPlayerName"(): StringJS
public "getPlayerUUID"(): $UUID
public "getMainInventory"(): $NonNullList<($ItemStack)>
public "getArmorInventory"(): $NonNullList<($ItemStack)>
public "getOffHandInventory"(): $NonNullList<($ItemStack)>
public "getAdditionalItems"(): $NonNullList<($ItemStack)>
public "getDimension"(): StringJS
public "getPosZ"(): double
public static "fromPlayer"(arg0: $Player$$Type): $Death
public "processDrops"(arg0: $Collection$$Type<($ItemEntity$$Type)>): void
public "getTimestamp"(): long
public "toString"(): StringJS
public "getId"(): $UUID
public "getModel"(): byte
public "getBlockPos"(): $BlockPos
public "toNBT"(arg0: $HolderLookup$Provider$$Type, arg1: boolean): $CompoundTag
public "toNBT"(arg0: $HolderLookup$Provider$$Type): $CompoundTag
public "getAllItems"(): $NonNullList<($ItemStack)>
get "posX"(): double
get "posY"(): double
get "experience"(): integer
get "equipment"(): $NonNullList<($ItemStack)>
get "playerName"(): StringJS
get "playerUUID"(): $UUID
get "mainInventory"(): $NonNullList<($ItemStack)>
get "armorInventory"(): $NonNullList<($ItemStack)>
get "offHandInventory"(): $NonNullList<($ItemStack)>
get "additionalItems"(): $NonNullList<($ItemStack)>
get "dimension"(): StringJS
get "posZ"(): double
get "timestamp"(): long
get "id"(): $UUID
get "model"(): byte
get "blockPos"(): $BlockPos
get "allItems"(): $NonNullList<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Death$$Type = ($Death);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Death$$Original = $Death;}
