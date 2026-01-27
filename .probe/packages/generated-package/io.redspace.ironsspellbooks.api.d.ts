declare module "io.redspace.ironsspellbooks.api.events.InscribeSpellEvent" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$SpellData, $SpellData$$Type} from "io.redspace.ironsspellbooks.api.spells.SpellData"
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$PlayerEvent} from "net.neoforged.neoforge.event.entity.player.PlayerEvent"
import {$Entity} from "net.minecraft.world.entity.Entity"

export class $InscribeSpellEvent extends $PlayerEvent implements $ICancellableEvent$$Interface {
constructor(arg0: $Player$$Type, arg1: $SpellData$$Type)

public "getSpellData"(): $SpellData
public "setCanceled"(arg0: boolean): void
public "isCanceled"(): boolean
public "getEntity"(): $Entity
get "spellData"(): $SpellData
set "canceled"(value: boolean)
get "canceled"(): boolean
get "entity"(): $Entity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InscribeSpellEvent$$Type = ($InscribeSpellEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $InscribeSpellEvent$$Original = $InscribeSpellEvent;}
declare module "io.redspace.ironsspellbooks.api.config.DefaultConfig" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$SpellRarity, $SpellRarity$$Type} from "io.redspace.ironsspellbooks.api.spells.SpellRarity"
import {$Consumer$$Type} from "java.util.function.Consumer"

