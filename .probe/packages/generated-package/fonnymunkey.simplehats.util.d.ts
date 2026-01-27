declare module "fonnymunkey.simplehats.util.HatEntry$HatSeason" {
import {$Enum} from "java.lang.Enum"

export class $HatEntry$HatSeason extends $Enum<($HatEntry$HatSeason)> {
static readonly "EASTER": $HatEntry$HatSeason
static readonly "FESTIVE": $HatEntry$HatSeason
static readonly "HALLOWEEN": $HatEntry$HatSeason
static readonly "SUMMER": $HatEntry$HatSeason
static readonly "NONE": $HatEntry$HatSeason

public static "getSeason"(): $HatEntry$HatSeason
public "compareDate"(arg0: integer): boolean
public static "values"(): ($HatEntry$HatSeason)[]
public static "valueOf"(arg0: StringJS): $HatEntry$HatSeason
public static get "season"(): $HatEntry$HatSeason
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HatEntry$HatSeason$$Type = (("easter") | ("summer") | ("halloween") | ("festive") | ("none"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HatEntry$HatSeason$$Original = $HatEntry$HatSeason;}
declare module "fonnymunkey.simplehats.util.HatEntry$HatParticleSettings$HatParticleMovement" {
import {$Enum} from "java.lang.Enum"

export class $HatEntry$HatParticleSettings$HatParticleMovement extends $Enum<($HatEntry$HatParticleSettings$HatParticleMovement)> {
static readonly "TRAILING_FEET": $HatEntry$HatParticleSettings$HatParticleMovement
static readonly "TRAILING_HEAD": $HatEntry$HatParticleSettings$HatParticleMovement
static readonly "TRAILING_FULL": $HatEntry$HatParticleSettings$HatParticleMovement

public static "values"(): ($HatEntry$HatParticleSettings$HatParticleMovement)[]
public static "valueOf"(arg0: StringJS): $HatEntry$HatParticleSettings$HatParticleMovement
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HatEntry$HatParticleSettings$HatParticleMovement$$Type = (("trailing_head") | ("trailing_feet") | ("trailing_full"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HatEntry$HatParticleSettings$HatParticleMovement$$Original = $HatEntry$HatParticleSettings$HatParticleMovement;}
declare module "fonnymunkey.simplehats.util.HatEntry$HatParticleSettings" {
import {$ParticleType} from "net.minecraft.core.particles.ParticleType"
import {$HatEntry$HatParticleSettings$HatParticleMovement, $HatEntry$HatParticleSettings$HatParticleMovement$$Type} from "fonnymunkey.simplehats.util.HatEntry$HatParticleSettings$HatParticleMovement"

export class $HatEntry$HatParticleSettings {
constructor(arg0: boolean, arg1: StringJS, arg2: float, arg3: $HatEntry$HatParticleSettings$HatParticleMovement$$Type)

public "getParticleType"(): $ParticleType<(never)>
public "getUseParticles"(): boolean
public "getParticleFrequency"(): float
public "getParticleMovement"(): $HatEntry$HatParticleSettings$HatParticleMovement
public "validateParticleSettings"(): void
get "particleType"(): $ParticleType<(never)>
get "useParticles"(): boolean
get "particleFrequency"(): float
get "particleMovement"(): $HatEntry$HatParticleSettings$HatParticleMovement
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HatEntry$HatParticleSettings$$Type = ($HatEntry$HatParticleSettings);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HatEntry$HatParticleSettings$$Original = $HatEntry$HatParticleSettings;}
declare module "fonnymunkey.simplehats.util.HatEntry" {
import {$HatEntry$HatParticleSettings, $HatEntry$HatParticleSettings$$Type} from "fonnymunkey.simplehats.util.HatEntry$HatParticleSettings"
import {$Rarity, $Rarity$$Type} from "net.minecraft.world.item.Rarity"
import {$HatEntry$HatSeason, $HatEntry$HatSeason$$Type} from "fonnymunkey.simplehats.util.HatEntry$HatSeason"
import {$HatEntry$HatDyeSettings, $HatEntry$HatDyeSettings$$Type} from "fonnymunkey.simplehats.util.HatEntry$HatDyeSettings"

export class $HatEntry {
static readonly "PARTICLE_NONE": $HatEntry$HatParticleSettings
static readonly "DYE_NONE": $HatEntry$HatDyeSettings

constructor(arg0: StringJS, arg1: $Rarity$$Type, arg2: integer, arg3: integer, arg4: $HatEntry$HatDyeSettings$$Type, arg5: $HatEntry$HatParticleSettings$$Type, arg6: $HatEntry$HatSeason$$Type)
constructor(arg0: StringJS, arg1: $Rarity$$Type, arg2: integer, arg3: integer, arg4: $HatEntry$HatParticleSettings$$Type)
constructor(arg0: StringJS, arg1: $Rarity$$Type, arg2: integer, arg3: integer, arg4: $HatEntry$HatDyeSettings$$Type)
constructor(arg0: StringJS, arg1: $Rarity$$Type, arg2: integer, arg3: integer)
constructor(arg0: StringJS, arg1: $Rarity$$Type, arg2: integer)
constructor(arg0: StringJS)
constructor(arg0: StringJS, arg1: $Rarity$$Type, arg2: integer, arg3: integer, arg4: $HatEntry$HatParticleSettings$$Type, arg5: $HatEntry$HatSeason$$Type)
constructor(arg0: StringJS, arg1: $Rarity$$Type, arg2: integer, arg3: integer, arg4: $HatEntry$HatDyeSettings$$Type, arg5: $HatEntry$HatSeason$$Type)
constructor(arg0: StringJS, arg1: $Rarity$$Type, arg2: integer, arg3: integer, arg4: $HatEntry$HatDyeSettings$$Type, arg5: $HatEntry$HatParticleSettings$$Type)
constructor(arg0: StringJS, arg1: $Rarity$$Type, arg2: integer, arg3: integer, arg4: $HatEntry$HatSeason$$Type)

public "getHatRarity"(): $Rarity
public "getHatWeight"(): integer
public "getHatSeason"(): $HatEntry$HatSeason
public "getHatVariantRange"(): integer
public "getHatName"(): StringJS
public "validateDeserializedEntry"(): void
public "getHatDyeSettings"(): $HatEntry$HatDyeSettings
public "getHatParticleSettings"(): $HatEntry$HatParticleSettings
get "hatRarity"(): $Rarity
get "hatWeight"(): integer
get "hatSeason"(): $HatEntry$HatSeason
get "hatVariantRange"(): integer
get "hatName"(): StringJS
get "hatDyeSettings"(): $HatEntry$HatDyeSettings
get "hatParticleSettings"(): $HatEntry$HatParticleSettings
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HatEntry$$Type = ($HatEntry);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HatEntry$$Original = $HatEntry;}
declare module "fonnymunkey.simplehats.util.HatEntry$HatDyeSettings" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $HatEntry$HatDyeSettings {
constructor(arg0: boolean, arg1: integer)

public "getUseDye"(): boolean
public "getColorCode"(): integer
get "useDye"(): boolean
get "colorCode"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HatEntry$HatDyeSettings$$Type = ($HatEntry$HatDyeSettings);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HatEntry$HatDyeSettings$$Original = $HatEntry$HatDyeSettings;}
