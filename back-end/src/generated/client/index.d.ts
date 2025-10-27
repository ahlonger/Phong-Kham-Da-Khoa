
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Booking
 * 
 */
export type Booking = $Result.DefaultSelection<Prisma.$BookingPayload>
/**
 * Model Dichvu
 * 
 */
export type Dichvu = $Result.DefaultSelection<Prisma.$DichvuPayload>
/**
 * Model WorkSchedule
 * 
 */
export type WorkSchedule = $Result.DefaultSelection<Prisma.$WorkSchedulePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.booking`: Exposes CRUD operations for the **Booking** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bookings
    * const bookings = await prisma.booking.findMany()
    * ```
    */
  get booking(): Prisma.BookingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dichvu`: Exposes CRUD operations for the **Dichvu** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Dichvus
    * const dichvus = await prisma.dichvu.findMany()
    * ```
    */
  get dichvu(): Prisma.DichvuDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workSchedule`: Exposes CRUD operations for the **WorkSchedule** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WorkSchedules
    * const workSchedules = await prisma.workSchedule.findMany()
    * ```
    */
  get workSchedule(): Prisma.WorkScheduleDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.10.1
   * Query Engine version: 9b628578b3b7cae625e8c927178f15a170e74a9c
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Booking: 'Booking',
    Dichvu: 'Dichvu',
    WorkSchedule: 'WorkSchedule'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "booking" | "dichvu" | "workSchedule"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Booking: {
        payload: Prisma.$BookingPayload<ExtArgs>
        fields: Prisma.BookingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          findFirst: {
            args: Prisma.BookingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          findMany: {
            args: Prisma.BookingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          create: {
            args: Prisma.BookingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          createMany: {
            args: Prisma.BookingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.BookingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          update: {
            args: Prisma.BookingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          deleteMany: {
            args: Prisma.BookingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BookingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          aggregate: {
            args: Prisma.BookingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBooking>
          }
          groupBy: {
            args: Prisma.BookingGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookingGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookingCountArgs<ExtArgs>
            result: $Utils.Optional<BookingCountAggregateOutputType> | number
          }
        }
      }
      Dichvu: {
        payload: Prisma.$DichvuPayload<ExtArgs>
        fields: Prisma.DichvuFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DichvuFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DichvuPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DichvuFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DichvuPayload>
          }
          findFirst: {
            args: Prisma.DichvuFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DichvuPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DichvuFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DichvuPayload>
          }
          findMany: {
            args: Prisma.DichvuFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DichvuPayload>[]
          }
          create: {
            args: Prisma.DichvuCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DichvuPayload>
          }
          createMany: {
            args: Prisma.DichvuCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DichvuDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DichvuPayload>
          }
          update: {
            args: Prisma.DichvuUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DichvuPayload>
          }
          deleteMany: {
            args: Prisma.DichvuDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DichvuUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DichvuUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DichvuPayload>
          }
          aggregate: {
            args: Prisma.DichvuAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDichvu>
          }
          groupBy: {
            args: Prisma.DichvuGroupByArgs<ExtArgs>
            result: $Utils.Optional<DichvuGroupByOutputType>[]
          }
          count: {
            args: Prisma.DichvuCountArgs<ExtArgs>
            result: $Utils.Optional<DichvuCountAggregateOutputType> | number
          }
        }
      }
      WorkSchedule: {
        payload: Prisma.$WorkSchedulePayload<ExtArgs>
        fields: Prisma.WorkScheduleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkScheduleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkSchedulePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkScheduleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkSchedulePayload>
          }
          findFirst: {
            args: Prisma.WorkScheduleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkSchedulePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkScheduleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkSchedulePayload>
          }
          findMany: {
            args: Prisma.WorkScheduleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkSchedulePayload>[]
          }
          create: {
            args: Prisma.WorkScheduleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkSchedulePayload>
          }
          createMany: {
            args: Prisma.WorkScheduleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.WorkScheduleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkSchedulePayload>
          }
          update: {
            args: Prisma.WorkScheduleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkSchedulePayload>
          }
          deleteMany: {
            args: Prisma.WorkScheduleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkScheduleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.WorkScheduleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkSchedulePayload>
          }
          aggregate: {
            args: Prisma.WorkScheduleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkSchedule>
          }
          groupBy: {
            args: Prisma.WorkScheduleGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkScheduleGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkScheduleCountArgs<ExtArgs>
            result: $Utils.Optional<WorkScheduleCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    booking?: BookingOmit
    dichvu?: DichvuOmit
    workSchedule?: WorkScheduleOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    bookings: number
    workSchedules: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | UserCountOutputTypeCountBookingsArgs
    workSchedules?: boolean | UserCountOutputTypeCountWorkSchedulesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountWorkSchedulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkScheduleWhereInput
  }


  /**
   * Count Type DichvuCountOutputType
   */

  export type DichvuCountOutputType = {
    doctors: number
    bookings: number
  }

  export type DichvuCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctors?: boolean | DichvuCountOutputTypeCountDoctorsArgs
    bookings?: boolean | DichvuCountOutputTypeCountBookingsArgs
  }

  // Custom InputTypes
  /**
   * DichvuCountOutputType without action
   */
  export type DichvuCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DichvuCountOutputType
     */
    select?: DichvuCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DichvuCountOutputType without action
   */
  export type DichvuCountOutputTypeCountDoctorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * DichvuCountOutputType without action
   */
  export type DichvuCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    dichvuId: number | null
    namkinhnghiem: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    dichvuId: number | null
    namkinhnghiem: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    avatar: string | null
    role: string | null
    dichvuId: number | null
    chuyenmon: string | null
    namkinhnghiem: number | null
    gioithieu: string | null
    thanhtuu: string | null
    phone: string | null
    address: string | null
    gioitinh: string | null
    resetToken: string | null
    resetExpire: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    avatar: string | null
    role: string | null
    dichvuId: number | null
    chuyenmon: string | null
    namkinhnghiem: number | null
    gioithieu: string | null
    thanhtuu: string | null
    phone: string | null
    address: string | null
    gioitinh: string | null
    resetToken: string | null
    resetExpire: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    avatar: number
    role: number
    dichvuId: number
    chuyenmon: number
    namkinhnghiem: number
    gioithieu: number
    thanhtuu: number
    phone: number
    address: number
    gioitinh: number
    resetToken: number
    resetExpire: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    dichvuId?: true
    namkinhnghiem?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    dichvuId?: true
    namkinhnghiem?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    avatar?: true
    role?: true
    dichvuId?: true
    chuyenmon?: true
    namkinhnghiem?: true
    gioithieu?: true
    thanhtuu?: true
    phone?: true
    address?: true
    gioitinh?: true
    resetToken?: true
    resetExpire?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    avatar?: true
    role?: true
    dichvuId?: true
    chuyenmon?: true
    namkinhnghiem?: true
    gioithieu?: true
    thanhtuu?: true
    phone?: true
    address?: true
    gioitinh?: true
    resetToken?: true
    resetExpire?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    avatar?: true
    role?: true
    dichvuId?: true
    chuyenmon?: true
    namkinhnghiem?: true
    gioithieu?: true
    thanhtuu?: true
    phone?: true
    address?: true
    gioitinh?: true
    resetToken?: true
    resetExpire?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string
    email: string
    password: string | null
    avatar: string | null
    role: string
    dichvuId: number | null
    chuyenmon: string | null
    namkinhnghiem: number | null
    gioithieu: string | null
    thanhtuu: string | null
    phone: string | null
    address: string | null
    gioitinh: string | null
    resetToken: string | null
    resetExpire: Date | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    avatar?: boolean
    role?: boolean
    dichvuId?: boolean
    chuyenmon?: boolean
    namkinhnghiem?: boolean
    gioithieu?: boolean
    thanhtuu?: boolean
    phone?: boolean
    address?: boolean
    gioitinh?: boolean
    resetToken?: boolean
    resetExpire?: boolean
    dichvu?: boolean | User$dichvuArgs<ExtArgs>
    bookings?: boolean | User$bookingsArgs<ExtArgs>
    workSchedules?: boolean | User$workSchedulesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    avatar?: boolean
    role?: boolean
    dichvuId?: boolean
    chuyenmon?: boolean
    namkinhnghiem?: boolean
    gioithieu?: boolean
    thanhtuu?: boolean
    phone?: boolean
    address?: boolean
    gioitinh?: boolean
    resetToken?: boolean
    resetExpire?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "avatar" | "role" | "dichvuId" | "chuyenmon" | "namkinhnghiem" | "gioithieu" | "thanhtuu" | "phone" | "address" | "gioitinh" | "resetToken" | "resetExpire", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dichvu?: boolean | User$dichvuArgs<ExtArgs>
    bookings?: boolean | User$bookingsArgs<ExtArgs>
    workSchedules?: boolean | User$workSchedulesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      dichvu: Prisma.$DichvuPayload<ExtArgs> | null
      bookings: Prisma.$BookingPayload<ExtArgs>[]
      workSchedules: Prisma.$WorkSchedulePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      password: string | null
      avatar: string | null
      role: string
      dichvuId: number | null
      chuyenmon: string | null
      namkinhnghiem: number | null
      gioithieu: string | null
      thanhtuu: string | null
      phone: string | null
      address: string | null
      gioitinh: string | null
      resetToken: string | null
      resetExpire: Date | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    dichvu<T extends User$dichvuArgs<ExtArgs> = {}>(args?: Subset<T, User$dichvuArgs<ExtArgs>>): Prisma__DichvuClient<$Result.GetResult<Prisma.$DichvuPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    bookings<T extends User$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, User$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    workSchedules<T extends User$workSchedulesArgs<ExtArgs> = {}>(args?: Subset<T, User$workSchedulesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkSchedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly avatar: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly dichvuId: FieldRef<"User", 'Int'>
    readonly chuyenmon: FieldRef<"User", 'String'>
    readonly namkinhnghiem: FieldRef<"User", 'Int'>
    readonly gioithieu: FieldRef<"User", 'String'>
    readonly thanhtuu: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly address: FieldRef<"User", 'String'>
    readonly gioitinh: FieldRef<"User", 'String'>
    readonly resetToken: FieldRef<"User", 'String'>
    readonly resetExpire: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.dichvu
   */
  export type User$dichvuArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dichvu
     */
    select?: DichvuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dichvu
     */
    omit?: DichvuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DichvuInclude<ExtArgs> | null
    where?: DichvuWhereInput
  }

  /**
   * User.bookings
   */
  export type User$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    cursor?: BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * User.workSchedules
   */
  export type User$workSchedulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkSchedule
     */
    select?: WorkScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkSchedule
     */
    omit?: WorkScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkScheduleInclude<ExtArgs> | null
    where?: WorkScheduleWhereInput
    orderBy?: WorkScheduleOrderByWithRelationInput | WorkScheduleOrderByWithRelationInput[]
    cursor?: WorkScheduleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkScheduleScalarFieldEnum | WorkScheduleScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Booking
   */

  export type AggregateBooking = {
    _count: BookingCountAggregateOutputType | null
    _avg: BookingAvgAggregateOutputType | null
    _sum: BookingSumAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  export type BookingAvgAggregateOutputType = {
    id: number | null
    doctorId: number | null
    serviceId: number | null
  }

  export type BookingSumAggregateOutputType = {
    id: number | null
    doctorId: number | null
    serviceId: number | null
  }

  export type BookingMinAggregateOutputType = {
    id: number | null
    hoten: string | null
    email: string | null
    sdt: string | null
    diachi: string | null
    dichvu: string | null
    bacsi: string | null
    gioitinh: string | null
    ghichu: string | null
    thoigianhen: Date | null
    dongy: boolean | null
    created_at: Date | null
    doctorId: number | null
    serviceId: number | null
    xacnhan: boolean | null
    huy: boolean | null
    trangThai: string | null
  }

  export type BookingMaxAggregateOutputType = {
    id: number | null
    hoten: string | null
    email: string | null
    sdt: string | null
    diachi: string | null
    dichvu: string | null
    bacsi: string | null
    gioitinh: string | null
    ghichu: string | null
    thoigianhen: Date | null
    dongy: boolean | null
    created_at: Date | null
    doctorId: number | null
    serviceId: number | null
    xacnhan: boolean | null
    huy: boolean | null
    trangThai: string | null
  }

  export type BookingCountAggregateOutputType = {
    id: number
    hoten: number
    email: number
    sdt: number
    diachi: number
    dichvu: number
    bacsi: number
    gioitinh: number
    ghichu: number
    thoigianhen: number
    dongy: number
    created_at: number
    doctorId: number
    serviceId: number
    xacnhan: number
    huy: number
    trangThai: number
    _all: number
  }


  export type BookingAvgAggregateInputType = {
    id?: true
    doctorId?: true
    serviceId?: true
  }

  export type BookingSumAggregateInputType = {
    id?: true
    doctorId?: true
    serviceId?: true
  }

  export type BookingMinAggregateInputType = {
    id?: true
    hoten?: true
    email?: true
    sdt?: true
    diachi?: true
    dichvu?: true
    bacsi?: true
    gioitinh?: true
    ghichu?: true
    thoigianhen?: true
    dongy?: true
    created_at?: true
    doctorId?: true
    serviceId?: true
    xacnhan?: true
    huy?: true
    trangThai?: true
  }

  export type BookingMaxAggregateInputType = {
    id?: true
    hoten?: true
    email?: true
    sdt?: true
    diachi?: true
    dichvu?: true
    bacsi?: true
    gioitinh?: true
    ghichu?: true
    thoigianhen?: true
    dongy?: true
    created_at?: true
    doctorId?: true
    serviceId?: true
    xacnhan?: true
    huy?: true
    trangThai?: true
  }

  export type BookingCountAggregateInputType = {
    id?: true
    hoten?: true
    email?: true
    sdt?: true
    diachi?: true
    dichvu?: true
    bacsi?: true
    gioitinh?: true
    ghichu?: true
    thoigianhen?: true
    dongy?: true
    created_at?: true
    doctorId?: true
    serviceId?: true
    xacnhan?: true
    huy?: true
    trangThai?: true
    _all?: true
  }

  export type BookingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Booking to aggregate.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bookings
    **/
    _count?: true | BookingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookingMaxAggregateInputType
  }

  export type GetBookingAggregateType<T extends BookingAggregateArgs> = {
        [P in keyof T & keyof AggregateBooking]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBooking[P]>
      : GetScalarType<T[P], AggregateBooking[P]>
  }




  export type BookingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithAggregationInput | BookingOrderByWithAggregationInput[]
    by: BookingScalarFieldEnum[] | BookingScalarFieldEnum
    having?: BookingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookingCountAggregateInputType | true
    _avg?: BookingAvgAggregateInputType
    _sum?: BookingSumAggregateInputType
    _min?: BookingMinAggregateInputType
    _max?: BookingMaxAggregateInputType
  }

  export type BookingGroupByOutputType = {
    id: number
    hoten: string
    email: string
    sdt: string
    diachi: string
    dichvu: string
    bacsi: string
    gioitinh: string | null
    ghichu: string | null
    thoigianhen: Date
    dongy: boolean
    created_at: Date
    doctorId: number | null
    serviceId: number | null
    xacnhan: boolean
    huy: boolean
    trangThai: string | null
    _count: BookingCountAggregateOutputType | null
    _avg: BookingAvgAggregateOutputType | null
    _sum: BookingSumAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  type GetBookingGroupByPayload<T extends BookingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookingGroupByOutputType[P]>
            : GetScalarType<T[P], BookingGroupByOutputType[P]>
        }
      >
    >


  export type BookingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    hoten?: boolean
    email?: boolean
    sdt?: boolean
    diachi?: boolean
    dichvu?: boolean
    bacsi?: boolean
    gioitinh?: boolean
    ghichu?: boolean
    thoigianhen?: boolean
    dongy?: boolean
    created_at?: boolean
    doctorId?: boolean
    serviceId?: boolean
    xacnhan?: boolean
    huy?: boolean
    trangThai?: boolean
    doctor?: boolean | Booking$doctorArgs<ExtArgs>
    service?: boolean | Booking$serviceArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>



  export type BookingSelectScalar = {
    id?: boolean
    hoten?: boolean
    email?: boolean
    sdt?: boolean
    diachi?: boolean
    dichvu?: boolean
    bacsi?: boolean
    gioitinh?: boolean
    ghichu?: boolean
    thoigianhen?: boolean
    dongy?: boolean
    created_at?: boolean
    doctorId?: boolean
    serviceId?: boolean
    xacnhan?: boolean
    huy?: boolean
    trangThai?: boolean
  }

  export type BookingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "hoten" | "email" | "sdt" | "diachi" | "dichvu" | "bacsi" | "gioitinh" | "ghichu" | "thoigianhen" | "dongy" | "created_at" | "doctorId" | "serviceId" | "xacnhan" | "huy" | "trangThai", ExtArgs["result"]["booking"]>
  export type BookingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctor?: boolean | Booking$doctorArgs<ExtArgs>
    service?: boolean | Booking$serviceArgs<ExtArgs>
  }

  export type $BookingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Booking"
    objects: {
      doctor: Prisma.$UserPayload<ExtArgs> | null
      service: Prisma.$DichvuPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      hoten: string
      email: string
      sdt: string
      diachi: string
      dichvu: string
      bacsi: string
      gioitinh: string | null
      ghichu: string | null
      thoigianhen: Date
      dongy: boolean
      created_at: Date
      doctorId: number | null
      serviceId: number | null
      xacnhan: boolean
      huy: boolean
      trangThai: string | null
    }, ExtArgs["result"]["booking"]>
    composites: {}
  }

  type BookingGetPayload<S extends boolean | null | undefined | BookingDefaultArgs> = $Result.GetResult<Prisma.$BookingPayload, S>

  type BookingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookingCountAggregateInputType | true
    }

  export interface BookingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Booking'], meta: { name: 'Booking' } }
    /**
     * Find zero or one Booking that matches the filter.
     * @param {BookingFindUniqueArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookingFindUniqueArgs>(args: SelectSubset<T, BookingFindUniqueArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Booking that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookingFindUniqueOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookingFindUniqueOrThrowArgs>(args: SelectSubset<T, BookingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Booking that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindFirstArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookingFindFirstArgs>(args?: SelectSubset<T, BookingFindFirstArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Booking that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindFirstOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookingFindFirstOrThrowArgs>(args?: SelectSubset<T, BookingFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bookings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bookings
     * const bookings = await prisma.booking.findMany()
     * 
     * // Get first 10 Bookings
     * const bookings = await prisma.booking.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookingWithIdOnly = await prisma.booking.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BookingFindManyArgs>(args?: SelectSubset<T, BookingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Booking.
     * @param {BookingCreateArgs} args - Arguments to create a Booking.
     * @example
     * // Create one Booking
     * const Booking = await prisma.booking.create({
     *   data: {
     *     // ... data to create a Booking
     *   }
     * })
     * 
     */
    create<T extends BookingCreateArgs>(args: SelectSubset<T, BookingCreateArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bookings.
     * @param {BookingCreateManyArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const booking = await prisma.booking.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookingCreateManyArgs>(args?: SelectSubset<T, BookingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Booking.
     * @param {BookingDeleteArgs} args - Arguments to delete one Booking.
     * @example
     * // Delete one Booking
     * const Booking = await prisma.booking.delete({
     *   where: {
     *     // ... filter to delete one Booking
     *   }
     * })
     * 
     */
    delete<T extends BookingDeleteArgs>(args: SelectSubset<T, BookingDeleteArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Booking.
     * @param {BookingUpdateArgs} args - Arguments to update one Booking.
     * @example
     * // Update one Booking
     * const booking = await prisma.booking.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookingUpdateArgs>(args: SelectSubset<T, BookingUpdateArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bookings.
     * @param {BookingDeleteManyArgs} args - Arguments to filter Bookings to delete.
     * @example
     * // Delete a few Bookings
     * const { count } = await prisma.booking.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookingDeleteManyArgs>(args?: SelectSubset<T, BookingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bookings
     * const booking = await prisma.booking.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookingUpdateManyArgs>(args: SelectSubset<T, BookingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Booking.
     * @param {BookingUpsertArgs} args - Arguments to update or create a Booking.
     * @example
     * // Update or create a Booking
     * const booking = await prisma.booking.upsert({
     *   create: {
     *     // ... data to create a Booking
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Booking we want to update
     *   }
     * })
     */
    upsert<T extends BookingUpsertArgs>(args: SelectSubset<T, BookingUpsertArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingCountArgs} args - Arguments to filter Bookings to count.
     * @example
     * // Count the number of Bookings
     * const count = await prisma.booking.count({
     *   where: {
     *     // ... the filter for the Bookings we want to count
     *   }
     * })
    **/
    count<T extends BookingCountArgs>(
      args?: Subset<T, BookingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BookingAggregateArgs>(args: Subset<T, BookingAggregateArgs>): Prisma.PrismaPromise<GetBookingAggregateType<T>>

    /**
     * Group by Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BookingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookingGroupByArgs['orderBy'] }
        : { orderBy?: BookingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BookingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Booking model
   */
  readonly fields: BookingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Booking.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    doctor<T extends Booking$doctorArgs<ExtArgs> = {}>(args?: Subset<T, Booking$doctorArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    service<T extends Booking$serviceArgs<ExtArgs> = {}>(args?: Subset<T, Booking$serviceArgs<ExtArgs>>): Prisma__DichvuClient<$Result.GetResult<Prisma.$DichvuPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Booking model
   */
  interface BookingFieldRefs {
    readonly id: FieldRef<"Booking", 'Int'>
    readonly hoten: FieldRef<"Booking", 'String'>
    readonly email: FieldRef<"Booking", 'String'>
    readonly sdt: FieldRef<"Booking", 'String'>
    readonly diachi: FieldRef<"Booking", 'String'>
    readonly dichvu: FieldRef<"Booking", 'String'>
    readonly bacsi: FieldRef<"Booking", 'String'>
    readonly gioitinh: FieldRef<"Booking", 'String'>
    readonly ghichu: FieldRef<"Booking", 'String'>
    readonly thoigianhen: FieldRef<"Booking", 'DateTime'>
    readonly dongy: FieldRef<"Booking", 'Boolean'>
    readonly created_at: FieldRef<"Booking", 'DateTime'>
    readonly doctorId: FieldRef<"Booking", 'Int'>
    readonly serviceId: FieldRef<"Booking", 'Int'>
    readonly xacnhan: FieldRef<"Booking", 'Boolean'>
    readonly huy: FieldRef<"Booking", 'Boolean'>
    readonly trangThai: FieldRef<"Booking", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Booking findUnique
   */
  export type BookingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking findUniqueOrThrow
   */
  export type BookingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking findFirst
   */
  export type BookingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking findFirstOrThrow
   */
  export type BookingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking findMany
   */
  export type BookingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Bookings to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking create
   */
  export type BookingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The data needed to create a Booking.
     */
    data: XOR<BookingCreateInput, BookingUncheckedCreateInput>
  }

  /**
   * Booking createMany
   */
  export type BookingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bookings.
     */
    data: BookingCreateManyInput | BookingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Booking update
   */
  export type BookingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The data needed to update a Booking.
     */
    data: XOR<BookingUpdateInput, BookingUncheckedUpdateInput>
    /**
     * Choose, which Booking to update.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking updateMany
   */
  export type BookingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bookings.
     */
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyInput>
    /**
     * Filter which Bookings to update
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to update.
     */
    limit?: number
  }

  /**
   * Booking upsert
   */
  export type BookingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The filter to search for the Booking to update in case it exists.
     */
    where: BookingWhereUniqueInput
    /**
     * In case the Booking found by the `where` argument doesn't exist, create a new Booking with this data.
     */
    create: XOR<BookingCreateInput, BookingUncheckedCreateInput>
    /**
     * In case the Booking was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookingUpdateInput, BookingUncheckedUpdateInput>
  }

  /**
   * Booking delete
   */
  export type BookingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter which Booking to delete.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking deleteMany
   */
  export type BookingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bookings to delete
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to delete.
     */
    limit?: number
  }

  /**
   * Booking.doctor
   */
  export type Booking$doctorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Booking.service
   */
  export type Booking$serviceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dichvu
     */
    select?: DichvuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dichvu
     */
    omit?: DichvuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DichvuInclude<ExtArgs> | null
    where?: DichvuWhereInput
  }

  /**
   * Booking without action
   */
  export type BookingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
  }


  /**
   * Model Dichvu
   */

  export type AggregateDichvu = {
    _count: DichvuCountAggregateOutputType | null
    _avg: DichvuAvgAggregateOutputType | null
    _sum: DichvuSumAggregateOutputType | null
    _min: DichvuMinAggregateOutputType | null
    _max: DichvuMaxAggregateOutputType | null
  }

  export type DichvuAvgAggregateOutputType = {
    id: number | null
    price: number | null
  }

  export type DichvuSumAggregateOutputType = {
    id: number | null
    price: number | null
  }

  export type DichvuMinAggregateOutputType = {
    id: number | null
    title: string | null
    desc: string | null
    price: number | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DichvuMaxAggregateOutputType = {
    id: number | null
    title: string | null
    desc: string | null
    price: number | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DichvuCountAggregateOutputType = {
    id: number
    title: number
    desc: number
    price: number
    image: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DichvuAvgAggregateInputType = {
    id?: true
    price?: true
  }

  export type DichvuSumAggregateInputType = {
    id?: true
    price?: true
  }

  export type DichvuMinAggregateInputType = {
    id?: true
    title?: true
    desc?: true
    price?: true
    image?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DichvuMaxAggregateInputType = {
    id?: true
    title?: true
    desc?: true
    price?: true
    image?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DichvuCountAggregateInputType = {
    id?: true
    title?: true
    desc?: true
    price?: true
    image?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DichvuAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dichvu to aggregate.
     */
    where?: DichvuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dichvus to fetch.
     */
    orderBy?: DichvuOrderByWithRelationInput | DichvuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DichvuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dichvus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dichvus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Dichvus
    **/
    _count?: true | DichvuCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DichvuAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DichvuSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DichvuMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DichvuMaxAggregateInputType
  }

  export type GetDichvuAggregateType<T extends DichvuAggregateArgs> = {
        [P in keyof T & keyof AggregateDichvu]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDichvu[P]>
      : GetScalarType<T[P], AggregateDichvu[P]>
  }




  export type DichvuGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DichvuWhereInput
    orderBy?: DichvuOrderByWithAggregationInput | DichvuOrderByWithAggregationInput[]
    by: DichvuScalarFieldEnum[] | DichvuScalarFieldEnum
    having?: DichvuScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DichvuCountAggregateInputType | true
    _avg?: DichvuAvgAggregateInputType
    _sum?: DichvuSumAggregateInputType
    _min?: DichvuMinAggregateInputType
    _max?: DichvuMaxAggregateInputType
  }

  export type DichvuGroupByOutputType = {
    id: number
    title: string
    desc: string | null
    price: number
    image: string | null
    createdAt: Date
    updatedAt: Date
    _count: DichvuCountAggregateOutputType | null
    _avg: DichvuAvgAggregateOutputType | null
    _sum: DichvuSumAggregateOutputType | null
    _min: DichvuMinAggregateOutputType | null
    _max: DichvuMaxAggregateOutputType | null
  }

  type GetDichvuGroupByPayload<T extends DichvuGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DichvuGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DichvuGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DichvuGroupByOutputType[P]>
            : GetScalarType<T[P], DichvuGroupByOutputType[P]>
        }
      >
    >


  export type DichvuSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    desc?: boolean
    price?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    doctors?: boolean | Dichvu$doctorsArgs<ExtArgs>
    bookings?: boolean | Dichvu$bookingsArgs<ExtArgs>
    _count?: boolean | DichvuCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dichvu"]>



  export type DichvuSelectScalar = {
    id?: boolean
    title?: boolean
    desc?: boolean
    price?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DichvuOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "desc" | "price" | "image" | "createdAt" | "updatedAt", ExtArgs["result"]["dichvu"]>
  export type DichvuInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctors?: boolean | Dichvu$doctorsArgs<ExtArgs>
    bookings?: boolean | Dichvu$bookingsArgs<ExtArgs>
    _count?: boolean | DichvuCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $DichvuPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Dichvu"
    objects: {
      doctors: Prisma.$UserPayload<ExtArgs>[]
      bookings: Prisma.$BookingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      desc: string | null
      price: number
      image: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["dichvu"]>
    composites: {}
  }

  type DichvuGetPayload<S extends boolean | null | undefined | DichvuDefaultArgs> = $Result.GetResult<Prisma.$DichvuPayload, S>

  type DichvuCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DichvuFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DichvuCountAggregateInputType | true
    }

  export interface DichvuDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Dichvu'], meta: { name: 'Dichvu' } }
    /**
     * Find zero or one Dichvu that matches the filter.
     * @param {DichvuFindUniqueArgs} args - Arguments to find a Dichvu
     * @example
     * // Get one Dichvu
     * const dichvu = await prisma.dichvu.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DichvuFindUniqueArgs>(args: SelectSubset<T, DichvuFindUniqueArgs<ExtArgs>>): Prisma__DichvuClient<$Result.GetResult<Prisma.$DichvuPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Dichvu that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DichvuFindUniqueOrThrowArgs} args - Arguments to find a Dichvu
     * @example
     * // Get one Dichvu
     * const dichvu = await prisma.dichvu.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DichvuFindUniqueOrThrowArgs>(args: SelectSubset<T, DichvuFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DichvuClient<$Result.GetResult<Prisma.$DichvuPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dichvu that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DichvuFindFirstArgs} args - Arguments to find a Dichvu
     * @example
     * // Get one Dichvu
     * const dichvu = await prisma.dichvu.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DichvuFindFirstArgs>(args?: SelectSubset<T, DichvuFindFirstArgs<ExtArgs>>): Prisma__DichvuClient<$Result.GetResult<Prisma.$DichvuPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dichvu that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DichvuFindFirstOrThrowArgs} args - Arguments to find a Dichvu
     * @example
     * // Get one Dichvu
     * const dichvu = await prisma.dichvu.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DichvuFindFirstOrThrowArgs>(args?: SelectSubset<T, DichvuFindFirstOrThrowArgs<ExtArgs>>): Prisma__DichvuClient<$Result.GetResult<Prisma.$DichvuPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Dichvus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DichvuFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Dichvus
     * const dichvus = await prisma.dichvu.findMany()
     * 
     * // Get first 10 Dichvus
     * const dichvus = await prisma.dichvu.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dichvuWithIdOnly = await prisma.dichvu.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DichvuFindManyArgs>(args?: SelectSubset<T, DichvuFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DichvuPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Dichvu.
     * @param {DichvuCreateArgs} args - Arguments to create a Dichvu.
     * @example
     * // Create one Dichvu
     * const Dichvu = await prisma.dichvu.create({
     *   data: {
     *     // ... data to create a Dichvu
     *   }
     * })
     * 
     */
    create<T extends DichvuCreateArgs>(args: SelectSubset<T, DichvuCreateArgs<ExtArgs>>): Prisma__DichvuClient<$Result.GetResult<Prisma.$DichvuPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Dichvus.
     * @param {DichvuCreateManyArgs} args - Arguments to create many Dichvus.
     * @example
     * // Create many Dichvus
     * const dichvu = await prisma.dichvu.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DichvuCreateManyArgs>(args?: SelectSubset<T, DichvuCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Dichvu.
     * @param {DichvuDeleteArgs} args - Arguments to delete one Dichvu.
     * @example
     * // Delete one Dichvu
     * const Dichvu = await prisma.dichvu.delete({
     *   where: {
     *     // ... filter to delete one Dichvu
     *   }
     * })
     * 
     */
    delete<T extends DichvuDeleteArgs>(args: SelectSubset<T, DichvuDeleteArgs<ExtArgs>>): Prisma__DichvuClient<$Result.GetResult<Prisma.$DichvuPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Dichvu.
     * @param {DichvuUpdateArgs} args - Arguments to update one Dichvu.
     * @example
     * // Update one Dichvu
     * const dichvu = await prisma.dichvu.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DichvuUpdateArgs>(args: SelectSubset<T, DichvuUpdateArgs<ExtArgs>>): Prisma__DichvuClient<$Result.GetResult<Prisma.$DichvuPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Dichvus.
     * @param {DichvuDeleteManyArgs} args - Arguments to filter Dichvus to delete.
     * @example
     * // Delete a few Dichvus
     * const { count } = await prisma.dichvu.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DichvuDeleteManyArgs>(args?: SelectSubset<T, DichvuDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dichvus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DichvuUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Dichvus
     * const dichvu = await prisma.dichvu.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DichvuUpdateManyArgs>(args: SelectSubset<T, DichvuUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Dichvu.
     * @param {DichvuUpsertArgs} args - Arguments to update or create a Dichvu.
     * @example
     * // Update or create a Dichvu
     * const dichvu = await prisma.dichvu.upsert({
     *   create: {
     *     // ... data to create a Dichvu
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Dichvu we want to update
     *   }
     * })
     */
    upsert<T extends DichvuUpsertArgs>(args: SelectSubset<T, DichvuUpsertArgs<ExtArgs>>): Prisma__DichvuClient<$Result.GetResult<Prisma.$DichvuPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Dichvus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DichvuCountArgs} args - Arguments to filter Dichvus to count.
     * @example
     * // Count the number of Dichvus
     * const count = await prisma.dichvu.count({
     *   where: {
     *     // ... the filter for the Dichvus we want to count
     *   }
     * })
    **/
    count<T extends DichvuCountArgs>(
      args?: Subset<T, DichvuCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DichvuCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Dichvu.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DichvuAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DichvuAggregateArgs>(args: Subset<T, DichvuAggregateArgs>): Prisma.PrismaPromise<GetDichvuAggregateType<T>>

    /**
     * Group by Dichvu.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DichvuGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DichvuGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DichvuGroupByArgs['orderBy'] }
        : { orderBy?: DichvuGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DichvuGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDichvuGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Dichvu model
   */
  readonly fields: DichvuFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Dichvu.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DichvuClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    doctors<T extends Dichvu$doctorsArgs<ExtArgs> = {}>(args?: Subset<T, Dichvu$doctorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    bookings<T extends Dichvu$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, Dichvu$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Dichvu model
   */
  interface DichvuFieldRefs {
    readonly id: FieldRef<"Dichvu", 'Int'>
    readonly title: FieldRef<"Dichvu", 'String'>
    readonly desc: FieldRef<"Dichvu", 'String'>
    readonly price: FieldRef<"Dichvu", 'Int'>
    readonly image: FieldRef<"Dichvu", 'String'>
    readonly createdAt: FieldRef<"Dichvu", 'DateTime'>
    readonly updatedAt: FieldRef<"Dichvu", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Dichvu findUnique
   */
  export type DichvuFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dichvu
     */
    select?: DichvuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dichvu
     */
    omit?: DichvuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DichvuInclude<ExtArgs> | null
    /**
     * Filter, which Dichvu to fetch.
     */
    where: DichvuWhereUniqueInput
  }

  /**
   * Dichvu findUniqueOrThrow
   */
  export type DichvuFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dichvu
     */
    select?: DichvuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dichvu
     */
    omit?: DichvuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DichvuInclude<ExtArgs> | null
    /**
     * Filter, which Dichvu to fetch.
     */
    where: DichvuWhereUniqueInput
  }

  /**
   * Dichvu findFirst
   */
  export type DichvuFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dichvu
     */
    select?: DichvuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dichvu
     */
    omit?: DichvuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DichvuInclude<ExtArgs> | null
    /**
     * Filter, which Dichvu to fetch.
     */
    where?: DichvuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dichvus to fetch.
     */
    orderBy?: DichvuOrderByWithRelationInput | DichvuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dichvus.
     */
    cursor?: DichvuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dichvus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dichvus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dichvus.
     */
    distinct?: DichvuScalarFieldEnum | DichvuScalarFieldEnum[]
  }

  /**
   * Dichvu findFirstOrThrow
   */
  export type DichvuFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dichvu
     */
    select?: DichvuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dichvu
     */
    omit?: DichvuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DichvuInclude<ExtArgs> | null
    /**
     * Filter, which Dichvu to fetch.
     */
    where?: DichvuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dichvus to fetch.
     */
    orderBy?: DichvuOrderByWithRelationInput | DichvuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dichvus.
     */
    cursor?: DichvuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dichvus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dichvus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dichvus.
     */
    distinct?: DichvuScalarFieldEnum | DichvuScalarFieldEnum[]
  }

  /**
   * Dichvu findMany
   */
  export type DichvuFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dichvu
     */
    select?: DichvuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dichvu
     */
    omit?: DichvuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DichvuInclude<ExtArgs> | null
    /**
     * Filter, which Dichvus to fetch.
     */
    where?: DichvuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dichvus to fetch.
     */
    orderBy?: DichvuOrderByWithRelationInput | DichvuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Dichvus.
     */
    cursor?: DichvuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dichvus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dichvus.
     */
    skip?: number
    distinct?: DichvuScalarFieldEnum | DichvuScalarFieldEnum[]
  }

  /**
   * Dichvu create
   */
  export type DichvuCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dichvu
     */
    select?: DichvuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dichvu
     */
    omit?: DichvuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DichvuInclude<ExtArgs> | null
    /**
     * The data needed to create a Dichvu.
     */
    data: XOR<DichvuCreateInput, DichvuUncheckedCreateInput>
  }

  /**
   * Dichvu createMany
   */
  export type DichvuCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Dichvus.
     */
    data: DichvuCreateManyInput | DichvuCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Dichvu update
   */
  export type DichvuUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dichvu
     */
    select?: DichvuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dichvu
     */
    omit?: DichvuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DichvuInclude<ExtArgs> | null
    /**
     * The data needed to update a Dichvu.
     */
    data: XOR<DichvuUpdateInput, DichvuUncheckedUpdateInput>
    /**
     * Choose, which Dichvu to update.
     */
    where: DichvuWhereUniqueInput
  }

  /**
   * Dichvu updateMany
   */
  export type DichvuUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Dichvus.
     */
    data: XOR<DichvuUpdateManyMutationInput, DichvuUncheckedUpdateManyInput>
    /**
     * Filter which Dichvus to update
     */
    where?: DichvuWhereInput
    /**
     * Limit how many Dichvus to update.
     */
    limit?: number
  }

  /**
   * Dichvu upsert
   */
  export type DichvuUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dichvu
     */
    select?: DichvuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dichvu
     */
    omit?: DichvuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DichvuInclude<ExtArgs> | null
    /**
     * The filter to search for the Dichvu to update in case it exists.
     */
    where: DichvuWhereUniqueInput
    /**
     * In case the Dichvu found by the `where` argument doesn't exist, create a new Dichvu with this data.
     */
    create: XOR<DichvuCreateInput, DichvuUncheckedCreateInput>
    /**
     * In case the Dichvu was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DichvuUpdateInput, DichvuUncheckedUpdateInput>
  }

  /**
   * Dichvu delete
   */
  export type DichvuDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dichvu
     */
    select?: DichvuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dichvu
     */
    omit?: DichvuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DichvuInclude<ExtArgs> | null
    /**
     * Filter which Dichvu to delete.
     */
    where: DichvuWhereUniqueInput
  }

  /**
   * Dichvu deleteMany
   */
  export type DichvuDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dichvus to delete
     */
    where?: DichvuWhereInput
    /**
     * Limit how many Dichvus to delete.
     */
    limit?: number
  }

  /**
   * Dichvu.doctors
   */
  export type Dichvu$doctorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Dichvu.bookings
   */
  export type Dichvu$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    cursor?: BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Dichvu without action
   */
  export type DichvuDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dichvu
     */
    select?: DichvuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dichvu
     */
    omit?: DichvuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DichvuInclude<ExtArgs> | null
  }


  /**
   * Model WorkSchedule
   */

  export type AggregateWorkSchedule = {
    _count: WorkScheduleCountAggregateOutputType | null
    _avg: WorkScheduleAvgAggregateOutputType | null
    _sum: WorkScheduleSumAggregateOutputType | null
    _min: WorkScheduleMinAggregateOutputType | null
    _max: WorkScheduleMaxAggregateOutputType | null
  }

  export type WorkScheduleAvgAggregateOutputType = {
    id: number | null
    doctorId: number | null
  }

  export type WorkScheduleSumAggregateOutputType = {
    id: number | null
    doctorId: number | null
  }

  export type WorkScheduleMinAggregateOutputType = {
    id: number | null
    date: Date | null
    startTime: string | null
    endTime: string | null
    room: string | null
    status: string | null
    doctorId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WorkScheduleMaxAggregateOutputType = {
    id: number | null
    date: Date | null
    startTime: string | null
    endTime: string | null
    room: string | null
    status: string | null
    doctorId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WorkScheduleCountAggregateOutputType = {
    id: number
    date: number
    startTime: number
    endTime: number
    room: number
    status: number
    doctorId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WorkScheduleAvgAggregateInputType = {
    id?: true
    doctorId?: true
  }

  export type WorkScheduleSumAggregateInputType = {
    id?: true
    doctorId?: true
  }

  export type WorkScheduleMinAggregateInputType = {
    id?: true
    date?: true
    startTime?: true
    endTime?: true
    room?: true
    status?: true
    doctorId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WorkScheduleMaxAggregateInputType = {
    id?: true
    date?: true
    startTime?: true
    endTime?: true
    room?: true
    status?: true
    doctorId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WorkScheduleCountAggregateInputType = {
    id?: true
    date?: true
    startTime?: true
    endTime?: true
    room?: true
    status?: true
    doctorId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WorkScheduleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkSchedule to aggregate.
     */
    where?: WorkScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkSchedules to fetch.
     */
    orderBy?: WorkScheduleOrderByWithRelationInput | WorkScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkSchedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WorkSchedules
    **/
    _count?: true | WorkScheduleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WorkScheduleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WorkScheduleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkScheduleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkScheduleMaxAggregateInputType
  }

  export type GetWorkScheduleAggregateType<T extends WorkScheduleAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkSchedule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkSchedule[P]>
      : GetScalarType<T[P], AggregateWorkSchedule[P]>
  }




  export type WorkScheduleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkScheduleWhereInput
    orderBy?: WorkScheduleOrderByWithAggregationInput | WorkScheduleOrderByWithAggregationInput[]
    by: WorkScheduleScalarFieldEnum[] | WorkScheduleScalarFieldEnum
    having?: WorkScheduleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkScheduleCountAggregateInputType | true
    _avg?: WorkScheduleAvgAggregateInputType
    _sum?: WorkScheduleSumAggregateInputType
    _min?: WorkScheduleMinAggregateInputType
    _max?: WorkScheduleMaxAggregateInputType
  }

  export type WorkScheduleGroupByOutputType = {
    id: number
    date: Date
    startTime: string
    endTime: string
    room: string
    status: string
    doctorId: number | null
    createdAt: Date
    updatedAt: Date
    _count: WorkScheduleCountAggregateOutputType | null
    _avg: WorkScheduleAvgAggregateOutputType | null
    _sum: WorkScheduleSumAggregateOutputType | null
    _min: WorkScheduleMinAggregateOutputType | null
    _max: WorkScheduleMaxAggregateOutputType | null
  }

  type GetWorkScheduleGroupByPayload<T extends WorkScheduleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkScheduleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkScheduleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkScheduleGroupByOutputType[P]>
            : GetScalarType<T[P], WorkScheduleGroupByOutputType[P]>
        }
      >
    >


  export type WorkScheduleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    startTime?: boolean
    endTime?: boolean
    room?: boolean
    status?: boolean
    doctorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    doctor?: boolean | WorkSchedule$doctorArgs<ExtArgs>
  }, ExtArgs["result"]["workSchedule"]>



  export type WorkScheduleSelectScalar = {
    id?: boolean
    date?: boolean
    startTime?: boolean
    endTime?: boolean
    room?: boolean
    status?: boolean
    doctorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type WorkScheduleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "date" | "startTime" | "endTime" | "room" | "status" | "doctorId" | "createdAt" | "updatedAt", ExtArgs["result"]["workSchedule"]>
  export type WorkScheduleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctor?: boolean | WorkSchedule$doctorArgs<ExtArgs>
  }

  export type $WorkSchedulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WorkSchedule"
    objects: {
      doctor: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      date: Date
      startTime: string
      endTime: string
      room: string
      status: string
      doctorId: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["workSchedule"]>
    composites: {}
  }

  type WorkScheduleGetPayload<S extends boolean | null | undefined | WorkScheduleDefaultArgs> = $Result.GetResult<Prisma.$WorkSchedulePayload, S>

  type WorkScheduleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkScheduleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkScheduleCountAggregateInputType | true
    }

  export interface WorkScheduleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WorkSchedule'], meta: { name: 'WorkSchedule' } }
    /**
     * Find zero or one WorkSchedule that matches the filter.
     * @param {WorkScheduleFindUniqueArgs} args - Arguments to find a WorkSchedule
     * @example
     * // Get one WorkSchedule
     * const workSchedule = await prisma.workSchedule.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkScheduleFindUniqueArgs>(args: SelectSubset<T, WorkScheduleFindUniqueArgs<ExtArgs>>): Prisma__WorkScheduleClient<$Result.GetResult<Prisma.$WorkSchedulePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WorkSchedule that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkScheduleFindUniqueOrThrowArgs} args - Arguments to find a WorkSchedule
     * @example
     * // Get one WorkSchedule
     * const workSchedule = await prisma.workSchedule.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkScheduleFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkScheduleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkScheduleClient<$Result.GetResult<Prisma.$WorkSchedulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkSchedule that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkScheduleFindFirstArgs} args - Arguments to find a WorkSchedule
     * @example
     * // Get one WorkSchedule
     * const workSchedule = await prisma.workSchedule.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkScheduleFindFirstArgs>(args?: SelectSubset<T, WorkScheduleFindFirstArgs<ExtArgs>>): Prisma__WorkScheduleClient<$Result.GetResult<Prisma.$WorkSchedulePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkSchedule that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkScheduleFindFirstOrThrowArgs} args - Arguments to find a WorkSchedule
     * @example
     * // Get one WorkSchedule
     * const workSchedule = await prisma.workSchedule.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkScheduleFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkScheduleFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkScheduleClient<$Result.GetResult<Prisma.$WorkSchedulePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WorkSchedules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkScheduleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorkSchedules
     * const workSchedules = await prisma.workSchedule.findMany()
     * 
     * // Get first 10 WorkSchedules
     * const workSchedules = await prisma.workSchedule.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workScheduleWithIdOnly = await prisma.workSchedule.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkScheduleFindManyArgs>(args?: SelectSubset<T, WorkScheduleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkSchedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WorkSchedule.
     * @param {WorkScheduleCreateArgs} args - Arguments to create a WorkSchedule.
     * @example
     * // Create one WorkSchedule
     * const WorkSchedule = await prisma.workSchedule.create({
     *   data: {
     *     // ... data to create a WorkSchedule
     *   }
     * })
     * 
     */
    create<T extends WorkScheduleCreateArgs>(args: SelectSubset<T, WorkScheduleCreateArgs<ExtArgs>>): Prisma__WorkScheduleClient<$Result.GetResult<Prisma.$WorkSchedulePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WorkSchedules.
     * @param {WorkScheduleCreateManyArgs} args - Arguments to create many WorkSchedules.
     * @example
     * // Create many WorkSchedules
     * const workSchedule = await prisma.workSchedule.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkScheduleCreateManyArgs>(args?: SelectSubset<T, WorkScheduleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a WorkSchedule.
     * @param {WorkScheduleDeleteArgs} args - Arguments to delete one WorkSchedule.
     * @example
     * // Delete one WorkSchedule
     * const WorkSchedule = await prisma.workSchedule.delete({
     *   where: {
     *     // ... filter to delete one WorkSchedule
     *   }
     * })
     * 
     */
    delete<T extends WorkScheduleDeleteArgs>(args: SelectSubset<T, WorkScheduleDeleteArgs<ExtArgs>>): Prisma__WorkScheduleClient<$Result.GetResult<Prisma.$WorkSchedulePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WorkSchedule.
     * @param {WorkScheduleUpdateArgs} args - Arguments to update one WorkSchedule.
     * @example
     * // Update one WorkSchedule
     * const workSchedule = await prisma.workSchedule.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkScheduleUpdateArgs>(args: SelectSubset<T, WorkScheduleUpdateArgs<ExtArgs>>): Prisma__WorkScheduleClient<$Result.GetResult<Prisma.$WorkSchedulePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WorkSchedules.
     * @param {WorkScheduleDeleteManyArgs} args - Arguments to filter WorkSchedules to delete.
     * @example
     * // Delete a few WorkSchedules
     * const { count } = await prisma.workSchedule.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkScheduleDeleteManyArgs>(args?: SelectSubset<T, WorkScheduleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkSchedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkScheduleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorkSchedules
     * const workSchedule = await prisma.workSchedule.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkScheduleUpdateManyArgs>(args: SelectSubset<T, WorkScheduleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one WorkSchedule.
     * @param {WorkScheduleUpsertArgs} args - Arguments to update or create a WorkSchedule.
     * @example
     * // Update or create a WorkSchedule
     * const workSchedule = await prisma.workSchedule.upsert({
     *   create: {
     *     // ... data to create a WorkSchedule
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorkSchedule we want to update
     *   }
     * })
     */
    upsert<T extends WorkScheduleUpsertArgs>(args: SelectSubset<T, WorkScheduleUpsertArgs<ExtArgs>>): Prisma__WorkScheduleClient<$Result.GetResult<Prisma.$WorkSchedulePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WorkSchedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkScheduleCountArgs} args - Arguments to filter WorkSchedules to count.
     * @example
     * // Count the number of WorkSchedules
     * const count = await prisma.workSchedule.count({
     *   where: {
     *     // ... the filter for the WorkSchedules we want to count
     *   }
     * })
    **/
    count<T extends WorkScheduleCountArgs>(
      args?: Subset<T, WorkScheduleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkScheduleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WorkSchedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkScheduleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WorkScheduleAggregateArgs>(args: Subset<T, WorkScheduleAggregateArgs>): Prisma.PrismaPromise<GetWorkScheduleAggregateType<T>>

    /**
     * Group by WorkSchedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkScheduleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WorkScheduleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkScheduleGroupByArgs['orderBy'] }
        : { orderBy?: WorkScheduleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WorkScheduleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkScheduleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WorkSchedule model
   */
  readonly fields: WorkScheduleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WorkSchedule.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkScheduleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    doctor<T extends WorkSchedule$doctorArgs<ExtArgs> = {}>(args?: Subset<T, WorkSchedule$doctorArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WorkSchedule model
   */
  interface WorkScheduleFieldRefs {
    readonly id: FieldRef<"WorkSchedule", 'Int'>
    readonly date: FieldRef<"WorkSchedule", 'DateTime'>
    readonly startTime: FieldRef<"WorkSchedule", 'String'>
    readonly endTime: FieldRef<"WorkSchedule", 'String'>
    readonly room: FieldRef<"WorkSchedule", 'String'>
    readonly status: FieldRef<"WorkSchedule", 'String'>
    readonly doctorId: FieldRef<"WorkSchedule", 'Int'>
    readonly createdAt: FieldRef<"WorkSchedule", 'DateTime'>
    readonly updatedAt: FieldRef<"WorkSchedule", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WorkSchedule findUnique
   */
  export type WorkScheduleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkSchedule
     */
    select?: WorkScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkSchedule
     */
    omit?: WorkScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkScheduleInclude<ExtArgs> | null
    /**
     * Filter, which WorkSchedule to fetch.
     */
    where: WorkScheduleWhereUniqueInput
  }

  /**
   * WorkSchedule findUniqueOrThrow
   */
  export type WorkScheduleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkSchedule
     */
    select?: WorkScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkSchedule
     */
    omit?: WorkScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkScheduleInclude<ExtArgs> | null
    /**
     * Filter, which WorkSchedule to fetch.
     */
    where: WorkScheduleWhereUniqueInput
  }

  /**
   * WorkSchedule findFirst
   */
  export type WorkScheduleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkSchedule
     */
    select?: WorkScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkSchedule
     */
    omit?: WorkScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkScheduleInclude<ExtArgs> | null
    /**
     * Filter, which WorkSchedule to fetch.
     */
    where?: WorkScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkSchedules to fetch.
     */
    orderBy?: WorkScheduleOrderByWithRelationInput | WorkScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkSchedules.
     */
    cursor?: WorkScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkSchedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkSchedules.
     */
    distinct?: WorkScheduleScalarFieldEnum | WorkScheduleScalarFieldEnum[]
  }

  /**
   * WorkSchedule findFirstOrThrow
   */
  export type WorkScheduleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkSchedule
     */
    select?: WorkScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkSchedule
     */
    omit?: WorkScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkScheduleInclude<ExtArgs> | null
    /**
     * Filter, which WorkSchedule to fetch.
     */
    where?: WorkScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkSchedules to fetch.
     */
    orderBy?: WorkScheduleOrderByWithRelationInput | WorkScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkSchedules.
     */
    cursor?: WorkScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkSchedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkSchedules.
     */
    distinct?: WorkScheduleScalarFieldEnum | WorkScheduleScalarFieldEnum[]
  }

  /**
   * WorkSchedule findMany
   */
  export type WorkScheduleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkSchedule
     */
    select?: WorkScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkSchedule
     */
    omit?: WorkScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkScheduleInclude<ExtArgs> | null
    /**
     * Filter, which WorkSchedules to fetch.
     */
    where?: WorkScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkSchedules to fetch.
     */
    orderBy?: WorkScheduleOrderByWithRelationInput | WorkScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WorkSchedules.
     */
    cursor?: WorkScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkSchedules.
     */
    skip?: number
    distinct?: WorkScheduleScalarFieldEnum | WorkScheduleScalarFieldEnum[]
  }

  /**
   * WorkSchedule create
   */
  export type WorkScheduleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkSchedule
     */
    select?: WorkScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkSchedule
     */
    omit?: WorkScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkScheduleInclude<ExtArgs> | null
    /**
     * The data needed to create a WorkSchedule.
     */
    data: XOR<WorkScheduleCreateInput, WorkScheduleUncheckedCreateInput>
  }

  /**
   * WorkSchedule createMany
   */
  export type WorkScheduleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WorkSchedules.
     */
    data: WorkScheduleCreateManyInput | WorkScheduleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WorkSchedule update
   */
  export type WorkScheduleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkSchedule
     */
    select?: WorkScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkSchedule
     */
    omit?: WorkScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkScheduleInclude<ExtArgs> | null
    /**
     * The data needed to update a WorkSchedule.
     */
    data: XOR<WorkScheduleUpdateInput, WorkScheduleUncheckedUpdateInput>
    /**
     * Choose, which WorkSchedule to update.
     */
    where: WorkScheduleWhereUniqueInput
  }

  /**
   * WorkSchedule updateMany
   */
  export type WorkScheduleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WorkSchedules.
     */
    data: XOR<WorkScheduleUpdateManyMutationInput, WorkScheduleUncheckedUpdateManyInput>
    /**
     * Filter which WorkSchedules to update
     */
    where?: WorkScheduleWhereInput
    /**
     * Limit how many WorkSchedules to update.
     */
    limit?: number
  }

  /**
   * WorkSchedule upsert
   */
  export type WorkScheduleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkSchedule
     */
    select?: WorkScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkSchedule
     */
    omit?: WorkScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkScheduleInclude<ExtArgs> | null
    /**
     * The filter to search for the WorkSchedule to update in case it exists.
     */
    where: WorkScheduleWhereUniqueInput
    /**
     * In case the WorkSchedule found by the `where` argument doesn't exist, create a new WorkSchedule with this data.
     */
    create: XOR<WorkScheduleCreateInput, WorkScheduleUncheckedCreateInput>
    /**
     * In case the WorkSchedule was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkScheduleUpdateInput, WorkScheduleUncheckedUpdateInput>
  }

  /**
   * WorkSchedule delete
   */
  export type WorkScheduleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkSchedule
     */
    select?: WorkScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkSchedule
     */
    omit?: WorkScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkScheduleInclude<ExtArgs> | null
    /**
     * Filter which WorkSchedule to delete.
     */
    where: WorkScheduleWhereUniqueInput
  }

  /**
   * WorkSchedule deleteMany
   */
  export type WorkScheduleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkSchedules to delete
     */
    where?: WorkScheduleWhereInput
    /**
     * Limit how many WorkSchedules to delete.
     */
    limit?: number
  }

  /**
   * WorkSchedule.doctor
   */
  export type WorkSchedule$doctorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * WorkSchedule without action
   */
  export type WorkScheduleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkSchedule
     */
    select?: WorkScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkSchedule
     */
    omit?: WorkScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkScheduleInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    avatar: 'avatar',
    role: 'role',
    dichvuId: 'dichvuId',
    chuyenmon: 'chuyenmon',
    namkinhnghiem: 'namkinhnghiem',
    gioithieu: 'gioithieu',
    thanhtuu: 'thanhtuu',
    phone: 'phone',
    address: 'address',
    gioitinh: 'gioitinh',
    resetToken: 'resetToken',
    resetExpire: 'resetExpire'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const BookingScalarFieldEnum: {
    id: 'id',
    hoten: 'hoten',
    email: 'email',
    sdt: 'sdt',
    diachi: 'diachi',
    dichvu: 'dichvu',
    bacsi: 'bacsi',
    gioitinh: 'gioitinh',
    ghichu: 'ghichu',
    thoigianhen: 'thoigianhen',
    dongy: 'dongy',
    created_at: 'created_at',
    doctorId: 'doctorId',
    serviceId: 'serviceId',
    xacnhan: 'xacnhan',
    huy: 'huy',
    trangThai: 'trangThai'
  };

  export type BookingScalarFieldEnum = (typeof BookingScalarFieldEnum)[keyof typeof BookingScalarFieldEnum]


  export const DichvuScalarFieldEnum: {
    id: 'id',
    title: 'title',
    desc: 'desc',
    price: 'price',
    image: 'image',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DichvuScalarFieldEnum = (typeof DichvuScalarFieldEnum)[keyof typeof DichvuScalarFieldEnum]


  export const WorkScheduleScalarFieldEnum: {
    id: 'id',
    date: 'date',
    startTime: 'startTime',
    endTime: 'endTime',
    room: 'room',
    status: 'status',
    doctorId: 'doctorId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WorkScheduleScalarFieldEnum = (typeof WorkScheduleScalarFieldEnum)[keyof typeof WorkScheduleScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const UserOrderByRelevanceFieldEnum: {
    name: 'name',
    email: 'email',
    password: 'password',
    avatar: 'avatar',
    role: 'role',
    chuyenmon: 'chuyenmon',
    gioithieu: 'gioithieu',
    thanhtuu: 'thanhtuu',
    phone: 'phone',
    address: 'address',
    gioitinh: 'gioitinh',
    resetToken: 'resetToken'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const BookingOrderByRelevanceFieldEnum: {
    hoten: 'hoten',
    email: 'email',
    sdt: 'sdt',
    diachi: 'diachi',
    dichvu: 'dichvu',
    bacsi: 'bacsi',
    gioitinh: 'gioitinh',
    ghichu: 'ghichu',
    trangThai: 'trangThai'
  };

  export type BookingOrderByRelevanceFieldEnum = (typeof BookingOrderByRelevanceFieldEnum)[keyof typeof BookingOrderByRelevanceFieldEnum]


  export const DichvuOrderByRelevanceFieldEnum: {
    title: 'title',
    desc: 'desc',
    image: 'image'
  };

  export type DichvuOrderByRelevanceFieldEnum = (typeof DichvuOrderByRelevanceFieldEnum)[keyof typeof DichvuOrderByRelevanceFieldEnum]


  export const WorkScheduleOrderByRelevanceFieldEnum: {
    startTime: 'startTime',
    endTime: 'endTime',
    room: 'room',
    status: 'status'
  };

  export type WorkScheduleOrderByRelevanceFieldEnum = (typeof WorkScheduleOrderByRelevanceFieldEnum)[keyof typeof WorkScheduleOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringNullableFilter<"User"> | string | null
    avatar?: StringNullableFilter<"User"> | string | null
    role?: StringFilter<"User"> | string
    dichvuId?: IntNullableFilter<"User"> | number | null
    chuyenmon?: StringNullableFilter<"User"> | string | null
    namkinhnghiem?: IntNullableFilter<"User"> | number | null
    gioithieu?: StringNullableFilter<"User"> | string | null
    thanhtuu?: StringNullableFilter<"User"> | string | null
    phone?: StringNullableFilter<"User"> | string | null
    address?: StringNullableFilter<"User"> | string | null
    gioitinh?: StringNullableFilter<"User"> | string | null
    resetToken?: StringNullableFilter<"User"> | string | null
    resetExpire?: DateTimeNullableFilter<"User"> | Date | string | null
    dichvu?: XOR<DichvuNullableScalarRelationFilter, DichvuWhereInput> | null
    bookings?: BookingListRelationFilter
    workSchedules?: WorkScheduleListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    role?: SortOrder
    dichvuId?: SortOrderInput | SortOrder
    chuyenmon?: SortOrderInput | SortOrder
    namkinhnghiem?: SortOrderInput | SortOrder
    gioithieu?: SortOrderInput | SortOrder
    thanhtuu?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    gioitinh?: SortOrderInput | SortOrder
    resetToken?: SortOrderInput | SortOrder
    resetExpire?: SortOrderInput | SortOrder
    dichvu?: DichvuOrderByWithRelationInput
    bookings?: BookingOrderByRelationAggregateInput
    workSchedules?: WorkScheduleOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringNullableFilter<"User"> | string | null
    avatar?: StringNullableFilter<"User"> | string | null
    role?: StringFilter<"User"> | string
    dichvuId?: IntNullableFilter<"User"> | number | null
    chuyenmon?: StringNullableFilter<"User"> | string | null
    namkinhnghiem?: IntNullableFilter<"User"> | number | null
    gioithieu?: StringNullableFilter<"User"> | string | null
    thanhtuu?: StringNullableFilter<"User"> | string | null
    phone?: StringNullableFilter<"User"> | string | null
    address?: StringNullableFilter<"User"> | string | null
    gioitinh?: StringNullableFilter<"User"> | string | null
    resetToken?: StringNullableFilter<"User"> | string | null
    resetExpire?: DateTimeNullableFilter<"User"> | Date | string | null
    dichvu?: XOR<DichvuNullableScalarRelationFilter, DichvuWhereInput> | null
    bookings?: BookingListRelationFilter
    workSchedules?: WorkScheduleListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    role?: SortOrder
    dichvuId?: SortOrderInput | SortOrder
    chuyenmon?: SortOrderInput | SortOrder
    namkinhnghiem?: SortOrderInput | SortOrder
    gioithieu?: SortOrderInput | SortOrder
    thanhtuu?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    gioitinh?: SortOrderInput | SortOrder
    resetToken?: SortOrderInput | SortOrder
    resetExpire?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    avatar?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: StringWithAggregatesFilter<"User"> | string
    dichvuId?: IntNullableWithAggregatesFilter<"User"> | number | null
    chuyenmon?: StringNullableWithAggregatesFilter<"User"> | string | null
    namkinhnghiem?: IntNullableWithAggregatesFilter<"User"> | number | null
    gioithieu?: StringNullableWithAggregatesFilter<"User"> | string | null
    thanhtuu?: StringNullableWithAggregatesFilter<"User"> | string | null
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    address?: StringNullableWithAggregatesFilter<"User"> | string | null
    gioitinh?: StringNullableWithAggregatesFilter<"User"> | string | null
    resetToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    resetExpire?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
  }

  export type BookingWhereInput = {
    AND?: BookingWhereInput | BookingWhereInput[]
    OR?: BookingWhereInput[]
    NOT?: BookingWhereInput | BookingWhereInput[]
    id?: IntFilter<"Booking"> | number
    hoten?: StringFilter<"Booking"> | string
    email?: StringFilter<"Booking"> | string
    sdt?: StringFilter<"Booking"> | string
    diachi?: StringFilter<"Booking"> | string
    dichvu?: StringFilter<"Booking"> | string
    bacsi?: StringFilter<"Booking"> | string
    gioitinh?: StringNullableFilter<"Booking"> | string | null
    ghichu?: StringNullableFilter<"Booking"> | string | null
    thoigianhen?: DateTimeFilter<"Booking"> | Date | string
    dongy?: BoolFilter<"Booking"> | boolean
    created_at?: DateTimeFilter<"Booking"> | Date | string
    doctorId?: IntNullableFilter<"Booking"> | number | null
    serviceId?: IntNullableFilter<"Booking"> | number | null
    xacnhan?: BoolFilter<"Booking"> | boolean
    huy?: BoolFilter<"Booking"> | boolean
    trangThai?: StringNullableFilter<"Booking"> | string | null
    doctor?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    service?: XOR<DichvuNullableScalarRelationFilter, DichvuWhereInput> | null
  }

  export type BookingOrderByWithRelationInput = {
    id?: SortOrder
    hoten?: SortOrder
    email?: SortOrder
    sdt?: SortOrder
    diachi?: SortOrder
    dichvu?: SortOrder
    bacsi?: SortOrder
    gioitinh?: SortOrderInput | SortOrder
    ghichu?: SortOrderInput | SortOrder
    thoigianhen?: SortOrder
    dongy?: SortOrder
    created_at?: SortOrder
    doctorId?: SortOrderInput | SortOrder
    serviceId?: SortOrderInput | SortOrder
    xacnhan?: SortOrder
    huy?: SortOrder
    trangThai?: SortOrderInput | SortOrder
    doctor?: UserOrderByWithRelationInput
    service?: DichvuOrderByWithRelationInput
    _relevance?: BookingOrderByRelevanceInput
  }

  export type BookingWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BookingWhereInput | BookingWhereInput[]
    OR?: BookingWhereInput[]
    NOT?: BookingWhereInput | BookingWhereInput[]
    hoten?: StringFilter<"Booking"> | string
    email?: StringFilter<"Booking"> | string
    sdt?: StringFilter<"Booking"> | string
    diachi?: StringFilter<"Booking"> | string
    dichvu?: StringFilter<"Booking"> | string
    bacsi?: StringFilter<"Booking"> | string
    gioitinh?: StringNullableFilter<"Booking"> | string | null
    ghichu?: StringNullableFilter<"Booking"> | string | null
    thoigianhen?: DateTimeFilter<"Booking"> | Date | string
    dongy?: BoolFilter<"Booking"> | boolean
    created_at?: DateTimeFilter<"Booking"> | Date | string
    doctorId?: IntNullableFilter<"Booking"> | number | null
    serviceId?: IntNullableFilter<"Booking"> | number | null
    xacnhan?: BoolFilter<"Booking"> | boolean
    huy?: BoolFilter<"Booking"> | boolean
    trangThai?: StringNullableFilter<"Booking"> | string | null
    doctor?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    service?: XOR<DichvuNullableScalarRelationFilter, DichvuWhereInput> | null
  }, "id">

  export type BookingOrderByWithAggregationInput = {
    id?: SortOrder
    hoten?: SortOrder
    email?: SortOrder
    sdt?: SortOrder
    diachi?: SortOrder
    dichvu?: SortOrder
    bacsi?: SortOrder
    gioitinh?: SortOrderInput | SortOrder
    ghichu?: SortOrderInput | SortOrder
    thoigianhen?: SortOrder
    dongy?: SortOrder
    created_at?: SortOrder
    doctorId?: SortOrderInput | SortOrder
    serviceId?: SortOrderInput | SortOrder
    xacnhan?: SortOrder
    huy?: SortOrder
    trangThai?: SortOrderInput | SortOrder
    _count?: BookingCountOrderByAggregateInput
    _avg?: BookingAvgOrderByAggregateInput
    _max?: BookingMaxOrderByAggregateInput
    _min?: BookingMinOrderByAggregateInput
    _sum?: BookingSumOrderByAggregateInput
  }

  export type BookingScalarWhereWithAggregatesInput = {
    AND?: BookingScalarWhereWithAggregatesInput | BookingScalarWhereWithAggregatesInput[]
    OR?: BookingScalarWhereWithAggregatesInput[]
    NOT?: BookingScalarWhereWithAggregatesInput | BookingScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Booking"> | number
    hoten?: StringWithAggregatesFilter<"Booking"> | string
    email?: StringWithAggregatesFilter<"Booking"> | string
    sdt?: StringWithAggregatesFilter<"Booking"> | string
    diachi?: StringWithAggregatesFilter<"Booking"> | string
    dichvu?: StringWithAggregatesFilter<"Booking"> | string
    bacsi?: StringWithAggregatesFilter<"Booking"> | string
    gioitinh?: StringNullableWithAggregatesFilter<"Booking"> | string | null
    ghichu?: StringNullableWithAggregatesFilter<"Booking"> | string | null
    thoigianhen?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
    dongy?: BoolWithAggregatesFilter<"Booking"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
    doctorId?: IntNullableWithAggregatesFilter<"Booking"> | number | null
    serviceId?: IntNullableWithAggregatesFilter<"Booking"> | number | null
    xacnhan?: BoolWithAggregatesFilter<"Booking"> | boolean
    huy?: BoolWithAggregatesFilter<"Booking"> | boolean
    trangThai?: StringNullableWithAggregatesFilter<"Booking"> | string | null
  }

  export type DichvuWhereInput = {
    AND?: DichvuWhereInput | DichvuWhereInput[]
    OR?: DichvuWhereInput[]
    NOT?: DichvuWhereInput | DichvuWhereInput[]
    id?: IntFilter<"Dichvu"> | number
    title?: StringFilter<"Dichvu"> | string
    desc?: StringNullableFilter<"Dichvu"> | string | null
    price?: IntFilter<"Dichvu"> | number
    image?: StringNullableFilter<"Dichvu"> | string | null
    createdAt?: DateTimeFilter<"Dichvu"> | Date | string
    updatedAt?: DateTimeFilter<"Dichvu"> | Date | string
    doctors?: UserListRelationFilter
    bookings?: BookingListRelationFilter
  }

  export type DichvuOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    desc?: SortOrderInput | SortOrder
    price?: SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    doctors?: UserOrderByRelationAggregateInput
    bookings?: BookingOrderByRelationAggregateInput
    _relevance?: DichvuOrderByRelevanceInput
  }

  export type DichvuWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    title?: string
    AND?: DichvuWhereInput | DichvuWhereInput[]
    OR?: DichvuWhereInput[]
    NOT?: DichvuWhereInput | DichvuWhereInput[]
    desc?: StringNullableFilter<"Dichvu"> | string | null
    price?: IntFilter<"Dichvu"> | number
    image?: StringNullableFilter<"Dichvu"> | string | null
    createdAt?: DateTimeFilter<"Dichvu"> | Date | string
    updatedAt?: DateTimeFilter<"Dichvu"> | Date | string
    doctors?: UserListRelationFilter
    bookings?: BookingListRelationFilter
  }, "id" | "title">

  export type DichvuOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    desc?: SortOrderInput | SortOrder
    price?: SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DichvuCountOrderByAggregateInput
    _avg?: DichvuAvgOrderByAggregateInput
    _max?: DichvuMaxOrderByAggregateInput
    _min?: DichvuMinOrderByAggregateInput
    _sum?: DichvuSumOrderByAggregateInput
  }

  export type DichvuScalarWhereWithAggregatesInput = {
    AND?: DichvuScalarWhereWithAggregatesInput | DichvuScalarWhereWithAggregatesInput[]
    OR?: DichvuScalarWhereWithAggregatesInput[]
    NOT?: DichvuScalarWhereWithAggregatesInput | DichvuScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Dichvu"> | number
    title?: StringWithAggregatesFilter<"Dichvu"> | string
    desc?: StringNullableWithAggregatesFilter<"Dichvu"> | string | null
    price?: IntWithAggregatesFilter<"Dichvu"> | number
    image?: StringNullableWithAggregatesFilter<"Dichvu"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Dichvu"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Dichvu"> | Date | string
  }

  export type WorkScheduleWhereInput = {
    AND?: WorkScheduleWhereInput | WorkScheduleWhereInput[]
    OR?: WorkScheduleWhereInput[]
    NOT?: WorkScheduleWhereInput | WorkScheduleWhereInput[]
    id?: IntFilter<"WorkSchedule"> | number
    date?: DateTimeFilter<"WorkSchedule"> | Date | string
    startTime?: StringFilter<"WorkSchedule"> | string
    endTime?: StringFilter<"WorkSchedule"> | string
    room?: StringFilter<"WorkSchedule"> | string
    status?: StringFilter<"WorkSchedule"> | string
    doctorId?: IntNullableFilter<"WorkSchedule"> | number | null
    createdAt?: DateTimeFilter<"WorkSchedule"> | Date | string
    updatedAt?: DateTimeFilter<"WorkSchedule"> | Date | string
    doctor?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type WorkScheduleOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    room?: SortOrder
    status?: SortOrder
    doctorId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    doctor?: UserOrderByWithRelationInput
    _relevance?: WorkScheduleOrderByRelevanceInput
  }

  export type WorkScheduleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: WorkScheduleWhereInput | WorkScheduleWhereInput[]
    OR?: WorkScheduleWhereInput[]
    NOT?: WorkScheduleWhereInput | WorkScheduleWhereInput[]
    date?: DateTimeFilter<"WorkSchedule"> | Date | string
    startTime?: StringFilter<"WorkSchedule"> | string
    endTime?: StringFilter<"WorkSchedule"> | string
    room?: StringFilter<"WorkSchedule"> | string
    status?: StringFilter<"WorkSchedule"> | string
    doctorId?: IntNullableFilter<"WorkSchedule"> | number | null
    createdAt?: DateTimeFilter<"WorkSchedule"> | Date | string
    updatedAt?: DateTimeFilter<"WorkSchedule"> | Date | string
    doctor?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type WorkScheduleOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    room?: SortOrder
    status?: SortOrder
    doctorId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WorkScheduleCountOrderByAggregateInput
    _avg?: WorkScheduleAvgOrderByAggregateInput
    _max?: WorkScheduleMaxOrderByAggregateInput
    _min?: WorkScheduleMinOrderByAggregateInput
    _sum?: WorkScheduleSumOrderByAggregateInput
  }

  export type WorkScheduleScalarWhereWithAggregatesInput = {
    AND?: WorkScheduleScalarWhereWithAggregatesInput | WorkScheduleScalarWhereWithAggregatesInput[]
    OR?: WorkScheduleScalarWhereWithAggregatesInput[]
    NOT?: WorkScheduleScalarWhereWithAggregatesInput | WorkScheduleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"WorkSchedule"> | number
    date?: DateTimeWithAggregatesFilter<"WorkSchedule"> | Date | string
    startTime?: StringWithAggregatesFilter<"WorkSchedule"> | string
    endTime?: StringWithAggregatesFilter<"WorkSchedule"> | string
    room?: StringWithAggregatesFilter<"WorkSchedule"> | string
    status?: StringWithAggregatesFilter<"WorkSchedule"> | string
    doctorId?: IntNullableWithAggregatesFilter<"WorkSchedule"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"WorkSchedule"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"WorkSchedule"> | Date | string
  }

  export type UserCreateInput = {
    name: string
    email: string
    password?: string | null
    avatar?: string | null
    role: string
    chuyenmon?: string | null
    namkinhnghiem?: number | null
    gioithieu?: string | null
    thanhtuu?: string | null
    phone?: string | null
    address?: string | null
    gioitinh?: string | null
    resetToken?: string | null
    resetExpire?: Date | string | null
    dichvu?: DichvuCreateNestedOneWithoutDoctorsInput
    bookings?: BookingCreateNestedManyWithoutDoctorInput
    workSchedules?: WorkScheduleCreateNestedManyWithoutDoctorInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    password?: string | null
    avatar?: string | null
    role: string
    dichvuId?: number | null
    chuyenmon?: string | null
    namkinhnghiem?: number | null
    gioithieu?: string | null
    thanhtuu?: string | null
    phone?: string | null
    address?: string | null
    gioitinh?: string | null
    resetToken?: string | null
    resetExpire?: Date | string | null
    bookings?: BookingUncheckedCreateNestedManyWithoutDoctorInput
    workSchedules?: WorkScheduleUncheckedCreateNestedManyWithoutDoctorInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    chuyenmon?: NullableStringFieldUpdateOperationsInput | string | null
    namkinhnghiem?: NullableIntFieldUpdateOperationsInput | number | null
    gioithieu?: NullableStringFieldUpdateOperationsInput | string | null
    thanhtuu?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    gioitinh?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetExpire?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dichvu?: DichvuUpdateOneWithoutDoctorsNestedInput
    bookings?: BookingUpdateManyWithoutDoctorNestedInput
    workSchedules?: WorkScheduleUpdateManyWithoutDoctorNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    dichvuId?: NullableIntFieldUpdateOperationsInput | number | null
    chuyenmon?: NullableStringFieldUpdateOperationsInput | string | null
    namkinhnghiem?: NullableIntFieldUpdateOperationsInput | number | null
    gioithieu?: NullableStringFieldUpdateOperationsInput | string | null
    thanhtuu?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    gioitinh?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetExpire?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bookings?: BookingUncheckedUpdateManyWithoutDoctorNestedInput
    workSchedules?: WorkScheduleUncheckedUpdateManyWithoutDoctorNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    name: string
    email: string
    password?: string | null
    avatar?: string | null
    role: string
    dichvuId?: number | null
    chuyenmon?: string | null
    namkinhnghiem?: number | null
    gioithieu?: string | null
    thanhtuu?: string | null
    phone?: string | null
    address?: string | null
    gioitinh?: string | null
    resetToken?: string | null
    resetExpire?: Date | string | null
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    chuyenmon?: NullableStringFieldUpdateOperationsInput | string | null
    namkinhnghiem?: NullableIntFieldUpdateOperationsInput | number | null
    gioithieu?: NullableStringFieldUpdateOperationsInput | string | null
    thanhtuu?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    gioitinh?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetExpire?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    dichvuId?: NullableIntFieldUpdateOperationsInput | number | null
    chuyenmon?: NullableStringFieldUpdateOperationsInput | string | null
    namkinhnghiem?: NullableIntFieldUpdateOperationsInput | number | null
    gioithieu?: NullableStringFieldUpdateOperationsInput | string | null
    thanhtuu?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    gioitinh?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetExpire?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BookingCreateInput = {
    hoten: string
    email: string
    sdt: string
    diachi: string
    dichvu: string
    bacsi: string
    gioitinh?: string | null
    ghichu?: string | null
    thoigianhen: Date | string
    dongy: boolean
    created_at?: Date | string
    xacnhan?: boolean
    huy?: boolean
    trangThai?: string | null
    doctor?: UserCreateNestedOneWithoutBookingsInput
    service?: DichvuCreateNestedOneWithoutBookingsInput
  }

  export type BookingUncheckedCreateInput = {
    id?: number
    hoten: string
    email: string
    sdt: string
    diachi: string
    dichvu: string
    bacsi: string
    gioitinh?: string | null
    ghichu?: string | null
    thoigianhen: Date | string
    dongy: boolean
    created_at?: Date | string
    doctorId?: number | null
    serviceId?: number | null
    xacnhan?: boolean
    huy?: boolean
    trangThai?: string | null
  }

  export type BookingUpdateInput = {
    hoten?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    sdt?: StringFieldUpdateOperationsInput | string
    diachi?: StringFieldUpdateOperationsInput | string
    dichvu?: StringFieldUpdateOperationsInput | string
    bacsi?: StringFieldUpdateOperationsInput | string
    gioitinh?: NullableStringFieldUpdateOperationsInput | string | null
    ghichu?: NullableStringFieldUpdateOperationsInput | string | null
    thoigianhen?: DateTimeFieldUpdateOperationsInput | Date | string
    dongy?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    xacnhan?: BoolFieldUpdateOperationsInput | boolean
    huy?: BoolFieldUpdateOperationsInput | boolean
    trangThai?: NullableStringFieldUpdateOperationsInput | string | null
    doctor?: UserUpdateOneWithoutBookingsNestedInput
    service?: DichvuUpdateOneWithoutBookingsNestedInput
  }

  export type BookingUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    hoten?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    sdt?: StringFieldUpdateOperationsInput | string
    diachi?: StringFieldUpdateOperationsInput | string
    dichvu?: StringFieldUpdateOperationsInput | string
    bacsi?: StringFieldUpdateOperationsInput | string
    gioitinh?: NullableStringFieldUpdateOperationsInput | string | null
    ghichu?: NullableStringFieldUpdateOperationsInput | string | null
    thoigianhen?: DateTimeFieldUpdateOperationsInput | Date | string
    dongy?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    doctorId?: NullableIntFieldUpdateOperationsInput | number | null
    serviceId?: NullableIntFieldUpdateOperationsInput | number | null
    xacnhan?: BoolFieldUpdateOperationsInput | boolean
    huy?: BoolFieldUpdateOperationsInput | boolean
    trangThai?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BookingCreateManyInput = {
    id?: number
    hoten: string
    email: string
    sdt: string
    diachi: string
    dichvu: string
    bacsi: string
    gioitinh?: string | null
    ghichu?: string | null
    thoigianhen: Date | string
    dongy: boolean
    created_at?: Date | string
    doctorId?: number | null
    serviceId?: number | null
    xacnhan?: boolean
    huy?: boolean
    trangThai?: string | null
  }

  export type BookingUpdateManyMutationInput = {
    hoten?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    sdt?: StringFieldUpdateOperationsInput | string
    diachi?: StringFieldUpdateOperationsInput | string
    dichvu?: StringFieldUpdateOperationsInput | string
    bacsi?: StringFieldUpdateOperationsInput | string
    gioitinh?: NullableStringFieldUpdateOperationsInput | string | null
    ghichu?: NullableStringFieldUpdateOperationsInput | string | null
    thoigianhen?: DateTimeFieldUpdateOperationsInput | Date | string
    dongy?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    xacnhan?: BoolFieldUpdateOperationsInput | boolean
    huy?: BoolFieldUpdateOperationsInput | boolean
    trangThai?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BookingUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    hoten?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    sdt?: StringFieldUpdateOperationsInput | string
    diachi?: StringFieldUpdateOperationsInput | string
    dichvu?: StringFieldUpdateOperationsInput | string
    bacsi?: StringFieldUpdateOperationsInput | string
    gioitinh?: NullableStringFieldUpdateOperationsInput | string | null
    ghichu?: NullableStringFieldUpdateOperationsInput | string | null
    thoigianhen?: DateTimeFieldUpdateOperationsInput | Date | string
    dongy?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    doctorId?: NullableIntFieldUpdateOperationsInput | number | null
    serviceId?: NullableIntFieldUpdateOperationsInput | number | null
    xacnhan?: BoolFieldUpdateOperationsInput | boolean
    huy?: BoolFieldUpdateOperationsInput | boolean
    trangThai?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DichvuCreateInput = {
    title: string
    desc?: string | null
    price: number
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    doctors?: UserCreateNestedManyWithoutDichvuInput
    bookings?: BookingCreateNestedManyWithoutServiceInput
  }

  export type DichvuUncheckedCreateInput = {
    id?: number
    title: string
    desc?: string | null
    price: number
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    doctors?: UserUncheckedCreateNestedManyWithoutDichvuInput
    bookings?: BookingUncheckedCreateNestedManyWithoutServiceInput
  }

  export type DichvuUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctors?: UserUpdateManyWithoutDichvuNestedInput
    bookings?: BookingUpdateManyWithoutServiceNestedInput
  }

  export type DichvuUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctors?: UserUncheckedUpdateManyWithoutDichvuNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type DichvuCreateManyInput = {
    id?: number
    title: string
    desc?: string | null
    price: number
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DichvuUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DichvuUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkScheduleCreateInput = {
    date: Date | string
    startTime: string
    endTime: string
    room: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    doctor?: UserCreateNestedOneWithoutWorkSchedulesInput
  }

  export type WorkScheduleUncheckedCreateInput = {
    id?: number
    date: Date | string
    startTime: string
    endTime: string
    room: string
    status?: string
    doctorId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkScheduleUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    room?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctor?: UserUpdateOneWithoutWorkSchedulesNestedInput
  }

  export type WorkScheduleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    room?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    doctorId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkScheduleCreateManyInput = {
    id?: number
    date: Date | string
    startTime: string
    endTime: string
    room: string
    status?: string
    doctorId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkScheduleUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    room?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkScheduleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    room?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    doctorId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DichvuNullableScalarRelationFilter = {
    is?: DichvuWhereInput | null
    isNot?: DichvuWhereInput | null
  }

  export type BookingListRelationFilter = {
    every?: BookingWhereInput
    some?: BookingWhereInput
    none?: BookingWhereInput
  }

  export type WorkScheduleListRelationFilter = {
    every?: WorkScheduleWhereInput
    some?: WorkScheduleWhereInput
    none?: WorkScheduleWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type BookingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WorkScheduleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatar?: SortOrder
    role?: SortOrder
    dichvuId?: SortOrder
    chuyenmon?: SortOrder
    namkinhnghiem?: SortOrder
    gioithieu?: SortOrder
    thanhtuu?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    gioitinh?: SortOrder
    resetToken?: SortOrder
    resetExpire?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    dichvuId?: SortOrder
    namkinhnghiem?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatar?: SortOrder
    role?: SortOrder
    dichvuId?: SortOrder
    chuyenmon?: SortOrder
    namkinhnghiem?: SortOrder
    gioithieu?: SortOrder
    thanhtuu?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    gioitinh?: SortOrder
    resetToken?: SortOrder
    resetExpire?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatar?: SortOrder
    role?: SortOrder
    dichvuId?: SortOrder
    chuyenmon?: SortOrder
    namkinhnghiem?: SortOrder
    gioithieu?: SortOrder
    thanhtuu?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    gioitinh?: SortOrder
    resetToken?: SortOrder
    resetExpire?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    dichvuId?: SortOrder
    namkinhnghiem?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type BookingOrderByRelevanceInput = {
    fields: BookingOrderByRelevanceFieldEnum | BookingOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type BookingCountOrderByAggregateInput = {
    id?: SortOrder
    hoten?: SortOrder
    email?: SortOrder
    sdt?: SortOrder
    diachi?: SortOrder
    dichvu?: SortOrder
    bacsi?: SortOrder
    gioitinh?: SortOrder
    ghichu?: SortOrder
    thoigianhen?: SortOrder
    dongy?: SortOrder
    created_at?: SortOrder
    doctorId?: SortOrder
    serviceId?: SortOrder
    xacnhan?: SortOrder
    huy?: SortOrder
    trangThai?: SortOrder
  }

  export type BookingAvgOrderByAggregateInput = {
    id?: SortOrder
    doctorId?: SortOrder
    serviceId?: SortOrder
  }

  export type BookingMaxOrderByAggregateInput = {
    id?: SortOrder
    hoten?: SortOrder
    email?: SortOrder
    sdt?: SortOrder
    diachi?: SortOrder
    dichvu?: SortOrder
    bacsi?: SortOrder
    gioitinh?: SortOrder
    ghichu?: SortOrder
    thoigianhen?: SortOrder
    dongy?: SortOrder
    created_at?: SortOrder
    doctorId?: SortOrder
    serviceId?: SortOrder
    xacnhan?: SortOrder
    huy?: SortOrder
    trangThai?: SortOrder
  }

  export type BookingMinOrderByAggregateInput = {
    id?: SortOrder
    hoten?: SortOrder
    email?: SortOrder
    sdt?: SortOrder
    diachi?: SortOrder
    dichvu?: SortOrder
    bacsi?: SortOrder
    gioitinh?: SortOrder
    ghichu?: SortOrder
    thoigianhen?: SortOrder
    dongy?: SortOrder
    created_at?: SortOrder
    doctorId?: SortOrder
    serviceId?: SortOrder
    xacnhan?: SortOrder
    huy?: SortOrder
    trangThai?: SortOrder
  }

  export type BookingSumOrderByAggregateInput = {
    id?: SortOrder
    doctorId?: SortOrder
    serviceId?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DichvuOrderByRelevanceInput = {
    fields: DichvuOrderByRelevanceFieldEnum | DichvuOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type DichvuCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    desc?: SortOrder
    price?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DichvuAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
  }

  export type DichvuMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    desc?: SortOrder
    price?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DichvuMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    desc?: SortOrder
    price?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DichvuSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
  }

  export type WorkScheduleOrderByRelevanceInput = {
    fields: WorkScheduleOrderByRelevanceFieldEnum | WorkScheduleOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type WorkScheduleCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    room?: SortOrder
    status?: SortOrder
    doctorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkScheduleAvgOrderByAggregateInput = {
    id?: SortOrder
    doctorId?: SortOrder
  }

  export type WorkScheduleMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    room?: SortOrder
    status?: SortOrder
    doctorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkScheduleMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    room?: SortOrder
    status?: SortOrder
    doctorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkScheduleSumOrderByAggregateInput = {
    id?: SortOrder
    doctorId?: SortOrder
  }

  export type DichvuCreateNestedOneWithoutDoctorsInput = {
    create?: XOR<DichvuCreateWithoutDoctorsInput, DichvuUncheckedCreateWithoutDoctorsInput>
    connectOrCreate?: DichvuCreateOrConnectWithoutDoctorsInput
    connect?: DichvuWhereUniqueInput
  }

  export type BookingCreateNestedManyWithoutDoctorInput = {
    create?: XOR<BookingCreateWithoutDoctorInput, BookingUncheckedCreateWithoutDoctorInput> | BookingCreateWithoutDoctorInput[] | BookingUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutDoctorInput | BookingCreateOrConnectWithoutDoctorInput[]
    createMany?: BookingCreateManyDoctorInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type WorkScheduleCreateNestedManyWithoutDoctorInput = {
    create?: XOR<WorkScheduleCreateWithoutDoctorInput, WorkScheduleUncheckedCreateWithoutDoctorInput> | WorkScheduleCreateWithoutDoctorInput[] | WorkScheduleUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: WorkScheduleCreateOrConnectWithoutDoctorInput | WorkScheduleCreateOrConnectWithoutDoctorInput[]
    createMany?: WorkScheduleCreateManyDoctorInputEnvelope
    connect?: WorkScheduleWhereUniqueInput | WorkScheduleWhereUniqueInput[]
  }

  export type BookingUncheckedCreateNestedManyWithoutDoctorInput = {
    create?: XOR<BookingCreateWithoutDoctorInput, BookingUncheckedCreateWithoutDoctorInput> | BookingCreateWithoutDoctorInput[] | BookingUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutDoctorInput | BookingCreateOrConnectWithoutDoctorInput[]
    createMany?: BookingCreateManyDoctorInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type WorkScheduleUncheckedCreateNestedManyWithoutDoctorInput = {
    create?: XOR<WorkScheduleCreateWithoutDoctorInput, WorkScheduleUncheckedCreateWithoutDoctorInput> | WorkScheduleCreateWithoutDoctorInput[] | WorkScheduleUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: WorkScheduleCreateOrConnectWithoutDoctorInput | WorkScheduleCreateOrConnectWithoutDoctorInput[]
    createMany?: WorkScheduleCreateManyDoctorInputEnvelope
    connect?: WorkScheduleWhereUniqueInput | WorkScheduleWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DichvuUpdateOneWithoutDoctorsNestedInput = {
    create?: XOR<DichvuCreateWithoutDoctorsInput, DichvuUncheckedCreateWithoutDoctorsInput>
    connectOrCreate?: DichvuCreateOrConnectWithoutDoctorsInput
    upsert?: DichvuUpsertWithoutDoctorsInput
    disconnect?: DichvuWhereInput | boolean
    delete?: DichvuWhereInput | boolean
    connect?: DichvuWhereUniqueInput
    update?: XOR<XOR<DichvuUpdateToOneWithWhereWithoutDoctorsInput, DichvuUpdateWithoutDoctorsInput>, DichvuUncheckedUpdateWithoutDoctorsInput>
  }

  export type BookingUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<BookingCreateWithoutDoctorInput, BookingUncheckedCreateWithoutDoctorInput> | BookingCreateWithoutDoctorInput[] | BookingUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutDoctorInput | BookingCreateOrConnectWithoutDoctorInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutDoctorInput | BookingUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: BookingCreateManyDoctorInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutDoctorInput | BookingUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutDoctorInput | BookingUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type WorkScheduleUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<WorkScheduleCreateWithoutDoctorInput, WorkScheduleUncheckedCreateWithoutDoctorInput> | WorkScheduleCreateWithoutDoctorInput[] | WorkScheduleUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: WorkScheduleCreateOrConnectWithoutDoctorInput | WorkScheduleCreateOrConnectWithoutDoctorInput[]
    upsert?: WorkScheduleUpsertWithWhereUniqueWithoutDoctorInput | WorkScheduleUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: WorkScheduleCreateManyDoctorInputEnvelope
    set?: WorkScheduleWhereUniqueInput | WorkScheduleWhereUniqueInput[]
    disconnect?: WorkScheduleWhereUniqueInput | WorkScheduleWhereUniqueInput[]
    delete?: WorkScheduleWhereUniqueInput | WorkScheduleWhereUniqueInput[]
    connect?: WorkScheduleWhereUniqueInput | WorkScheduleWhereUniqueInput[]
    update?: WorkScheduleUpdateWithWhereUniqueWithoutDoctorInput | WorkScheduleUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: WorkScheduleUpdateManyWithWhereWithoutDoctorInput | WorkScheduleUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: WorkScheduleScalarWhereInput | WorkScheduleScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BookingUncheckedUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<BookingCreateWithoutDoctorInput, BookingUncheckedCreateWithoutDoctorInput> | BookingCreateWithoutDoctorInput[] | BookingUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutDoctorInput | BookingCreateOrConnectWithoutDoctorInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutDoctorInput | BookingUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: BookingCreateManyDoctorInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutDoctorInput | BookingUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutDoctorInput | BookingUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type WorkScheduleUncheckedUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<WorkScheduleCreateWithoutDoctorInput, WorkScheduleUncheckedCreateWithoutDoctorInput> | WorkScheduleCreateWithoutDoctorInput[] | WorkScheduleUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: WorkScheduleCreateOrConnectWithoutDoctorInput | WorkScheduleCreateOrConnectWithoutDoctorInput[]
    upsert?: WorkScheduleUpsertWithWhereUniqueWithoutDoctorInput | WorkScheduleUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: WorkScheduleCreateManyDoctorInputEnvelope
    set?: WorkScheduleWhereUniqueInput | WorkScheduleWhereUniqueInput[]
    disconnect?: WorkScheduleWhereUniqueInput | WorkScheduleWhereUniqueInput[]
    delete?: WorkScheduleWhereUniqueInput | WorkScheduleWhereUniqueInput[]
    connect?: WorkScheduleWhereUniqueInput | WorkScheduleWhereUniqueInput[]
    update?: WorkScheduleUpdateWithWhereUniqueWithoutDoctorInput | WorkScheduleUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: WorkScheduleUpdateManyWithWhereWithoutDoctorInput | WorkScheduleUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: WorkScheduleScalarWhereInput | WorkScheduleScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutBookingsInput = {
    create?: XOR<UserCreateWithoutBookingsInput, UserUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBookingsInput
    connect?: UserWhereUniqueInput
  }

  export type DichvuCreateNestedOneWithoutBookingsInput = {
    create?: XOR<DichvuCreateWithoutBookingsInput, DichvuUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: DichvuCreateOrConnectWithoutBookingsInput
    connect?: DichvuWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneWithoutBookingsNestedInput = {
    create?: XOR<UserCreateWithoutBookingsInput, UserUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBookingsInput
    upsert?: UserUpsertWithoutBookingsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBookingsInput, UserUpdateWithoutBookingsInput>, UserUncheckedUpdateWithoutBookingsInput>
  }

  export type DichvuUpdateOneWithoutBookingsNestedInput = {
    create?: XOR<DichvuCreateWithoutBookingsInput, DichvuUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: DichvuCreateOrConnectWithoutBookingsInput
    upsert?: DichvuUpsertWithoutBookingsInput
    disconnect?: DichvuWhereInput | boolean
    delete?: DichvuWhereInput | boolean
    connect?: DichvuWhereUniqueInput
    update?: XOR<XOR<DichvuUpdateToOneWithWhereWithoutBookingsInput, DichvuUpdateWithoutBookingsInput>, DichvuUncheckedUpdateWithoutBookingsInput>
  }

  export type UserCreateNestedManyWithoutDichvuInput = {
    create?: XOR<UserCreateWithoutDichvuInput, UserUncheckedCreateWithoutDichvuInput> | UserCreateWithoutDichvuInput[] | UserUncheckedCreateWithoutDichvuInput[]
    connectOrCreate?: UserCreateOrConnectWithoutDichvuInput | UserCreateOrConnectWithoutDichvuInput[]
    createMany?: UserCreateManyDichvuInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type BookingCreateNestedManyWithoutServiceInput = {
    create?: XOR<BookingCreateWithoutServiceInput, BookingUncheckedCreateWithoutServiceInput> | BookingCreateWithoutServiceInput[] | BookingUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutServiceInput | BookingCreateOrConnectWithoutServiceInput[]
    createMany?: BookingCreateManyServiceInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutDichvuInput = {
    create?: XOR<UserCreateWithoutDichvuInput, UserUncheckedCreateWithoutDichvuInput> | UserCreateWithoutDichvuInput[] | UserUncheckedCreateWithoutDichvuInput[]
    connectOrCreate?: UserCreateOrConnectWithoutDichvuInput | UserCreateOrConnectWithoutDichvuInput[]
    createMany?: UserCreateManyDichvuInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type BookingUncheckedCreateNestedManyWithoutServiceInput = {
    create?: XOR<BookingCreateWithoutServiceInput, BookingUncheckedCreateWithoutServiceInput> | BookingCreateWithoutServiceInput[] | BookingUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutServiceInput | BookingCreateOrConnectWithoutServiceInput[]
    createMany?: BookingCreateManyServiceInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type UserUpdateManyWithoutDichvuNestedInput = {
    create?: XOR<UserCreateWithoutDichvuInput, UserUncheckedCreateWithoutDichvuInput> | UserCreateWithoutDichvuInput[] | UserUncheckedCreateWithoutDichvuInput[]
    connectOrCreate?: UserCreateOrConnectWithoutDichvuInput | UserCreateOrConnectWithoutDichvuInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutDichvuInput | UserUpsertWithWhereUniqueWithoutDichvuInput[]
    createMany?: UserCreateManyDichvuInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutDichvuInput | UserUpdateWithWhereUniqueWithoutDichvuInput[]
    updateMany?: UserUpdateManyWithWhereWithoutDichvuInput | UserUpdateManyWithWhereWithoutDichvuInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type BookingUpdateManyWithoutServiceNestedInput = {
    create?: XOR<BookingCreateWithoutServiceInput, BookingUncheckedCreateWithoutServiceInput> | BookingCreateWithoutServiceInput[] | BookingUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutServiceInput | BookingCreateOrConnectWithoutServiceInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutServiceInput | BookingUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: BookingCreateManyServiceInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutServiceInput | BookingUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutServiceInput | BookingUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutDichvuNestedInput = {
    create?: XOR<UserCreateWithoutDichvuInput, UserUncheckedCreateWithoutDichvuInput> | UserCreateWithoutDichvuInput[] | UserUncheckedCreateWithoutDichvuInput[]
    connectOrCreate?: UserCreateOrConnectWithoutDichvuInput | UserCreateOrConnectWithoutDichvuInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutDichvuInput | UserUpsertWithWhereUniqueWithoutDichvuInput[]
    createMany?: UserCreateManyDichvuInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutDichvuInput | UserUpdateWithWhereUniqueWithoutDichvuInput[]
    updateMany?: UserUpdateManyWithWhereWithoutDichvuInput | UserUpdateManyWithWhereWithoutDichvuInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type BookingUncheckedUpdateManyWithoutServiceNestedInput = {
    create?: XOR<BookingCreateWithoutServiceInput, BookingUncheckedCreateWithoutServiceInput> | BookingCreateWithoutServiceInput[] | BookingUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutServiceInput | BookingCreateOrConnectWithoutServiceInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutServiceInput | BookingUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: BookingCreateManyServiceInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutServiceInput | BookingUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutServiceInput | BookingUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutWorkSchedulesInput = {
    create?: XOR<UserCreateWithoutWorkSchedulesInput, UserUncheckedCreateWithoutWorkSchedulesInput>
    connectOrCreate?: UserCreateOrConnectWithoutWorkSchedulesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneWithoutWorkSchedulesNestedInput = {
    create?: XOR<UserCreateWithoutWorkSchedulesInput, UserUncheckedCreateWithoutWorkSchedulesInput>
    connectOrCreate?: UserCreateOrConnectWithoutWorkSchedulesInput
    upsert?: UserUpsertWithoutWorkSchedulesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWorkSchedulesInput, UserUpdateWithoutWorkSchedulesInput>, UserUncheckedUpdateWithoutWorkSchedulesInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DichvuCreateWithoutDoctorsInput = {
    title: string
    desc?: string | null
    price: number
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingCreateNestedManyWithoutServiceInput
  }

  export type DichvuUncheckedCreateWithoutDoctorsInput = {
    id?: number
    title: string
    desc?: string | null
    price: number
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingUncheckedCreateNestedManyWithoutServiceInput
  }

  export type DichvuCreateOrConnectWithoutDoctorsInput = {
    where: DichvuWhereUniqueInput
    create: XOR<DichvuCreateWithoutDoctorsInput, DichvuUncheckedCreateWithoutDoctorsInput>
  }

  export type BookingCreateWithoutDoctorInput = {
    hoten: string
    email: string
    sdt: string
    diachi: string
    dichvu: string
    bacsi: string
    gioitinh?: string | null
    ghichu?: string | null
    thoigianhen: Date | string
    dongy: boolean
    created_at?: Date | string
    xacnhan?: boolean
    huy?: boolean
    trangThai?: string | null
    service?: DichvuCreateNestedOneWithoutBookingsInput
  }

  export type BookingUncheckedCreateWithoutDoctorInput = {
    id?: number
    hoten: string
    email: string
    sdt: string
    diachi: string
    dichvu: string
    bacsi: string
    gioitinh?: string | null
    ghichu?: string | null
    thoigianhen: Date | string
    dongy: boolean
    created_at?: Date | string
    serviceId?: number | null
    xacnhan?: boolean
    huy?: boolean
    trangThai?: string | null
  }

  export type BookingCreateOrConnectWithoutDoctorInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutDoctorInput, BookingUncheckedCreateWithoutDoctorInput>
  }

  export type BookingCreateManyDoctorInputEnvelope = {
    data: BookingCreateManyDoctorInput | BookingCreateManyDoctorInput[]
    skipDuplicates?: boolean
  }

  export type WorkScheduleCreateWithoutDoctorInput = {
    date: Date | string
    startTime: string
    endTime: string
    room: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkScheduleUncheckedCreateWithoutDoctorInput = {
    id?: number
    date: Date | string
    startTime: string
    endTime: string
    room: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkScheduleCreateOrConnectWithoutDoctorInput = {
    where: WorkScheduleWhereUniqueInput
    create: XOR<WorkScheduleCreateWithoutDoctorInput, WorkScheduleUncheckedCreateWithoutDoctorInput>
  }

  export type WorkScheduleCreateManyDoctorInputEnvelope = {
    data: WorkScheduleCreateManyDoctorInput | WorkScheduleCreateManyDoctorInput[]
    skipDuplicates?: boolean
  }

  export type DichvuUpsertWithoutDoctorsInput = {
    update: XOR<DichvuUpdateWithoutDoctorsInput, DichvuUncheckedUpdateWithoutDoctorsInput>
    create: XOR<DichvuCreateWithoutDoctorsInput, DichvuUncheckedCreateWithoutDoctorsInput>
    where?: DichvuWhereInput
  }

  export type DichvuUpdateToOneWithWhereWithoutDoctorsInput = {
    where?: DichvuWhereInput
    data: XOR<DichvuUpdateWithoutDoctorsInput, DichvuUncheckedUpdateWithoutDoctorsInput>
  }

  export type DichvuUpdateWithoutDoctorsInput = {
    title?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUpdateManyWithoutServiceNestedInput
  }

  export type DichvuUncheckedUpdateWithoutDoctorsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type BookingUpsertWithWhereUniqueWithoutDoctorInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutDoctorInput, BookingUncheckedUpdateWithoutDoctorInput>
    create: XOR<BookingCreateWithoutDoctorInput, BookingUncheckedCreateWithoutDoctorInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutDoctorInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutDoctorInput, BookingUncheckedUpdateWithoutDoctorInput>
  }

  export type BookingUpdateManyWithWhereWithoutDoctorInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutDoctorInput>
  }

  export type BookingScalarWhereInput = {
    AND?: BookingScalarWhereInput | BookingScalarWhereInput[]
    OR?: BookingScalarWhereInput[]
    NOT?: BookingScalarWhereInput | BookingScalarWhereInput[]
    id?: IntFilter<"Booking"> | number
    hoten?: StringFilter<"Booking"> | string
    email?: StringFilter<"Booking"> | string
    sdt?: StringFilter<"Booking"> | string
    diachi?: StringFilter<"Booking"> | string
    dichvu?: StringFilter<"Booking"> | string
    bacsi?: StringFilter<"Booking"> | string
    gioitinh?: StringNullableFilter<"Booking"> | string | null
    ghichu?: StringNullableFilter<"Booking"> | string | null
    thoigianhen?: DateTimeFilter<"Booking"> | Date | string
    dongy?: BoolFilter<"Booking"> | boolean
    created_at?: DateTimeFilter<"Booking"> | Date | string
    doctorId?: IntNullableFilter<"Booking"> | number | null
    serviceId?: IntNullableFilter<"Booking"> | number | null
    xacnhan?: BoolFilter<"Booking"> | boolean
    huy?: BoolFilter<"Booking"> | boolean
    trangThai?: StringNullableFilter<"Booking"> | string | null
  }

  export type WorkScheduleUpsertWithWhereUniqueWithoutDoctorInput = {
    where: WorkScheduleWhereUniqueInput
    update: XOR<WorkScheduleUpdateWithoutDoctorInput, WorkScheduleUncheckedUpdateWithoutDoctorInput>
    create: XOR<WorkScheduleCreateWithoutDoctorInput, WorkScheduleUncheckedCreateWithoutDoctorInput>
  }

  export type WorkScheduleUpdateWithWhereUniqueWithoutDoctorInput = {
    where: WorkScheduleWhereUniqueInput
    data: XOR<WorkScheduleUpdateWithoutDoctorInput, WorkScheduleUncheckedUpdateWithoutDoctorInput>
  }

  export type WorkScheduleUpdateManyWithWhereWithoutDoctorInput = {
    where: WorkScheduleScalarWhereInput
    data: XOR<WorkScheduleUpdateManyMutationInput, WorkScheduleUncheckedUpdateManyWithoutDoctorInput>
  }

  export type WorkScheduleScalarWhereInput = {
    AND?: WorkScheduleScalarWhereInput | WorkScheduleScalarWhereInput[]
    OR?: WorkScheduleScalarWhereInput[]
    NOT?: WorkScheduleScalarWhereInput | WorkScheduleScalarWhereInput[]
    id?: IntFilter<"WorkSchedule"> | number
    date?: DateTimeFilter<"WorkSchedule"> | Date | string
    startTime?: StringFilter<"WorkSchedule"> | string
    endTime?: StringFilter<"WorkSchedule"> | string
    room?: StringFilter<"WorkSchedule"> | string
    status?: StringFilter<"WorkSchedule"> | string
    doctorId?: IntNullableFilter<"WorkSchedule"> | number | null
    createdAt?: DateTimeFilter<"WorkSchedule"> | Date | string
    updatedAt?: DateTimeFilter<"WorkSchedule"> | Date | string
  }

  export type UserCreateWithoutBookingsInput = {
    name: string
    email: string
    password?: string | null
    avatar?: string | null
    role: string
    chuyenmon?: string | null
    namkinhnghiem?: number | null
    gioithieu?: string | null
    thanhtuu?: string | null
    phone?: string | null
    address?: string | null
    gioitinh?: string | null
    resetToken?: string | null
    resetExpire?: Date | string | null
    dichvu?: DichvuCreateNestedOneWithoutDoctorsInput
    workSchedules?: WorkScheduleCreateNestedManyWithoutDoctorInput
  }

  export type UserUncheckedCreateWithoutBookingsInput = {
    id?: number
    name: string
    email: string
    password?: string | null
    avatar?: string | null
    role: string
    dichvuId?: number | null
    chuyenmon?: string | null
    namkinhnghiem?: number | null
    gioithieu?: string | null
    thanhtuu?: string | null
    phone?: string | null
    address?: string | null
    gioitinh?: string | null
    resetToken?: string | null
    resetExpire?: Date | string | null
    workSchedules?: WorkScheduleUncheckedCreateNestedManyWithoutDoctorInput
  }

  export type UserCreateOrConnectWithoutBookingsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBookingsInput, UserUncheckedCreateWithoutBookingsInput>
  }

  export type DichvuCreateWithoutBookingsInput = {
    title: string
    desc?: string | null
    price: number
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    doctors?: UserCreateNestedManyWithoutDichvuInput
  }

  export type DichvuUncheckedCreateWithoutBookingsInput = {
    id?: number
    title: string
    desc?: string | null
    price: number
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    doctors?: UserUncheckedCreateNestedManyWithoutDichvuInput
  }

  export type DichvuCreateOrConnectWithoutBookingsInput = {
    where: DichvuWhereUniqueInput
    create: XOR<DichvuCreateWithoutBookingsInput, DichvuUncheckedCreateWithoutBookingsInput>
  }

  export type UserUpsertWithoutBookingsInput = {
    update: XOR<UserUpdateWithoutBookingsInput, UserUncheckedUpdateWithoutBookingsInput>
    create: XOR<UserCreateWithoutBookingsInput, UserUncheckedCreateWithoutBookingsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBookingsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBookingsInput, UserUncheckedUpdateWithoutBookingsInput>
  }

  export type UserUpdateWithoutBookingsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    chuyenmon?: NullableStringFieldUpdateOperationsInput | string | null
    namkinhnghiem?: NullableIntFieldUpdateOperationsInput | number | null
    gioithieu?: NullableStringFieldUpdateOperationsInput | string | null
    thanhtuu?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    gioitinh?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetExpire?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dichvu?: DichvuUpdateOneWithoutDoctorsNestedInput
    workSchedules?: WorkScheduleUpdateManyWithoutDoctorNestedInput
  }

  export type UserUncheckedUpdateWithoutBookingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    dichvuId?: NullableIntFieldUpdateOperationsInput | number | null
    chuyenmon?: NullableStringFieldUpdateOperationsInput | string | null
    namkinhnghiem?: NullableIntFieldUpdateOperationsInput | number | null
    gioithieu?: NullableStringFieldUpdateOperationsInput | string | null
    thanhtuu?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    gioitinh?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetExpire?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    workSchedules?: WorkScheduleUncheckedUpdateManyWithoutDoctorNestedInput
  }

  export type DichvuUpsertWithoutBookingsInput = {
    update: XOR<DichvuUpdateWithoutBookingsInput, DichvuUncheckedUpdateWithoutBookingsInput>
    create: XOR<DichvuCreateWithoutBookingsInput, DichvuUncheckedCreateWithoutBookingsInput>
    where?: DichvuWhereInput
  }

  export type DichvuUpdateToOneWithWhereWithoutBookingsInput = {
    where?: DichvuWhereInput
    data: XOR<DichvuUpdateWithoutBookingsInput, DichvuUncheckedUpdateWithoutBookingsInput>
  }

  export type DichvuUpdateWithoutBookingsInput = {
    title?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctors?: UserUpdateManyWithoutDichvuNestedInput
  }

  export type DichvuUncheckedUpdateWithoutBookingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctors?: UserUncheckedUpdateManyWithoutDichvuNestedInput
  }

  export type UserCreateWithoutDichvuInput = {
    name: string
    email: string
    password?: string | null
    avatar?: string | null
    role: string
    chuyenmon?: string | null
    namkinhnghiem?: number | null
    gioithieu?: string | null
    thanhtuu?: string | null
    phone?: string | null
    address?: string | null
    gioitinh?: string | null
    resetToken?: string | null
    resetExpire?: Date | string | null
    bookings?: BookingCreateNestedManyWithoutDoctorInput
    workSchedules?: WorkScheduleCreateNestedManyWithoutDoctorInput
  }

  export type UserUncheckedCreateWithoutDichvuInput = {
    id?: number
    name: string
    email: string
    password?: string | null
    avatar?: string | null
    role: string
    chuyenmon?: string | null
    namkinhnghiem?: number | null
    gioithieu?: string | null
    thanhtuu?: string | null
    phone?: string | null
    address?: string | null
    gioitinh?: string | null
    resetToken?: string | null
    resetExpire?: Date | string | null
    bookings?: BookingUncheckedCreateNestedManyWithoutDoctorInput
    workSchedules?: WorkScheduleUncheckedCreateNestedManyWithoutDoctorInput
  }

  export type UserCreateOrConnectWithoutDichvuInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDichvuInput, UserUncheckedCreateWithoutDichvuInput>
  }

  export type UserCreateManyDichvuInputEnvelope = {
    data: UserCreateManyDichvuInput | UserCreateManyDichvuInput[]
    skipDuplicates?: boolean
  }

  export type BookingCreateWithoutServiceInput = {
    hoten: string
    email: string
    sdt: string
    diachi: string
    dichvu: string
    bacsi: string
    gioitinh?: string | null
    ghichu?: string | null
    thoigianhen: Date | string
    dongy: boolean
    created_at?: Date | string
    xacnhan?: boolean
    huy?: boolean
    trangThai?: string | null
    doctor?: UserCreateNestedOneWithoutBookingsInput
  }

  export type BookingUncheckedCreateWithoutServiceInput = {
    id?: number
    hoten: string
    email: string
    sdt: string
    diachi: string
    dichvu: string
    bacsi: string
    gioitinh?: string | null
    ghichu?: string | null
    thoigianhen: Date | string
    dongy: boolean
    created_at?: Date | string
    doctorId?: number | null
    xacnhan?: boolean
    huy?: boolean
    trangThai?: string | null
  }

  export type BookingCreateOrConnectWithoutServiceInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutServiceInput, BookingUncheckedCreateWithoutServiceInput>
  }

  export type BookingCreateManyServiceInputEnvelope = {
    data: BookingCreateManyServiceInput | BookingCreateManyServiceInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutDichvuInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutDichvuInput, UserUncheckedUpdateWithoutDichvuInput>
    create: XOR<UserCreateWithoutDichvuInput, UserUncheckedCreateWithoutDichvuInput>
  }

  export type UserUpdateWithWhereUniqueWithoutDichvuInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutDichvuInput, UserUncheckedUpdateWithoutDichvuInput>
  }

  export type UserUpdateManyWithWhereWithoutDichvuInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutDichvuInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringNullableFilter<"User"> | string | null
    avatar?: StringNullableFilter<"User"> | string | null
    role?: StringFilter<"User"> | string
    dichvuId?: IntNullableFilter<"User"> | number | null
    chuyenmon?: StringNullableFilter<"User"> | string | null
    namkinhnghiem?: IntNullableFilter<"User"> | number | null
    gioithieu?: StringNullableFilter<"User"> | string | null
    thanhtuu?: StringNullableFilter<"User"> | string | null
    phone?: StringNullableFilter<"User"> | string | null
    address?: StringNullableFilter<"User"> | string | null
    gioitinh?: StringNullableFilter<"User"> | string | null
    resetToken?: StringNullableFilter<"User"> | string | null
    resetExpire?: DateTimeNullableFilter<"User"> | Date | string | null
  }

  export type BookingUpsertWithWhereUniqueWithoutServiceInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutServiceInput, BookingUncheckedUpdateWithoutServiceInput>
    create: XOR<BookingCreateWithoutServiceInput, BookingUncheckedCreateWithoutServiceInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutServiceInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutServiceInput, BookingUncheckedUpdateWithoutServiceInput>
  }

  export type BookingUpdateManyWithWhereWithoutServiceInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutServiceInput>
  }

  export type UserCreateWithoutWorkSchedulesInput = {
    name: string
    email: string
    password?: string | null
    avatar?: string | null
    role: string
    chuyenmon?: string | null
    namkinhnghiem?: number | null
    gioithieu?: string | null
    thanhtuu?: string | null
    phone?: string | null
    address?: string | null
    gioitinh?: string | null
    resetToken?: string | null
    resetExpire?: Date | string | null
    dichvu?: DichvuCreateNestedOneWithoutDoctorsInput
    bookings?: BookingCreateNestedManyWithoutDoctorInput
  }

  export type UserUncheckedCreateWithoutWorkSchedulesInput = {
    id?: number
    name: string
    email: string
    password?: string | null
    avatar?: string | null
    role: string
    dichvuId?: number | null
    chuyenmon?: string | null
    namkinhnghiem?: number | null
    gioithieu?: string | null
    thanhtuu?: string | null
    phone?: string | null
    address?: string | null
    gioitinh?: string | null
    resetToken?: string | null
    resetExpire?: Date | string | null
    bookings?: BookingUncheckedCreateNestedManyWithoutDoctorInput
  }

  export type UserCreateOrConnectWithoutWorkSchedulesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWorkSchedulesInput, UserUncheckedCreateWithoutWorkSchedulesInput>
  }

  export type UserUpsertWithoutWorkSchedulesInput = {
    update: XOR<UserUpdateWithoutWorkSchedulesInput, UserUncheckedUpdateWithoutWorkSchedulesInput>
    create: XOR<UserCreateWithoutWorkSchedulesInput, UserUncheckedCreateWithoutWorkSchedulesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWorkSchedulesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWorkSchedulesInput, UserUncheckedUpdateWithoutWorkSchedulesInput>
  }

  export type UserUpdateWithoutWorkSchedulesInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    chuyenmon?: NullableStringFieldUpdateOperationsInput | string | null
    namkinhnghiem?: NullableIntFieldUpdateOperationsInput | number | null
    gioithieu?: NullableStringFieldUpdateOperationsInput | string | null
    thanhtuu?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    gioitinh?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetExpire?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dichvu?: DichvuUpdateOneWithoutDoctorsNestedInput
    bookings?: BookingUpdateManyWithoutDoctorNestedInput
  }

  export type UserUncheckedUpdateWithoutWorkSchedulesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    dichvuId?: NullableIntFieldUpdateOperationsInput | number | null
    chuyenmon?: NullableStringFieldUpdateOperationsInput | string | null
    namkinhnghiem?: NullableIntFieldUpdateOperationsInput | number | null
    gioithieu?: NullableStringFieldUpdateOperationsInput | string | null
    thanhtuu?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    gioitinh?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetExpire?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bookings?: BookingUncheckedUpdateManyWithoutDoctorNestedInput
  }

  export type BookingCreateManyDoctorInput = {
    id?: number
    hoten: string
    email: string
    sdt: string
    diachi: string
    dichvu: string
    bacsi: string
    gioitinh?: string | null
    ghichu?: string | null
    thoigianhen: Date | string
    dongy: boolean
    created_at?: Date | string
    serviceId?: number | null
    xacnhan?: boolean
    huy?: boolean
    trangThai?: string | null
  }

  export type WorkScheduleCreateManyDoctorInput = {
    id?: number
    date: Date | string
    startTime: string
    endTime: string
    room: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingUpdateWithoutDoctorInput = {
    hoten?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    sdt?: StringFieldUpdateOperationsInput | string
    diachi?: StringFieldUpdateOperationsInput | string
    dichvu?: StringFieldUpdateOperationsInput | string
    bacsi?: StringFieldUpdateOperationsInput | string
    gioitinh?: NullableStringFieldUpdateOperationsInput | string | null
    ghichu?: NullableStringFieldUpdateOperationsInput | string | null
    thoigianhen?: DateTimeFieldUpdateOperationsInput | Date | string
    dongy?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    xacnhan?: BoolFieldUpdateOperationsInput | boolean
    huy?: BoolFieldUpdateOperationsInput | boolean
    trangThai?: NullableStringFieldUpdateOperationsInput | string | null
    service?: DichvuUpdateOneWithoutBookingsNestedInput
  }

  export type BookingUncheckedUpdateWithoutDoctorInput = {
    id?: IntFieldUpdateOperationsInput | number
    hoten?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    sdt?: StringFieldUpdateOperationsInput | string
    diachi?: StringFieldUpdateOperationsInput | string
    dichvu?: StringFieldUpdateOperationsInput | string
    bacsi?: StringFieldUpdateOperationsInput | string
    gioitinh?: NullableStringFieldUpdateOperationsInput | string | null
    ghichu?: NullableStringFieldUpdateOperationsInput | string | null
    thoigianhen?: DateTimeFieldUpdateOperationsInput | Date | string
    dongy?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    serviceId?: NullableIntFieldUpdateOperationsInput | number | null
    xacnhan?: BoolFieldUpdateOperationsInput | boolean
    huy?: BoolFieldUpdateOperationsInput | boolean
    trangThai?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BookingUncheckedUpdateManyWithoutDoctorInput = {
    id?: IntFieldUpdateOperationsInput | number
    hoten?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    sdt?: StringFieldUpdateOperationsInput | string
    diachi?: StringFieldUpdateOperationsInput | string
    dichvu?: StringFieldUpdateOperationsInput | string
    bacsi?: StringFieldUpdateOperationsInput | string
    gioitinh?: NullableStringFieldUpdateOperationsInput | string | null
    ghichu?: NullableStringFieldUpdateOperationsInput | string | null
    thoigianhen?: DateTimeFieldUpdateOperationsInput | Date | string
    dongy?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    serviceId?: NullableIntFieldUpdateOperationsInput | number | null
    xacnhan?: BoolFieldUpdateOperationsInput | boolean
    huy?: BoolFieldUpdateOperationsInput | boolean
    trangThai?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WorkScheduleUpdateWithoutDoctorInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    room?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkScheduleUncheckedUpdateWithoutDoctorInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    room?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkScheduleUncheckedUpdateManyWithoutDoctorInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    room?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyDichvuInput = {
    id?: number
    name: string
    email: string
    password?: string | null
    avatar?: string | null
    role: string
    chuyenmon?: string | null
    namkinhnghiem?: number | null
    gioithieu?: string | null
    thanhtuu?: string | null
    phone?: string | null
    address?: string | null
    gioitinh?: string | null
    resetToken?: string | null
    resetExpire?: Date | string | null
  }

  export type BookingCreateManyServiceInput = {
    id?: number
    hoten: string
    email: string
    sdt: string
    diachi: string
    dichvu: string
    bacsi: string
    gioitinh?: string | null
    ghichu?: string | null
    thoigianhen: Date | string
    dongy: boolean
    created_at?: Date | string
    doctorId?: number | null
    xacnhan?: boolean
    huy?: boolean
    trangThai?: string | null
  }

  export type UserUpdateWithoutDichvuInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    chuyenmon?: NullableStringFieldUpdateOperationsInput | string | null
    namkinhnghiem?: NullableIntFieldUpdateOperationsInput | number | null
    gioithieu?: NullableStringFieldUpdateOperationsInput | string | null
    thanhtuu?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    gioitinh?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetExpire?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bookings?: BookingUpdateManyWithoutDoctorNestedInput
    workSchedules?: WorkScheduleUpdateManyWithoutDoctorNestedInput
  }

  export type UserUncheckedUpdateWithoutDichvuInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    chuyenmon?: NullableStringFieldUpdateOperationsInput | string | null
    namkinhnghiem?: NullableIntFieldUpdateOperationsInput | number | null
    gioithieu?: NullableStringFieldUpdateOperationsInput | string | null
    thanhtuu?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    gioitinh?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetExpire?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bookings?: BookingUncheckedUpdateManyWithoutDoctorNestedInput
    workSchedules?: WorkScheduleUncheckedUpdateManyWithoutDoctorNestedInput
  }

  export type UserUncheckedUpdateManyWithoutDichvuInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    chuyenmon?: NullableStringFieldUpdateOperationsInput | string | null
    namkinhnghiem?: NullableIntFieldUpdateOperationsInput | number | null
    gioithieu?: NullableStringFieldUpdateOperationsInput | string | null
    thanhtuu?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    gioitinh?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetExpire?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BookingUpdateWithoutServiceInput = {
    hoten?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    sdt?: StringFieldUpdateOperationsInput | string
    diachi?: StringFieldUpdateOperationsInput | string
    dichvu?: StringFieldUpdateOperationsInput | string
    bacsi?: StringFieldUpdateOperationsInput | string
    gioitinh?: NullableStringFieldUpdateOperationsInput | string | null
    ghichu?: NullableStringFieldUpdateOperationsInput | string | null
    thoigianhen?: DateTimeFieldUpdateOperationsInput | Date | string
    dongy?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    xacnhan?: BoolFieldUpdateOperationsInput | boolean
    huy?: BoolFieldUpdateOperationsInput | boolean
    trangThai?: NullableStringFieldUpdateOperationsInput | string | null
    doctor?: UserUpdateOneWithoutBookingsNestedInput
  }

  export type BookingUncheckedUpdateWithoutServiceInput = {
    id?: IntFieldUpdateOperationsInput | number
    hoten?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    sdt?: StringFieldUpdateOperationsInput | string
    diachi?: StringFieldUpdateOperationsInput | string
    dichvu?: StringFieldUpdateOperationsInput | string
    bacsi?: StringFieldUpdateOperationsInput | string
    gioitinh?: NullableStringFieldUpdateOperationsInput | string | null
    ghichu?: NullableStringFieldUpdateOperationsInput | string | null
    thoigianhen?: DateTimeFieldUpdateOperationsInput | Date | string
    dongy?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    doctorId?: NullableIntFieldUpdateOperationsInput | number | null
    xacnhan?: BoolFieldUpdateOperationsInput | boolean
    huy?: BoolFieldUpdateOperationsInput | boolean
    trangThai?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BookingUncheckedUpdateManyWithoutServiceInput = {
    id?: IntFieldUpdateOperationsInput | number
    hoten?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    sdt?: StringFieldUpdateOperationsInput | string
    diachi?: StringFieldUpdateOperationsInput | string
    dichvu?: StringFieldUpdateOperationsInput | string
    bacsi?: StringFieldUpdateOperationsInput | string
    gioitinh?: NullableStringFieldUpdateOperationsInput | string | null
    ghichu?: NullableStringFieldUpdateOperationsInput | string | null
    thoigianhen?: DateTimeFieldUpdateOperationsInput | Date | string
    dongy?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    doctorId?: NullableIntFieldUpdateOperationsInput | number | null
    xacnhan?: BoolFieldUpdateOperationsInput | boolean
    huy?: BoolFieldUpdateOperationsInput | boolean
    trangThai?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}