export class $DefaultConfig {
 "maxLevel": integer
 "allowCrafting": boolean
 "minRarity": $SpellRarity
 "schoolResource": $ResourceLocation
 "enabled": boolean
 "cooldownInSeconds": double

constructor(arg0: $Consumer$$Type<($DefaultConfig)>)
constructor()

public "setMinRarity"(arg0: $SpellRarity$$Type): $DefaultConfig
public "setSchoolResource"(arg0: $ResourceLocation$$Type): $DefaultConfig
public "setMaxLevel"(arg0: integer): $DefaultConfig
public "setCooldownSeconds"(arg0: double): $DefaultConfig
public "setDeprecated"(arg0: boolean): $DefaultConfig
public "setAllowCrafting"(arg0: boolean): $DefaultConfig
public "build"(): $DefaultConfig
set "cooldownSeconds"(value: double)
set "deprecated"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DefaultConfig$$Type = ($DefaultConfig);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DefaultConfig$$Original = $DefaultConfig;}
declare module "io.redspace.ironsspellbooks.api.magic.SpellSelectionManager$SelectionOption" {
import {$SpellData, $SpellData$$Type} from "io.redspace.ironsspellbooks.api.spells.SpellData"
import {$CastSource} from "io.redspace.ironsspellbooks.api.spells.CastSource"

export class $SpellSelectionManager$SelectionOption {
 "globalIndex": integer
 "spellData": $SpellData
 "slot": StringJS
 "slotIndex": integer

constructor(arg0: $SpellData$$Type, arg1: StringJS, arg2: integer, arg3: integer)

public "getCastSource"(): $CastSource
get "castSource"(): $CastSource
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpellSelectionManager$SelectionOption$$Type = ($SpellSelectionManager$SelectionOption);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpellSelectionManager$SelectionOption$$Original = $SpellSelectionManager$SelectionOption;}
declare module "io.redspace.ironsspellbooks.api.attribute.IMagicAttribute" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IMagicAttribute$$Interface {
}

export class $IMagicAttribute implements $IMagicAttribute$$Interface {
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMagicAttribute$$Type = ($IMagicAttribute);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IMagicAttribute$$Original = $IMagicAttribute;}
declare module "io.redspace.ironsspellbooks.api.config.SpellConfigHolder" {
import {$Optional} from "java.util.Optional"
import {$SpellConfigParameter$$Type} from "io.redspace.ironsspellbooks.api.config.SpellConfigParameter"
import {$JsonObject} from "com.google.gson.JsonObject"
import {$Gson$$Type} from "com.google.gson.Gson"

export class $SpellConfigHolder {
constructor()

public "setDefaultValue"<T>(arg0: $SpellConfigParameter$$Type<(T)>, arg1: T): void
public "get"<T>(arg0: $SpellConfigParameter$$Type<(T)>): T
public "set"<T>(arg0: $SpellConfigParameter$$Type<(T)>, arg1: T): void
public "isDefault"<T>(arg0: $SpellConfigParameter$$Type<(T)>): boolean
public "getDefaultValue"<T>(arg0: $SpellConfigParameter$$Type<(T)>): $Optional<(T)>
public "toJson"(arg0: $Gson$$Type): $JsonObject
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpellConfigHolder$$Type = ($SpellConfigHolder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpellConfigHolder$$Original = $SpellConfigHolder;}
declare module "io.redspace.ironsspellbooks.api.spells.CastResult" {
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$CastResult$Type, $CastResult$Type$$Type} from "io.redspace.ironsspellbooks.api.spells.CastResult$Type"

export class $CastResult {
readonly "type": $CastResult$Type
readonly "message": $Component

constructor(arg0: $CastResult$Type$$Type)
constructor(arg0: $CastResult$Type$$Type, arg1: $Component$$Type)

public "isSuccess"(): boolean
get "success"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CastResult$$Type = ($CastResult);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CastResult$$Original = $CastResult;}
declare module "io.redspace.ironsspellbooks.api.spells.ICastData" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ICastData$$Interface {

(): void
}

export class $ICastData implements $ICastData$$Interface {
 "reset"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICastData$$Type = (() => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ICastData$$Original = $ICastData;}
declare module "io.redspace.ironsspellbooks.api.spells.SpellRarity" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Codec} from "com.mojang.serialization.Codec"
import {$List} from "java.util.List"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"
import {$ChatFormatting} from "net.minecraft.ChatFormatting"

export class $SpellRarity extends $Enum<($SpellRarity)> implements $StringRepresentable$$Interface {
static readonly "CODEC": $Codec<($SpellRarity)>
static readonly "RARE": $SpellRarity
static readonly "EPIC": $SpellRarity
static readonly "UNCOMMON": $SpellRarity
static readonly "COMMON": $SpellRarity
static readonly "LEGENDARY": $SpellRarity

public static "getRawRarityConfig"(): $List<(double)>
public static "getRarityConfig"(): $List<(double)>
public "compareRarity"(arg0: $SpellRarity$$Type): integer
public static "rarityTest"(): void
public "getChatFormatting"(): $ChatFormatting
public static "values"(): ($SpellRarity)[]
public static "valueOf"(arg0: StringJS): $SpellRarity
public "getValue"(): integer
public "getDisplayName"(): $MutableComponent
public "getSerializedName"(): StringJS
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
public "getRemappedEnumConstantName"(): StringJS
public static "fromEnumWithMapping"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
public static "fromEnum"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static get "rawRarityConfig"(): $List<(double)>
public static get "rarityConfig"(): $List<(double)>
get "chatFormatting"(): $ChatFormatting
get "value"(): integer
get "displayName"(): $MutableComponent
get "serializedName"(): StringJS
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpellRarity$$Type = (("common") | ("uncommon") | ("rare") | ("epic") | ("legendary"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpellRarity$$Original = $SpellRarity;}
declare module "io.redspace.ironsspellbooks.api.util.AnimationHolder" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Optional} from "java.util.Optional"
import {$RawAnimation} from "software.bernie.geckolib.animation.RawAnimation"

export class $AnimationHolder {
readonly "animatesLegs": boolean
readonly "isPass": boolean

/**
 * 
 * @deprecated
 */
constructor(arg0: StringJS, arg1: boolean, arg2: boolean)
constructor(arg0: $ResourceLocation$$Type, arg1: boolean)
/**
 * 
 * @deprecated
 */
constructor(arg0: StringJS, arg1: boolean)
constructor(arg0: $ResourceLocation$$Type, arg1: boolean, arg2: boolean)

public "getForMob"(): $Optional<($RawAnimation)>
public "getForPlayer"(): $Optional<($ResourceLocation)>
public static "pass"(): $AnimationHolder
public static "none"(): $AnimationHolder
get "forMob"(): $Optional<($RawAnimation)>
get "forPlayer"(): $Optional<($ResourceLocation)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimationHolder$$Type = ($AnimationHolder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AnimationHolder$$Original = $AnimationHolder;}
declare module "io.redspace.ironsspellbooks.api.magic.SpellSelectionManager$SpellSelectionEvent" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$SpellData$$Type} from "io.redspace.ironsspellbooks.api.spells.SpellData"
import {$SpellSelectionManager, $SpellSelectionManager$$Type} from "io.redspace.ironsspellbooks.api.magic.SpellSelectionManager"
import {$PlayerEvent} from "net.neoforged.neoforge.event.entity.player.PlayerEvent"
import {$Entity} from "net.minecraft.world.entity.Entity"

export class $SpellSelectionManager$SpellSelectionEvent extends $PlayerEvent {
constructor(arg0: $Player$$Type, arg1: $SpellSelectionManager$$Type)

public "addSelectionOption"(arg0: $SpellData$$Type, arg1: StringJS, arg2: integer, arg3: integer): void
public "addSelectionOption"(arg0: $SpellData$$Type, arg1: StringJS, arg2: integer): void
public "getManager"(): $SpellSelectionManager
public "getEntity"(): $Entity
get "manager"(): $SpellSelectionManager
get "entity"(): $Entity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpellSelectionManager$SpellSelectionEvent$$Type = ($SpellSelectionManager$SpellSelectionEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpellSelectionManager$SpellSelectionEvent$$Original = $SpellSelectionManager$SpellSelectionEvent;}
declare module "io.redspace.ironsspellbooks.api.events.SpellCooldownAddedEvent$Post" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$SpellCooldownAddedEvent} from "io.redspace.ironsspellbooks.api.events.SpellCooldownAddedEvent"
import {$CastSource$$Type} from "io.redspace.ironsspellbooks.api.spells.CastSource"
import {$AbstractSpell$$Type} from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"

export class $SpellCooldownAddedEvent$Post extends $SpellCooldownAddedEvent {
constructor(arg0: integer, arg1: $AbstractSpell$$Type, arg2: $Player$$Type, arg3: $CastSource$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpellCooldownAddedEvent$Post$$Type = ($SpellCooldownAddedEvent$Post);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpellCooldownAddedEvent$Post$$Original = $SpellCooldownAddedEvent$Post;}
declare module "io.redspace.ironsspellbooks.api.events.SpellSummonEvent" {
import {$LivingEvent} from "net.neoforged.neoforge.event.entity.living.LivingEvent"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export class $SpellSummonEvent<K extends $LivingEntity> extends $LivingEvent {
constructor(arg0: $LivingEntity$$Type, arg1: K, arg2: $ResourceLocation$$Type, arg3: integer)

public "setCreature"(arg0: K): void
public "getCaster"(): $LivingEntity
public "getSpellId"(): $ResourceLocation
public "getSpellLevel"(): integer
public "getCreature"(): K
set "creature"(value: K)
get "caster"(): $LivingEntity
get "spellId"(): $ResourceLocation
get "spellLevel"(): integer
get "creature"(): K
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpellSummonEvent$$Type<K> = ($SpellSummonEvent<(K)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpellSummonEvent$$Original<K> = $SpellSummonEvent<(K)>;}
declare module "io.redspace.ironsspellbooks.api.item.weapons.ExtendedSwordItem" {
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$ItemAttributeModifiers} from "net.minecraft.world.item.component.ItemAttributeModifiers"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$IronsWeaponTier$$Type} from "io.redspace.ironsspellbooks.item.weapons.IronsWeaponTier"
import {$SwordItem} from "net.minecraft.world.item.SwordItem"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"

export class $ExtendedSwordItem extends $SwordItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Tier$$Type, arg1: $Item$Properties$$Type)

public static "createAttributes"(arg0: $IronsWeaponTier$$Type): $ItemAttributeModifiers
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExtendedSwordItem$$Type = ($ExtendedSwordItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ExtendedSwordItem$$Original = $ExtendedSwordItem;}
declare module "io.redspace.ironsspellbooks.api.attribute.MagicPercentAttribute" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$AttributeModifier$Operation$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier$Operation"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Attribute} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$PercentageAttribute} from "net.neoforged.neoforge.common.PercentageAttribute"
import {$IMagicAttribute$$Interface} from "io.redspace.ironsspellbooks.api.attribute.IMagicAttribute"
import {$Holder} from "net.minecraft.core.Holder"

export class $MagicPercentAttribute extends $PercentageAttribute implements $IMagicAttribute$$Interface {
static readonly "CODEC": $Codec<($Holder<($Attribute)>)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($Attribute)>)>

constructor(arg0: StringJS, arg1: double, arg2: double, arg3: double)

public static "isNullOrAddition"(arg0: $AttributeModifier$Operation$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MagicPercentAttribute$$Type = ($MagicPercentAttribute);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MagicPercentAttribute$$Original = $MagicPercentAttribute;}
declare module "io.redspace.ironsspellbooks.api.item.ISpellbook" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ISpellbook$$Interface {
}

export class $ISpellbook implements $ISpellbook$$Interface {
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISpellbook$$Type = ($ISpellbook);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ISpellbook$$Original = $ISpellbook;}
declare module "io.redspace.ironsspellbooks.api.config.SpellConfigParameter" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$Record} from "java.lang.Record"

export class $SpellConfigParameter<T> extends $Record {
constructor(key: $ResourceLocation$$Type, datatype: $Codec$$Type<(T)>, defaultValue: T)

public "datatype"(): $Codec<(T)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "key"(): $ResourceLocation
public "defaultValue"(): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpellConfigParameter$$Type<T> = ({"defaultValue"?: T, "key"?: $ResourceLocation$$Type, "datatype"?: $Codec$$Type<(T)>}) | ([defaultValue?: T, key?: $ResourceLocation$$Type, datatype?: $Codec$$Type<(T)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpellConfigParameter$$Original<T> = $SpellConfigParameter<(T)>;}
declare module "io.redspace.ironsspellbooks.api.network.ISerializable" {
import {$FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"

export interface $ISerializable$$Interface {
}

export class $ISerializable implements $ISerializable$$Interface {
 "writeToBuffer"(arg0: $FriendlyByteBuf$$Type): void
 "readFromBuffer"(arg0: $FriendlyByteBuf$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISerializable$$Type = ($ISerializable);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ISerializable$$Original = $ISerializable;}
declare module "io.redspace.ironsspellbooks.api.spells.IPresetSpellContainer" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"

export interface $IPresetSpellContainer$$Interface {

(arg0: $ItemStack): void
}

export class $IPresetSpellContainer implements $IPresetSpellContainer$$Interface {
 "initializeSpellContainer"(arg0: $ItemStack$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPresetSpellContainer$$Type = ((arg0: $ItemStack) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IPresetSpellContainer$$Original = $IPresetSpellContainer;}
declare module "io.redspace.ironsspellbooks.api.attribute.MagicRangedAttribute" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$AttributeModifier$Operation$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier$Operation"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Attribute} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$IMagicAttribute$$Interface} from "io.redspace.ironsspellbooks.api.attribute.IMagicAttribute"
import {$RangedAttribute} from "net.minecraft.world.entity.ai.attributes.RangedAttribute"
import {$Holder} from "net.minecraft.core.Holder"

export class $MagicRangedAttribute extends $RangedAttribute implements $IMagicAttribute$$Interface {
static readonly "CODEC": $Codec<($Holder<($Attribute)>)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($Attribute)>)>

constructor(arg0: StringJS, arg1: double, arg2: double, arg3: double)

public static "isNullOrAddition"(arg0: $AttributeModifier$Operation$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MagicRangedAttribute$$Type = ($MagicRangedAttribute);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MagicRangedAttribute$$Original = $MagicRangedAttribute;}
declare module "io.redspace.ironsspellbooks.api.item.weapons.MagicSwordItem" {
import {$IPresetSpellContainer$$Interface} from "io.redspace.ironsspellbooks.api.spells.IPresetSpellContainer"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$List} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$ExtendedSwordItem} from "io.redspace.ironsspellbooks.api.item.weapons.ExtendedSwordItem"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$SpellData} from "io.redspace.ironsspellbooks.api.spells.SpellData"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$SpellDataRegistryHolder$$Type} from "io.redspace.ironsspellbooks.api.registry.SpellDataRegistryHolder"

export class $MagicSwordItem extends $ExtendedSwordItem implements $IPresetSpellContainer$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Tier$$Type, arg1: $Item$Properties$$Type, arg2: ($SpellDataRegistryHolder$$Type)[])

public "initializeSpellContainer"(arg0: $ItemStack$$Type): void
public "getSpells"(): $List<($SpellData)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "spells"(): $List<($SpellData)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MagicSwordItem$$Type = ($MagicSwordItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MagicSwordItem$$Original = $MagicSwordItem;}
declare module "io.redspace.ironsspellbooks.api.events.SpellOnCastEvent" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$SchoolType, $SchoolType$$Type} from "io.redspace.ironsspellbooks.api.spells.SchoolType"
import {$CastSource, $CastSource$$Type} from "io.redspace.ironsspellbooks.api.spells.CastSource"
import {$PlayerEvent} from "net.neoforged.neoforge.event.entity.player.PlayerEvent"
import {$Entity} from "net.minecraft.world.entity.Entity"

export class $SpellOnCastEvent extends $PlayerEvent {
constructor(arg0: $Player$$Type, arg1: StringJS, arg2: integer, arg3: integer, arg4: $SchoolType$$Type, arg5: $CastSource$$Type)

public "getSpellId"(): StringJS
public "getCastSource"(): $CastSource
public "getManaCost"(): integer
public "getSchoolType"(): $SchoolType
public "getSpellLevel"(): integer
public "getOriginalSpellLevel"(): integer
public "setSpellLevel"(arg0: integer): void
public "getOriginalManaCost"(): integer
public "setManaCost"(arg0: integer): void
public "getEntity"(): $Entity
get "spellId"(): StringJS
get "castSource"(): $CastSource
get "manaCost"(): integer
get "schoolType"(): $SchoolType
get "spellLevel"(): integer
get "originalSpellLevel"(): integer
set "spellLevel"(value: integer)
get "originalManaCost"(): integer
set "manaCost"(value: integer)
get "entity"(): $Entity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpellOnCastEvent$$Type = ($SpellOnCastEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpellOnCastEvent$$Original = $SpellOnCastEvent;}
declare module "io.redspace.ironsspellbooks.api.magic.SpellSelectionManager" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$SpellSelectionManager$SelectionOption} from "io.redspace.ironsspellbooks.api.magic.SpellSelectionManager$SelectionOption"
import {$SpellData} from "io.redspace.ironsspellbooks.api.spells.SpellData"
import {$List} from "java.util.List"
import {$SpellSelection} from "io.redspace.ironsspellbooks.gui.overlays.SpellSelection"

export class $SpellSelectionManager {
static readonly "OFFHAND": StringJS
static readonly "MAINHAND": StringJS

constructor(arg0: $Player$$Type)

public "getCurrentSelection"(): $SpellSelection
public "getSpellForSlot"(arg0: StringJS, arg1: integer): $SpellData
public "getSelection"(): $SpellSelectionManager$SelectionOption
public "getSelectionIndex"(): integer
public "getSpellSlot"(arg0: integer): $SpellSelectionManager$SelectionOption
public "getSelectedSpellData"(): $SpellData
public "getSpellData"(arg0: integer): $SpellData
public "getSpellCount"(): integer
public "getAllSpells"(): $List<($SpellSelectionManager$SelectionOption)>
public "makeSelection"(arg0: integer): void
public "getSpellsForSlot"(arg0: StringJS): $List<($SpellSelectionManager$SelectionOption)>
public "getGlobalSelectionIndex"(): integer
get "currentSelection"(): $SpellSelection
get "selection"(): $SpellSelectionManager$SelectionOption
get "selectionIndex"(): integer
get "selectedSpellData"(): $SpellData
get "spellCount"(): integer
get "allSpells"(): $List<($SpellSelectionManager$SelectionOption)>
get "globalSelectionIndex"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpellSelectionManager$$Type = ($SpellSelectionManager);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpellSelectionManager$$Original = $SpellSelectionManager;}
declare module "io.redspace.ironsspellbooks.api.events.SpellPreCastEvent" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$SchoolType, $SchoolType$$Type} from "io.redspace.ironsspellbooks.api.spells.SchoolType"
import {$CastSource, $CastSource$$Type} from "io.redspace.ironsspellbooks.api.spells.CastSource"
import {$PlayerEvent} from "net.neoforged.neoforge.event.entity.player.PlayerEvent"
import {$Entity} from "net.minecraft.world.entity.Entity"

export class $SpellPreCastEvent extends $PlayerEvent implements $ICancellableEvent$$Interface {
constructor(arg0: $Player$$Type, arg1: StringJS, arg2: integer, arg3: $SchoolType$$Type, arg4: $CastSource$$Type)

public "getSpellId"(): StringJS
public "getCastSource"(): $CastSource
public "getSchoolType"(): $SchoolType
public "getSpellLevel"(): integer
public "setCanceled"(arg0: boolean): void
public "isCanceled"(): boolean
public "getEntity"(): $Entity
get "spellId"(): StringJS
get "castSource"(): $CastSource
get "schoolType"(): $SchoolType
get "spellLevel"(): integer
set "canceled"(value: boolean)
get "canceled"(): boolean
get "entity"(): $Entity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpellPreCastEvent$$Type = ($SpellPreCastEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpellPreCastEvent$$Original = $SpellPreCastEvent;}
declare module "io.redspace.ironsspellbooks.api.config.RegisterConfigParametersEvent" {
import {$SpellConfigParameter$$Type} from "io.redspace.ironsspellbooks.api.config.SpellConfigParameter"
import {$Event} from "net.neoforged.bus.api.Event"
import {$Consumer$$Type} from "java.util.function.Consumer"

export class $RegisterConfigParametersEvent extends $Event {
constructor(arg0: $Consumer$$Type<($SpellConfigParameter<(never)>)>)

public "register"(arg0: $SpellConfigParameter$$Type<(never)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegisterConfigParametersEvent$$Type = ($RegisterConfigParametersEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RegisterConfigParametersEvent$$Original = $RegisterConfigParametersEvent;}
declare module "io.redspace.ironsspellbooks.api.config.ModifyDefaultConfigValuesEvent" {
import {$SpellConfigHolder$$Type} from "io.redspace.ironsspellbooks.api.config.SpellConfigHolder"
import {$SpellConfigParameter$$Type} from "io.redspace.ironsspellbooks.api.config.SpellConfigParameter"
import {$Event} from "net.neoforged.bus.api.Event"
import {$AbstractSpell, $AbstractSpell$$Type} from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"

export class $ModifyDefaultConfigValuesEvent extends $Event {
constructor(arg0: $AbstractSpell$$Type, arg1: $SpellConfigHolder$$Type)

public "getSpell"(): $AbstractSpell
public "setDefaultValue"<T>(arg0: $SpellConfigParameter$$Type<(T)>, arg1: T): void
get "spell"(): $AbstractSpell
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModifyDefaultConfigValuesEvent$$Type = ($ModifyDefaultConfigValuesEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ModifyDefaultConfigValuesEvent$$Original = $ModifyDefaultConfigValuesEvent;}
declare module "io.redspace.ironsspellbooks.api.events.CounterSpellEvent" {
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$Event} from "net.neoforged.bus.api.Event"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $CounterSpellEvent extends $Event implements $ICancellableEvent$$Interface {
readonly "caster": $Entity
readonly "target": $Entity

constructor(arg0: $Entity$$Type, arg1: $Entity$$Type)

public "setCanceled"(arg0: boolean): void
public "isCanceled"(): boolean
set "canceled"(value: boolean)
get "canceled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CounterSpellEvent$$Type = ($CounterSpellEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CounterSpellEvent$$Original = $CounterSpellEvent;}
declare module "io.redspace.ironsspellbooks.api.events.SpellCooldownAddedEvent" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Event} from "net.neoforged.bus.api.Event"
import {$CastSource, $CastSource$$Type} from "io.redspace.ironsspellbooks.api.spells.CastSource"
import {$AbstractSpell, $AbstractSpell$$Type} from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"

export class $SpellCooldownAddedEvent extends $Event {
constructor(arg0: integer, arg1: $AbstractSpell$$Type, arg2: $Player$$Type, arg3: $CastSource$$Type)

public "getSpell"(): $AbstractSpell
public "getEffectiveCooldown"(): integer
public "getCastSource"(): $CastSource
public "getEntity"(): $Player
get "spell"(): $AbstractSpell
get "effectiveCooldown"(): integer
get "castSource"(): $CastSource
get "entity"(): $Player
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpellCooldownAddedEvent$$Type = ($SpellCooldownAddedEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpellCooldownAddedEvent$$Original = $SpellCooldownAddedEvent;}
declare module "io.redspace.ironsspellbooks.api.spells.CastType" {
import {$Enum} from "java.lang.Enum"

export class $CastType extends $Enum<($CastType)> {
static readonly "INSTANT": $CastType
static readonly "NONE": $CastType
static readonly "CONTINUOUS": $CastType
static readonly "LONG": $CastType

public "immediatelySuppressRightClicks"(): boolean
public static "values"(): ($CastType)[]
public static "valueOf"(arg0: StringJS): $CastType
public "getValue"(): integer
get "value"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CastType$$Type = (("none") | ("instant") | ("long") | ("continuous"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CastType$$Original = $CastType;}
declare module "io.redspace.ironsspellbooks.api.events.SpellCooldownAddedEvent$Pre" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$SpellCooldownAddedEvent} from "io.redspace.ironsspellbooks.api.events.SpellCooldownAddedEvent"
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$CastSource$$Type} from "io.redspace.ironsspellbooks.api.spells.CastSource"
import {$AbstractSpell$$Type} from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"

export class $SpellCooldownAddedEvent$Pre extends $SpellCooldownAddedEvent implements $ICancellableEvent$$Interface {
constructor(arg0: integer, arg1: $AbstractSpell$$Type, arg2: $Player$$Type, arg3: $CastSource$$Type)

public "setEffectiveCooldown"(arg0: integer): void
public "setCanceled"(arg0: boolean): void
public "isCanceled"(): boolean
set "effectiveCooldown"(value: integer)
set "canceled"(value: boolean)
get "canceled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpellCooldownAddedEvent$Pre$$Type = ($SpellCooldownAddedEvent$Pre);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpellCooldownAddedEvent$Pre$$Original = $SpellCooldownAddedEvent$Pre;}
declare module "io.redspace.ironsspellbooks.api.events.ChangeManaEvent" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$MagicData, $MagicData$$Type} from "io.redspace.ironsspellbooks.api.magic.MagicData"
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$PlayerEvent} from "net.neoforged.neoforge.event.entity.player.PlayerEvent"
import {$Entity} from "net.minecraft.world.entity.Entity"

export class $ChangeManaEvent extends $PlayerEvent implements $ICancellableEvent$$Interface {
constructor(arg0: $Player$$Type, arg1: $MagicData$$Type, arg2: float, arg3: float)

public "getMagicData"(): $MagicData
public "getNewMana"(): float
public "getOldMana"(): float
public "setNewMana"(arg0: float): void
public "setCanceled"(arg0: boolean): void
public "isCanceled"(): boolean
public "getEntity"(): $Entity
get "magicData"(): $MagicData
get "newMana"(): float
get "oldMana"(): float
set "newMana"(value: float)
set "canceled"(value: boolean)
get "canceled"(): boolean
get "entity"(): $Entity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChangeManaEvent$$Type = ($ChangeManaEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChangeManaEvent$$Original = $ChangeManaEvent;}
declare module "io.redspace.ironsspellbooks.api.events.SpellTeleportEvent" {
import {$EntityTeleportEvent} from "net.neoforged.neoforge.event.entity.EntityTeleportEvent"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$AbstractSpell, $AbstractSpell$$Type} from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"

export class $SpellTeleportEvent extends $EntityTeleportEvent {
constructor(arg0: $AbstractSpell$$Type, arg1: $Entity$$Type, arg2: double, arg3: double, arg4: double)

public "getSpell"(): $AbstractSpell
get "spell"(): $AbstractSpell
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpellTeleportEvent$$Type = ($SpellTeleportEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpellTeleportEvent$$Original = $SpellTeleportEvent;}
declare module "io.redspace.ironsspellbooks.api.events.SpellDamageEvent" {
import {$LivingEvent} from "net.neoforged.neoforge.event.entity.living.LivingEvent"
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$SpellDamageSource, $SpellDamageSource$$Type} from "io.redspace.ironsspellbooks.damage.SpellDamageSource"

export class $SpellDamageEvent extends $LivingEvent implements $ICancellableEvent$$Interface {
constructor(arg0: $LivingEntity$$Type, arg1: float, arg2: $SpellDamageSource$$Type)

public "getOriginalAmount"(): float
public "setAmount"(arg0: float): void
public "getSpellDamageSource"(): $SpellDamageSource
public "getAmount"(): float
public "setCanceled"(arg0: boolean): void
public "isCanceled"(): boolean
get "originalAmount"(): float
set "amount"(value: float)
get "spellDamageSource"(): $SpellDamageSource
get "amount"(): float
set "canceled"(value: boolean)
get "canceled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpellDamageEvent$$Type = ($SpellDamageEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpellDamageEvent$$Original = $SpellDamageEvent;}
declare module "io.redspace.ironsspellbooks.api.spells.ICastDataSerializable" {
import {$ISerializable$$Interface} from "io.redspace.ironsspellbooks.api.network.ISerializable"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$ICastData$$Interface} from "io.redspace.ironsspellbooks.api.spells.ICastData"
import {$INBTSerializable$$Interface} from "net.neoforged.neoforge.common.util.INBTSerializable"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export interface $ICastDataSerializable$$Interface extends $ICastData$$Interface, $ISerializable$$Interface, $INBTSerializable$$Interface<($CompoundTag)> {
}

export class $ICastDataSerializable implements $ICastDataSerializable$$Interface {
 "reset"(): void
 "writeToBuffer"(arg0: $FriendlyByteBuf$$Type): void
 "readFromBuffer"(arg0: $FriendlyByteBuf$$Type): void
 "deserializeNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): void
 "serializeNBT"(arg0: $HolderLookup$Provider$$Type): $CompoundTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICastDataSerializable$$Type = ($ICastDataSerializable);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ICastDataSerializable$$Original = $ICastDataSerializable;}
declare module "io.redspace.ironsspellbooks.api.spells.AbstractSpell" {
import {$AnimationHolder} from "io.redspace.ironsspellbooks.api.util.AnimationHolder"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$List} from "java.util.List"
import {$Mob$$Type} from "net.minecraft.world.entity.Mob"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$SchoolType} from "io.redspace.ironsspellbooks.api.spells.SchoolType"
import {$Vector3f} from "org.joml.Vector3f"
import {$RecastResult$$Type} from "io.redspace.ironsspellbooks.capabilities.magic.RecastResult"
import {$Component} from "net.minecraft.network.chat.Component"
import {$SoundEvent, $SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$DefaultConfig} from "io.redspace.ironsspellbooks.api.config.DefaultConfig"
import {$ICastData$$Type} from "io.redspace.ironsspellbooks.api.spells.ICastData"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$RecastInstance$$Type} from "io.redspace.ironsspellbooks.capabilities.magic.RecastInstance"
import {$Style} from "net.minecraft.network.chat.Style"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$CastType} from "io.redspace.ironsspellbooks.api.spells.CastType"
import {$CastSource$$Type} from "io.redspace.ironsspellbooks.api.spells.CastSource"
import {$SpellDamageSource} from "io.redspace.ironsspellbooks.damage.SpellDamageSource"
import {$CastResult} from "io.redspace.ironsspellbooks.api.spells.CastResult"
import {$MagicData$$Type} from "io.redspace.ironsspellbooks.api.magic.MagicData"
import {$SpellRarity, $SpellRarity$$Type} from "io.redspace.ironsspellbooks.api.spells.SpellRarity"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$ICastDataSerializable, $ICastDataSerializable$$Type} from "io.redspace.ironsspellbooks.api.spells.ICastDataSerializable"

export class $AbstractSpell {
static readonly "ELDRITCH_OBFUSCATED_STYLE": $Style

constructor()

public "getComponentId"(): StringJS
public "getRarity"(arg0: integer): $SpellRarity
public "getDamageSource"(arg0: $Entity$$Type): $SpellDamageSource
public "getDamageSource"(arg0: $Entity$$Type, arg1: $Entity$$Type): $SpellDamageSource
public "getSpellId"(): StringJS
public "getSpellCooldown"(): integer
public "castSpell"(arg0: $Level$$Type, arg1: integer, arg2: $ServerPlayer$$Type, arg3: $CastSource$$Type, arg4: boolean): void
public "onServerCastComplete"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $MagicData$$Type, arg4: boolean): void
public "getManaCost"(arg0: integer): integer
public "onServerCastTick"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $MagicData$$Type): void
public "getSpellName"(): StringJS
public "getSchoolType"(): $SchoolType
public "getSpellResource"(): $ResourceLocation
public "obfuscateStats"(arg0: $Player$$Type): boolean
public "getTargetingColor"(): $Vector3f
public "getCastTime"(arg0: integer): integer
public "canBeCastedBy"(arg0: integer, arg1: $CastSource$$Type, arg2: $MagicData$$Type, arg3: $Player$$Type): $CastResult
public "checkPreCastConditions"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $MagicData$$Type): boolean
public "getEffectiveCastTime"(arg0: integer, arg1: $LivingEntity$$Type): integer
public "onServerPreCast"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $MagicData$$Type): void
public "onCast"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $CastSource$$Type, arg4: $MagicData$$Type): void
public "getCastFinishSound"(): $Optional<($SoundEvent)>
public "requiresLearning"(): boolean
public "isLearned"(arg0: $Player$$Type): boolean
public "getRecastCount"(arg0: integer, arg1: $LivingEntity$$Type): integer
public "getCastStartSound"(): $Optional<($SoundEvent)>
/**
 * 
 * @deprecated
 */
public "getMinRarity"(): integer
public "getMaxRarity"(): integer
public "allowLooting"(): boolean
public "getSpellIconResource"(): $ResourceLocation
public "getLockedMessage"(): $Component
public "getDefaultConfig"(): $DefaultConfig
public "getLevelFor"(arg0: integer, arg1: $LivingEntity$$Type): integer
public "getEmptyCastData"(): $ICastDataSerializable
public "getCastStartAnimation"(): $AnimationHolder
public "getCastFinishAnimation"(): $AnimationHolder
public "getSpellPower"(arg0: integer, arg1: $Entity$$Type): float
public "getEntityPowerMultiplier"(arg0: $LivingEntity$$Type): float
public "attemptInitiateCast"(arg0: $ItemStack$$Type, arg1: integer, arg2: $Level$$Type, arg3: $Player$$Type, arg4: $CastSource$$Type, arg5: boolean, arg6: StringJS): boolean
public "onRecastFinished"(arg0: $ServerPlayer$$Type, arg1: $RecastInstance$$Type, arg2: $RecastResult$$Type, arg3: $ICastDataSerializable$$Type): void
public "onClientCast"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $ICastData$$Type): void
public "onClientPreCast"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $InteractionHand$$Type, arg4: $MagicData$$Type): void
public "shouldAIStopCasting"(arg0: integer, arg1: $Mob$$Type, arg2: $LivingEntity$$Type): boolean
public "getUniqueInfo"(arg0: integer, arg1: $LivingEntity$$Type): $List<($MutableComponent)>
public "resetRarityWeights"(): void
public "getDeathMessageId"(): StringJS
public "getMinLevelForRarity"(arg0: $SpellRarity$$Type): integer
public "canBeCraftedBy"(arg0: $Player$$Type): boolean
public "allowCrafting"(): boolean
public "canBeInterrupted"(arg0: $Player$$Type): boolean
public "stopSoundOnCancel"(): boolean
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "isEnabled"(): boolean
public "getDisplayName"(arg0: $Player$$Type): $MutableComponent
public "getMinLevel"(): integer
public "getMaxLevel"(): integer
public "getCastType"(): $CastType
public "playSound"(arg0: ($SoundEvent$$Type)?, arg1: $Entity$$Type): void
get "componentId"(): StringJS
get "spellId"(): StringJS
get "spellCooldown"(): integer
get "spellName"(): StringJS
get "schoolType"(): $SchoolType
get "spellResource"(): $ResourceLocation
get "targetingColor"(): $Vector3f
get "castFinishSound"(): $Optional<($SoundEvent)>
get "castStartSound"(): $Optional<($SoundEvent)>
get "minRarity"(): integer
get "maxRarity"(): integer
get "spellIconResource"(): $ResourceLocation
get "lockedMessage"(): $Component
get "defaultConfig"(): $DefaultConfig
get "emptyCastData"(): $ICastDataSerializable
get "castStartAnimation"(): $AnimationHolder
get "castFinishAnimation"(): $AnimationHolder
get "deathMessageId"(): StringJS
get "enabled"(): boolean
get "minLevel"(): integer
get "maxLevel"(): integer
get "castType"(): $CastType
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.IronsSpellbooksSpells
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.IronsSpellbooksSpellsTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractSpell$$Type = (Special.IronsSpellbooksSpells);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractSpell$$Original = $AbstractSpell;}
declare module "io.redspace.ironsspellbooks.api.item.IScroll" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IScroll$$Interface {
}

export class $IScroll implements $IScroll$$Interface {
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IScroll$$Type = ($IScroll);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IScroll$$Original = $IScroll;}
declare module "io.redspace.ironsspellbooks.api.spells.CastResult$Type" {
import {$Enum} from "java.lang.Enum"

export class $CastResult$Type extends $Enum<($CastResult$Type)> {
static readonly "SUCCESS": $CastResult$Type
static readonly "FAILURE": $CastResult$Type

public static "values"(): ($CastResult$Type)[]
public static "valueOf"(arg0: StringJS): $CastResult$Type
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CastResult$Type$$Type = (("success") | ("failure"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CastResult$Type$$Original = $CastResult$Type;}
declare module "io.redspace.ironsspellbooks.api.spells.CastSource" {
import {$Enum} from "java.lang.Enum"

export class $CastSource extends $Enum<($CastSource)> {
static readonly "MOB": $CastSource
static readonly "SCROLL": $CastSource
static readonly "SWORD": $CastSource
static readonly "COMMAND": $CastSource
static readonly "SPELLBOOK": $CastSource
static readonly "NONE": $CastSource

public "consumesMana"(): boolean
public static "values"(): ($CastSource)[]
public static "valueOf"(arg0: StringJS): $CastSource
public "respectsCooldown"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CastSource$$Type = (("spellbook") | ("scroll") | ("sword") | ("mob") | ("command") | ("none"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CastSource$$Original = $CastSource;}
declare module "io.redspace.ironsspellbooks.api.spells.SpellData" {
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$Codec} from "com.mojang.serialization.Codec"
import {$SpellRarity} from "io.redspace.ironsspellbooks.api.spells.SpellRarity"
import {$Comparable$$Interface} from "java.lang.Comparable"
import {$Component} from "net.minecraft.network.chat.Component"
import {$AbstractSpell, $AbstractSpell$$Type} from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"

export class $SpellData implements $Comparable$$Interface<($SpellData)> {
static readonly "CODEC": $Codec<($SpellData)>
static readonly "SPELL_ID": StringJS
static readonly "SPELL_LEVEL": StringJS
static readonly "EMPTY": $SpellData
static readonly "SPELL_LOCKED": StringJS

constructor(arg0: $ResourceLocation$$Type, arg1: integer, arg2: boolean)
constructor(arg0: $AbstractSpell$$Type, arg1: integer, arg2: boolean)
constructor(arg0: $AbstractSpell$$Type, arg1: integer)

public "getRarity"(): $SpellRarity
public "getSpell"(): $AbstractSpell
public static "writeToBuffer"(arg0: $FriendlyByteBuf$$Type, arg1: $SpellData$$Type): void
public static "readFromBuffer"(arg0: $FriendlyByteBuf$$Type): $SpellData
public "getLevel"(): integer
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "compareTo"(arg0: any): integer
public "compareTo"(arg0: $SpellData$$Type): integer
public "isLocked"(): boolean
public "getDisplayName"(): $Component
public "canRemove"(): boolean
get "rarity"(): $SpellRarity
get "spell"(): $AbstractSpell
get "level"(): integer
get "locked"(): boolean
get "displayName"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpellData$$Type = ($SpellData);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpellData$$Original = $SpellData;}
declare module "io.redspace.ironsspellbooks.api.magic.MagicData" {
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$PlayerRecasts, $PlayerRecasts$$Type} from "io.redspace.ironsspellbooks.capabilities.magic.PlayerRecasts"
import {$CastType} from "io.redspace.ironsspellbooks.api.spells.CastType"
import {$CastSource, $CastSource$$Type} from "io.redspace.ironsspellbooks.api.spells.CastSource"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$PlayerCooldowns} from "io.redspace.ironsspellbooks.capabilities.magic.PlayerCooldowns"
import {$SpellData} from "io.redspace.ironsspellbooks.api.spells.SpellData"
import {$SyncedSpellData, $SyncedSpellData$$Type} from "io.redspace.ironsspellbooks.capabilities.magic.SyncedSpellData"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ICastData, $ICastData$$Type} from "io.redspace.ironsspellbooks.api.spells.ICastData"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$AbstractSpell$$Type} from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"

export class $MagicData {
static readonly "MANA": StringJS
static readonly "COOLDOWNS": StringJS
static readonly "RECASTS": StringJS

constructor(arg0: $ServerPlayer$$Type)
constructor(arg0: boolean)
constructor()

public "isCasting"(): boolean
public static "getPlayerMagicData"(arg0: $LivingEntity$$Type): $MagicData
public "markPoisoned"(): void
public "getSyncedData"(): $SyncedSpellData
public "addMana"(arg0: float): void
public "saveNBTData"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "loadNBTData"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "getPlayerCastingItem"(): $ItemStack
public "getMana"(): float
public "setMana"(arg0: float): void
public "getPlayerCooldowns"(): $PlayerCooldowns
public "getPlayerRecasts"(): $PlayerRecasts
public "handleCastDuration"(): void
public "getCastingSpellId"(): StringJS
public "getCastDurationRemaining"(): integer
public "getCastingSpellLevel"(): integer
public "getCastSource"(): $CastSource
public "initiateCast"(arg0: $AbstractSpell$$Type, arg1: integer, arg2: integer, arg3: $CastSource$$Type, arg4: StringJS): void
public "setPlayerCastingItem"(arg0: $ItemStack$$Type): void
public "getAdditionalCastData"(): $ICastData
public "resetCastingState"(): void
public "setAdditionalCastData"(arg0: $ICastData$$Type): void
public "getCastingSpell"(): $SpellData
public "resetAdditionalCastData"(): void
public "getCastingEquipmentSlot"(): StringJS
public "setSyncedData"(arg0: $SyncedSpellData$$Type): void
public "popMarkedPoison"(): boolean
public "setServerPlayer"(arg0: $ServerPlayer$$Type): void
public "getCastCompletionPercent"(): float
public "getCastDuration"(): integer
public "setPlayerRecasts"(arg0: $PlayerRecasts$$Type): void
public "toString"(): StringJS
public "getCastType"(): $CastType
get "casting"(): boolean
get "syncedData"(): $SyncedSpellData
get "playerCastingItem"(): $ItemStack
get "mana"(): float
set "mana"(value: float)
get "playerCooldowns"(): $PlayerCooldowns
get "playerRecasts"(): $PlayerRecasts
get "castingSpellId"(): StringJS
get "castDurationRemaining"(): integer
get "castingSpellLevel"(): integer
get "castSource"(): $CastSource
set "playerCastingItem"(value: $ItemStack$$Type)
get "additionalCastData"(): $ICastData
set "additionalCastData"(value: $ICastData$$Type)
get "castingSpell"(): $SpellData
get "castingEquipmentSlot"(): StringJS
set "syncedData"(value: $SyncedSpellData$$Type)
set "serverPlayer"(value: $ServerPlayer$$Type)
get "castCompletionPercent"(): float
get "castDuration"(): integer
set "playerRecasts"(value: $PlayerRecasts$$Type)
get "castType"(): $CastType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MagicData$$Type = ($MagicData);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MagicData$$Original = $MagicData;}
declare module "io.redspace.ironsspellbooks.api.spells.SchoolType" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Vector3f} from "org.joml.Vector3f"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$SoundEvent, $SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$Holder$$Type} from "net.minecraft.core.Holder"
import {$DamageType, $DamageType$$Type} from "net.minecraft.world.damagesource.DamageType"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$TagKey, $TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$Attribute$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"

export class $SchoolType {
constructor(arg0: $ResourceLocation$$Type, arg1: $TagKey$$Type<($Item)>, arg2: $Component$$Type, arg3: $Holder$$Type<($Attribute)>, arg4: $Holder$$Type<($Attribute)>, arg5: $Holder$$Type<($SoundEvent)>, arg6: $ResourceKey$$Type<($DamageType)>)
constructor(arg0: $ResourceLocation$$Type, arg1: $TagKey$$Type<($Item)>, arg2: $Component$$Type, arg3: $Holder$$Type<($Attribute)>, arg4: $Holder$$Type<($Attribute)>, arg5: $Holder$$Type<($SoundEvent)>, arg6: $ResourceKey$$Type<($DamageType)>, arg7: boolean, arg8: boolean)

public "getFocus"(): $TagKey<($Item)>
public "isFocus"(arg0: $ItemStack$$Type): boolean
public "getTargetingColor"(): $Vector3f
public "getPowerFor"(arg0: $LivingEntity$$Type): double
public "getCastSound"(): $SoundEvent
public "getResistanceFor"(arg0: $LivingEntity$$Type): double
public "getDamageType"(): $ResourceKey<($DamageType)>
public "getId"(): $ResourceLocation
public "getDisplayName"(): $Component
get "focus"(): $TagKey<($Item)>
get "targetingColor"(): $Vector3f
get "castSound"(): $SoundEvent
get "damageType"(): $ResourceKey<($DamageType)>
get "id"(): $ResourceLocation
get "displayName"(): $Component
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.IronsSpellbooksSchools
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.IronsSpellbooksSchoolsTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SchoolType$$Type = (Special.IronsSpellbooksSchools);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SchoolType$$Original = $SchoolType;}
declare module "io.redspace.ironsspellbooks.api.registry.SpellDataRegistryHolder" {
import {$SpellData} from "io.redspace.ironsspellbooks.api.spells.SpellData"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$AbstractSpell$$Type} from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"

export class $SpellDataRegistryHolder {
constructor(arg0: $Supplier$$Type<($AbstractSpell$$Type)>, arg1: integer)

public "getSpellData"(): $SpellData
public static "of"(...arg0: ($SpellDataRegistryHolder$$Type)[]): ($SpellDataRegistryHolder)[]
get "spellData"(): $SpellData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpellDataRegistryHolder$$Type = ($SpellDataRegistryHolder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpellDataRegistryHolder$$Original = $SpellDataRegistryHolder;}
declare module "io.redspace.ironsspellbooks.api.events.ModifySpellLevelEvent" {
import {$Event} from "net.neoforged.bus.api.Event"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$AbstractSpell, $AbstractSpell$$Type} from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"

export class $ModifySpellLevelEvent extends $Event {
constructor(arg0: $AbstractSpell$$Type, arg1: $LivingEntity$$Type, arg2: integer, arg3: integer)

public "getSpell"(): $AbstractSpell
public "getBaseLevel"(): integer
public "addLevels"(arg0: integer): void
public "getLevel"(): integer
public "setLevel"(arg0: integer): void
public "getEntity"(): $LivingEntity
get "spell"(): $AbstractSpell
get "baseLevel"(): integer
get "level"(): integer
set "level"(value: integer)
get "entity"(): $LivingEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModifySpellLevelEvent$$Type = ($ModifySpellLevelEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ModifySpellLevelEvent$$Original = $ModifySpellLevelEvent;}
declare module "io.redspace.ironsspellbooks.api.events.SpellHealEvent" {
import {$LivingEvent} from "net.neoforged.neoforge.event.entity.living.LivingEvent"
import {$SchoolType, $SchoolType$$Type} from "io.redspace.ironsspellbooks.api.spells.SchoolType"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export class $SpellHealEvent extends $LivingEvent {
constructor(arg0: $LivingEntity$$Type, arg1: $LivingEntity$$Type, arg2: float, arg3: $SchoolType$$Type)

public "getTargetEntity"(): $LivingEntity
public "getHealAmount"(): float
public "getSchoolType"(): $SchoolType
get "targetEntity"(): $LivingEntity
get "healAmount"(): float
get "schoolType"(): $SchoolType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpellHealEvent$$Type = ($SpellHealEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpellHealEvent$$Original = $SpellHealEvent;}
