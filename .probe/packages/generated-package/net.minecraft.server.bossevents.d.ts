declare module "net.minecraft.server.bossevents.CustomBossEvents" {
import {$CustomBossEvent, $CustomBossEvent$$Type} from "net.minecraft.server.bossevents.CustomBossEvent"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Collection} from "java.util.Collection"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $CustomBossEvents {
constructor()

public "onPlayerDisconnect"(arg0: $ServerPlayer$$Type): void
public "getEvents"(): $Collection<($CustomBossEvent)>
public "remove"(arg0: $CustomBossEvent$$Type): void
public "get"(arg0: $ResourceLocation$$Type): $CustomBossEvent
public "load"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "save"(arg0: $HolderLookup$Provider$$Type): $CompoundTag
public "create"(arg0: $ResourceLocation$$Type, arg1: $Component$$Type): $CustomBossEvent
public "getIds"(): $Collection<($ResourceLocation)>
public "onPlayerConnect"(arg0: $ServerPlayer$$Type): void
get "events"(): $Collection<($CustomBossEvent)>
get "ids"(): $Collection<($ResourceLocation)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomBossEvents$$Type = ($CustomBossEvents);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CustomBossEvents$$Original = $CustomBossEvents;}
declare module "net.minecraft.server.bossevents.CustomBossEvent" {
import {$ServerBossEvent} from "net.minecraft.server.level.ServerBossEvent"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Collection$$Type} from "java.util.Collection"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$UUID$$Type} from "java.util.UUID"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $CustomBossEvent extends $ServerBossEvent {
constructor(arg0: $ResourceLocation$$Type, arg1: $Component$$Type)

public "getTextId"(): $ResourceLocation
public "setPlayers"(arg0: $Collection$$Type<($ServerPlayer$$Type)>): boolean
public "removeAllPlayers"(): void
public "onPlayerDisconnect"(arg0: $ServerPlayer$$Type): void
public "addOfflinePlayer"(arg0: $UUID$$Type): void
public static "load"(arg0: $CompoundTag$$Type, arg1: $ResourceLocation$$Type, arg2: $HolderLookup$Provider$$Type): $CustomBossEvent
public "getValue"(): integer
public "save"(arg0: $HolderLookup$Provider$$Type): $CompoundTag
public "setValue"(arg0: integer): void
public "getDisplayName"(): $Component
public "getMax"(): integer
public "setMax"(arg0: integer): void
public "addPlayer"(arg0: $ServerPlayer$$Type): void
public "removePlayer"(arg0: $ServerPlayer$$Type): void
public "onPlayerConnect"(arg0: $ServerPlayer$$Type): void
get "textId"(): $ResourceLocation
set "players"(value: $Collection$$Type<($ServerPlayer$$Type)>)
get "value"(): integer
set "value"(value: integer)
get "displayName"(): $Component
get "max"(): integer
set "max"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomBossEvent$$Type = ($CustomBossEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CustomBossEvent$$Original = $CustomBossEvent;}
