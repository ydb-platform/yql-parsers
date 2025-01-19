# Generated from YQL.g4 by ANTLR 4.13.1
from antlr4 import *
if "." in __name__:
    from .YQLParser import YQLParser
else:
    from YQLParser import YQLParser

# This class defines a complete listener for a parse tree produced by YQLParser.
class YQLListener(ParseTreeListener):

    # Enter a parse tree produced by YQLParser#sql_query.
    def enterSql_query(self, ctx:YQLParser.Sql_queryContext):
        pass

    # Exit a parse tree produced by YQLParser#sql_query.
    def exitSql_query(self, ctx:YQLParser.Sql_queryContext):
        pass


    # Enter a parse tree produced by YQLParser#sql_stmt_list.
    def enterSql_stmt_list(self, ctx:YQLParser.Sql_stmt_listContext):
        pass

    # Exit a parse tree produced by YQLParser#sql_stmt_list.
    def exitSql_stmt_list(self, ctx:YQLParser.Sql_stmt_listContext):
        pass


    # Enter a parse tree produced by YQLParser#ansi_sql_stmt_list.
    def enterAnsi_sql_stmt_list(self, ctx:YQLParser.Ansi_sql_stmt_listContext):
        pass

    # Exit a parse tree produced by YQLParser#ansi_sql_stmt_list.
    def exitAnsi_sql_stmt_list(self, ctx:YQLParser.Ansi_sql_stmt_listContext):
        pass


    # Enter a parse tree produced by YQLParser#lambda_body.
    def enterLambda_body(self, ctx:YQLParser.Lambda_bodyContext):
        pass

    # Exit a parse tree produced by YQLParser#lambda_body.
    def exitLambda_body(self, ctx:YQLParser.Lambda_bodyContext):
        pass


    # Enter a parse tree produced by YQLParser#lambda_stmt.
    def enterLambda_stmt(self, ctx:YQLParser.Lambda_stmtContext):
        pass

    # Exit a parse tree produced by YQLParser#lambda_stmt.
    def exitLambda_stmt(self, ctx:YQLParser.Lambda_stmtContext):
        pass


    # Enter a parse tree produced by YQLParser#sql_stmt.
    def enterSql_stmt(self, ctx:YQLParser.Sql_stmtContext):
        pass

    # Exit a parse tree produced by YQLParser#sql_stmt.
    def exitSql_stmt(self, ctx:YQLParser.Sql_stmtContext):
        pass


    # Enter a parse tree produced by YQLParser#sql_stmt_core.
    def enterSql_stmt_core(self, ctx:YQLParser.Sql_stmt_coreContext):
        pass

    # Exit a parse tree produced by YQLParser#sql_stmt_core.
    def exitSql_stmt_core(self, ctx:YQLParser.Sql_stmt_coreContext):
        pass


    # Enter a parse tree produced by YQLParser#expr.
    def enterExpr(self, ctx:YQLParser.ExprContext):
        pass

    # Exit a parse tree produced by YQLParser#expr.
    def exitExpr(self, ctx:YQLParser.ExprContext):
        pass


    # Enter a parse tree produced by YQLParser#or_subexpr.
    def enterOr_subexpr(self, ctx:YQLParser.Or_subexprContext):
        pass

    # Exit a parse tree produced by YQLParser#or_subexpr.
    def exitOr_subexpr(self, ctx:YQLParser.Or_subexprContext):
        pass


    # Enter a parse tree produced by YQLParser#and_subexpr.
    def enterAnd_subexpr(self, ctx:YQLParser.And_subexprContext):
        pass

    # Exit a parse tree produced by YQLParser#and_subexpr.
    def exitAnd_subexpr(self, ctx:YQLParser.And_subexprContext):
        pass


    # Enter a parse tree produced by YQLParser#xor_subexpr.
    def enterXor_subexpr(self, ctx:YQLParser.Xor_subexprContext):
        pass

    # Exit a parse tree produced by YQLParser#xor_subexpr.
    def exitXor_subexpr(self, ctx:YQLParser.Xor_subexprContext):
        pass


    # Enter a parse tree produced by YQLParser#distinct_from_op.
    def enterDistinct_from_op(self, ctx:YQLParser.Distinct_from_opContext):
        pass

    # Exit a parse tree produced by YQLParser#distinct_from_op.
    def exitDistinct_from_op(self, ctx:YQLParser.Distinct_from_opContext):
        pass


    # Enter a parse tree produced by YQLParser#cond_expr.
    def enterCond_expr(self, ctx:YQLParser.Cond_exprContext):
        pass

    # Exit a parse tree produced by YQLParser#cond_expr.
    def exitCond_expr(self, ctx:YQLParser.Cond_exprContext):
        pass


    # Enter a parse tree produced by YQLParser#match_op.
    def enterMatch_op(self, ctx:YQLParser.Match_opContext):
        pass

    # Exit a parse tree produced by YQLParser#match_op.
    def exitMatch_op(self, ctx:YQLParser.Match_opContext):
        pass


    # Enter a parse tree produced by YQLParser#eq_subexpr.
    def enterEq_subexpr(self, ctx:YQLParser.Eq_subexprContext):
        pass

    # Exit a parse tree produced by YQLParser#eq_subexpr.
    def exitEq_subexpr(self, ctx:YQLParser.Eq_subexprContext):
        pass


    # Enter a parse tree produced by YQLParser#shift_right.
    def enterShift_right(self, ctx:YQLParser.Shift_rightContext):
        pass

    # Exit a parse tree produced by YQLParser#shift_right.
    def exitShift_right(self, ctx:YQLParser.Shift_rightContext):
        pass


    # Enter a parse tree produced by YQLParser#rot_right.
    def enterRot_right(self, ctx:YQLParser.Rot_rightContext):
        pass

    # Exit a parse tree produced by YQLParser#rot_right.
    def exitRot_right(self, ctx:YQLParser.Rot_rightContext):
        pass


    # Enter a parse tree produced by YQLParser#double_question.
    def enterDouble_question(self, ctx:YQLParser.Double_questionContext):
        pass

    # Exit a parse tree produced by YQLParser#double_question.
    def exitDouble_question(self, ctx:YQLParser.Double_questionContext):
        pass


    # Enter a parse tree produced by YQLParser#neq_subexpr.
    def enterNeq_subexpr(self, ctx:YQLParser.Neq_subexprContext):
        pass

    # Exit a parse tree produced by YQLParser#neq_subexpr.
    def exitNeq_subexpr(self, ctx:YQLParser.Neq_subexprContext):
        pass


    # Enter a parse tree produced by YQLParser#bit_subexpr.
    def enterBit_subexpr(self, ctx:YQLParser.Bit_subexprContext):
        pass

    # Exit a parse tree produced by YQLParser#bit_subexpr.
    def exitBit_subexpr(self, ctx:YQLParser.Bit_subexprContext):
        pass


    # Enter a parse tree produced by YQLParser#add_subexpr.
    def enterAdd_subexpr(self, ctx:YQLParser.Add_subexprContext):
        pass

    # Exit a parse tree produced by YQLParser#add_subexpr.
    def exitAdd_subexpr(self, ctx:YQLParser.Add_subexprContext):
        pass


    # Enter a parse tree produced by YQLParser#mul_subexpr.
    def enterMul_subexpr(self, ctx:YQLParser.Mul_subexprContext):
        pass

    # Exit a parse tree produced by YQLParser#mul_subexpr.
    def exitMul_subexpr(self, ctx:YQLParser.Mul_subexprContext):
        pass


    # Enter a parse tree produced by YQLParser#con_subexpr.
    def enterCon_subexpr(self, ctx:YQLParser.Con_subexprContext):
        pass

    # Exit a parse tree produced by YQLParser#con_subexpr.
    def exitCon_subexpr(self, ctx:YQLParser.Con_subexprContext):
        pass


    # Enter a parse tree produced by YQLParser#unary_op.
    def enterUnary_op(self, ctx:YQLParser.Unary_opContext):
        pass

    # Exit a parse tree produced by YQLParser#unary_op.
    def exitUnary_op(self, ctx:YQLParser.Unary_opContext):
        pass


    # Enter a parse tree produced by YQLParser#unary_subexpr_suffix.
    def enterUnary_subexpr_suffix(self, ctx:YQLParser.Unary_subexpr_suffixContext):
        pass

    # Exit a parse tree produced by YQLParser#unary_subexpr_suffix.
    def exitUnary_subexpr_suffix(self, ctx:YQLParser.Unary_subexpr_suffixContext):
        pass


    # Enter a parse tree produced by YQLParser#unary_casual_subexpr.
    def enterUnary_casual_subexpr(self, ctx:YQLParser.Unary_casual_subexprContext):
        pass

    # Exit a parse tree produced by YQLParser#unary_casual_subexpr.
    def exitUnary_casual_subexpr(self, ctx:YQLParser.Unary_casual_subexprContext):
        pass


    # Enter a parse tree produced by YQLParser#in_unary_casual_subexpr.
    def enterIn_unary_casual_subexpr(self, ctx:YQLParser.In_unary_casual_subexprContext):
        pass

    # Exit a parse tree produced by YQLParser#in_unary_casual_subexpr.
    def exitIn_unary_casual_subexpr(self, ctx:YQLParser.In_unary_casual_subexprContext):
        pass


    # Enter a parse tree produced by YQLParser#unary_subexpr.
    def enterUnary_subexpr(self, ctx:YQLParser.Unary_subexprContext):
        pass

    # Exit a parse tree produced by YQLParser#unary_subexpr.
    def exitUnary_subexpr(self, ctx:YQLParser.Unary_subexprContext):
        pass


    # Enter a parse tree produced by YQLParser#in_unary_subexpr.
    def enterIn_unary_subexpr(self, ctx:YQLParser.In_unary_subexprContext):
        pass

    # Exit a parse tree produced by YQLParser#in_unary_subexpr.
    def exitIn_unary_subexpr(self, ctx:YQLParser.In_unary_subexprContext):
        pass


    # Enter a parse tree produced by YQLParser#list_literal.
    def enterList_literal(self, ctx:YQLParser.List_literalContext):
        pass

    # Exit a parse tree produced by YQLParser#list_literal.
    def exitList_literal(self, ctx:YQLParser.List_literalContext):
        pass


    # Enter a parse tree produced by YQLParser#expr_dict_list.
    def enterExpr_dict_list(self, ctx:YQLParser.Expr_dict_listContext):
        pass

    # Exit a parse tree produced by YQLParser#expr_dict_list.
    def exitExpr_dict_list(self, ctx:YQLParser.Expr_dict_listContext):
        pass


    # Enter a parse tree produced by YQLParser#dict_literal.
    def enterDict_literal(self, ctx:YQLParser.Dict_literalContext):
        pass

    # Exit a parse tree produced by YQLParser#dict_literal.
    def exitDict_literal(self, ctx:YQLParser.Dict_literalContext):
        pass


    # Enter a parse tree produced by YQLParser#expr_struct_list.
    def enterExpr_struct_list(self, ctx:YQLParser.Expr_struct_listContext):
        pass

    # Exit a parse tree produced by YQLParser#expr_struct_list.
    def exitExpr_struct_list(self, ctx:YQLParser.Expr_struct_listContext):
        pass


    # Enter a parse tree produced by YQLParser#struct_literal.
    def enterStruct_literal(self, ctx:YQLParser.Struct_literalContext):
        pass

    # Exit a parse tree produced by YQLParser#struct_literal.
    def exitStruct_literal(self, ctx:YQLParser.Struct_literalContext):
        pass


    # Enter a parse tree produced by YQLParser#atom_expr.
    def enterAtom_expr(self, ctx:YQLParser.Atom_exprContext):
        pass

    # Exit a parse tree produced by YQLParser#atom_expr.
    def exitAtom_expr(self, ctx:YQLParser.Atom_exprContext):
        pass


    # Enter a parse tree produced by YQLParser#in_atom_expr.
    def enterIn_atom_expr(self, ctx:YQLParser.In_atom_exprContext):
        pass

    # Exit a parse tree produced by YQLParser#in_atom_expr.
    def exitIn_atom_expr(self, ctx:YQLParser.In_atom_exprContext):
        pass


    # Enter a parse tree produced by YQLParser#cast_expr.
    def enterCast_expr(self, ctx:YQLParser.Cast_exprContext):
        pass

    # Exit a parse tree produced by YQLParser#cast_expr.
    def exitCast_expr(self, ctx:YQLParser.Cast_exprContext):
        pass


    # Enter a parse tree produced by YQLParser#bitcast_expr.
    def enterBitcast_expr(self, ctx:YQLParser.Bitcast_exprContext):
        pass

    # Exit a parse tree produced by YQLParser#bitcast_expr.
    def exitBitcast_expr(self, ctx:YQLParser.Bitcast_exprContext):
        pass


    # Enter a parse tree produced by YQLParser#exists_expr.
    def enterExists_expr(self, ctx:YQLParser.Exists_exprContext):
        pass

    # Exit a parse tree produced by YQLParser#exists_expr.
    def exitExists_expr(self, ctx:YQLParser.Exists_exprContext):
        pass


    # Enter a parse tree produced by YQLParser#case_expr.
    def enterCase_expr(self, ctx:YQLParser.Case_exprContext):
        pass

    # Exit a parse tree produced by YQLParser#case_expr.
    def exitCase_expr(self, ctx:YQLParser.Case_exprContext):
        pass


    # Enter a parse tree produced by YQLParser#lambda.
    def enterLambda(self, ctx:YQLParser.LambdaContext):
        pass

    # Exit a parse tree produced by YQLParser#lambda.
    def exitLambda(self, ctx:YQLParser.LambdaContext):
        pass


    # Enter a parse tree produced by YQLParser#in_expr.
    def enterIn_expr(self, ctx:YQLParser.In_exprContext):
        pass

    # Exit a parse tree produced by YQLParser#in_expr.
    def exitIn_expr(self, ctx:YQLParser.In_exprContext):
        pass


    # Enter a parse tree produced by YQLParser#json_api_expr.
    def enterJson_api_expr(self, ctx:YQLParser.Json_api_exprContext):
        pass

    # Exit a parse tree produced by YQLParser#json_api_expr.
    def exitJson_api_expr(self, ctx:YQLParser.Json_api_exprContext):
        pass


    # Enter a parse tree produced by YQLParser#jsonpath_spec.
    def enterJsonpath_spec(self, ctx:YQLParser.Jsonpath_specContext):
        pass

    # Exit a parse tree produced by YQLParser#jsonpath_spec.
    def exitJsonpath_spec(self, ctx:YQLParser.Jsonpath_specContext):
        pass


    # Enter a parse tree produced by YQLParser#json_variable_name.
    def enterJson_variable_name(self, ctx:YQLParser.Json_variable_nameContext):
        pass

    # Exit a parse tree produced by YQLParser#json_variable_name.
    def exitJson_variable_name(self, ctx:YQLParser.Json_variable_nameContext):
        pass


    # Enter a parse tree produced by YQLParser#json_variable.
    def enterJson_variable(self, ctx:YQLParser.Json_variableContext):
        pass

    # Exit a parse tree produced by YQLParser#json_variable.
    def exitJson_variable(self, ctx:YQLParser.Json_variableContext):
        pass


    # Enter a parse tree produced by YQLParser#json_variables.
    def enterJson_variables(self, ctx:YQLParser.Json_variablesContext):
        pass

    # Exit a parse tree produced by YQLParser#json_variables.
    def exitJson_variables(self, ctx:YQLParser.Json_variablesContext):
        pass


    # Enter a parse tree produced by YQLParser#json_common_args.
    def enterJson_common_args(self, ctx:YQLParser.Json_common_argsContext):
        pass

    # Exit a parse tree produced by YQLParser#json_common_args.
    def exitJson_common_args(self, ctx:YQLParser.Json_common_argsContext):
        pass


    # Enter a parse tree produced by YQLParser#json_case_handler.
    def enterJson_case_handler(self, ctx:YQLParser.Json_case_handlerContext):
        pass

    # Exit a parse tree produced by YQLParser#json_case_handler.
    def exitJson_case_handler(self, ctx:YQLParser.Json_case_handlerContext):
        pass


    # Enter a parse tree produced by YQLParser#json_value.
    def enterJson_value(self, ctx:YQLParser.Json_valueContext):
        pass

    # Exit a parse tree produced by YQLParser#json_value.
    def exitJson_value(self, ctx:YQLParser.Json_valueContext):
        pass


    # Enter a parse tree produced by YQLParser#json_exists_handler.
    def enterJson_exists_handler(self, ctx:YQLParser.Json_exists_handlerContext):
        pass

    # Exit a parse tree produced by YQLParser#json_exists_handler.
    def exitJson_exists_handler(self, ctx:YQLParser.Json_exists_handlerContext):
        pass


    # Enter a parse tree produced by YQLParser#json_exists.
    def enterJson_exists(self, ctx:YQLParser.Json_existsContext):
        pass

    # Exit a parse tree produced by YQLParser#json_exists.
    def exitJson_exists(self, ctx:YQLParser.Json_existsContext):
        pass


    # Enter a parse tree produced by YQLParser#json_query_wrapper.
    def enterJson_query_wrapper(self, ctx:YQLParser.Json_query_wrapperContext):
        pass

    # Exit a parse tree produced by YQLParser#json_query_wrapper.
    def exitJson_query_wrapper(self, ctx:YQLParser.Json_query_wrapperContext):
        pass


    # Enter a parse tree produced by YQLParser#json_query_handler.
    def enterJson_query_handler(self, ctx:YQLParser.Json_query_handlerContext):
        pass

    # Exit a parse tree produced by YQLParser#json_query_handler.
    def exitJson_query_handler(self, ctx:YQLParser.Json_query_handlerContext):
        pass


    # Enter a parse tree produced by YQLParser#json_query.
    def enterJson_query(self, ctx:YQLParser.Json_queryContext):
        pass

    # Exit a parse tree produced by YQLParser#json_query.
    def exitJson_query(self, ctx:YQLParser.Json_queryContext):
        pass


    # Enter a parse tree produced by YQLParser#smart_parenthesis.
    def enterSmart_parenthesis(self, ctx:YQLParser.Smart_parenthesisContext):
        pass

    # Exit a parse tree produced by YQLParser#smart_parenthesis.
    def exitSmart_parenthesis(self, ctx:YQLParser.Smart_parenthesisContext):
        pass


    # Enter a parse tree produced by YQLParser#expr_list.
    def enterExpr_list(self, ctx:YQLParser.Expr_listContext):
        pass

    # Exit a parse tree produced by YQLParser#expr_list.
    def exitExpr_list(self, ctx:YQLParser.Expr_listContext):
        pass


    # Enter a parse tree produced by YQLParser#pure_column_list.
    def enterPure_column_list(self, ctx:YQLParser.Pure_column_listContext):
        pass

    # Exit a parse tree produced by YQLParser#pure_column_list.
    def exitPure_column_list(self, ctx:YQLParser.Pure_column_listContext):
        pass


    # Enter a parse tree produced by YQLParser#pure_column_or_named.
    def enterPure_column_or_named(self, ctx:YQLParser.Pure_column_or_namedContext):
        pass

    # Exit a parse tree produced by YQLParser#pure_column_or_named.
    def exitPure_column_or_named(self, ctx:YQLParser.Pure_column_or_namedContext):
        pass


    # Enter a parse tree produced by YQLParser#pure_column_or_named_list.
    def enterPure_column_or_named_list(self, ctx:YQLParser.Pure_column_or_named_listContext):
        pass

    # Exit a parse tree produced by YQLParser#pure_column_or_named_list.
    def exitPure_column_or_named_list(self, ctx:YQLParser.Pure_column_or_named_listContext):
        pass


    # Enter a parse tree produced by YQLParser#column_name.
    def enterColumn_name(self, ctx:YQLParser.Column_nameContext):
        pass

    # Exit a parse tree produced by YQLParser#column_name.
    def exitColumn_name(self, ctx:YQLParser.Column_nameContext):
        pass


    # Enter a parse tree produced by YQLParser#without_column_name.
    def enterWithout_column_name(self, ctx:YQLParser.Without_column_nameContext):
        pass

    # Exit a parse tree produced by YQLParser#without_column_name.
    def exitWithout_column_name(self, ctx:YQLParser.Without_column_nameContext):
        pass


    # Enter a parse tree produced by YQLParser#column_list.
    def enterColumn_list(self, ctx:YQLParser.Column_listContext):
        pass

    # Exit a parse tree produced by YQLParser#column_list.
    def exitColumn_list(self, ctx:YQLParser.Column_listContext):
        pass


    # Enter a parse tree produced by YQLParser#without_column_list.
    def enterWithout_column_list(self, ctx:YQLParser.Without_column_listContext):
        pass

    # Exit a parse tree produced by YQLParser#without_column_list.
    def exitWithout_column_list(self, ctx:YQLParser.Without_column_listContext):
        pass


    # Enter a parse tree produced by YQLParser#named_expr.
    def enterNamed_expr(self, ctx:YQLParser.Named_exprContext):
        pass

    # Exit a parse tree produced by YQLParser#named_expr.
    def exitNamed_expr(self, ctx:YQLParser.Named_exprContext):
        pass


    # Enter a parse tree produced by YQLParser#named_expr_list.
    def enterNamed_expr_list(self, ctx:YQLParser.Named_expr_listContext):
        pass

    # Exit a parse tree produced by YQLParser#named_expr_list.
    def exitNamed_expr_list(self, ctx:YQLParser.Named_expr_listContext):
        pass


    # Enter a parse tree produced by YQLParser#invoke_expr.
    def enterInvoke_expr(self, ctx:YQLParser.Invoke_exprContext):
        pass

    # Exit a parse tree produced by YQLParser#invoke_expr.
    def exitInvoke_expr(self, ctx:YQLParser.Invoke_exprContext):
        pass


    # Enter a parse tree produced by YQLParser#invoke_expr_tail.
    def enterInvoke_expr_tail(self, ctx:YQLParser.Invoke_expr_tailContext):
        pass

    # Exit a parse tree produced by YQLParser#invoke_expr_tail.
    def exitInvoke_expr_tail(self, ctx:YQLParser.Invoke_expr_tailContext):
        pass


    # Enter a parse tree produced by YQLParser#using_call_expr.
    def enterUsing_call_expr(self, ctx:YQLParser.Using_call_exprContext):
        pass

    # Exit a parse tree produced by YQLParser#using_call_expr.
    def exitUsing_call_expr(self, ctx:YQLParser.Using_call_exprContext):
        pass


    # Enter a parse tree produced by YQLParser#key_expr.
    def enterKey_expr(self, ctx:YQLParser.Key_exprContext):
        pass

    # Exit a parse tree produced by YQLParser#key_expr.
    def exitKey_expr(self, ctx:YQLParser.Key_exprContext):
        pass


    # Enter a parse tree produced by YQLParser#when_expr.
    def enterWhen_expr(self, ctx:YQLParser.When_exprContext):
        pass

    # Exit a parse tree produced by YQLParser#when_expr.
    def exitWhen_expr(self, ctx:YQLParser.When_exprContext):
        pass


    # Enter a parse tree produced by YQLParser#literal_value.
    def enterLiteral_value(self, ctx:YQLParser.Literal_valueContext):
        pass

    # Exit a parse tree produced by YQLParser#literal_value.
    def exitLiteral_value(self, ctx:YQLParser.Literal_valueContext):
        pass


    # Enter a parse tree produced by YQLParser#bind_parameter.
    def enterBind_parameter(self, ctx:YQLParser.Bind_parameterContext):
        pass

    # Exit a parse tree produced by YQLParser#bind_parameter.
    def exitBind_parameter(self, ctx:YQLParser.Bind_parameterContext):
        pass


    # Enter a parse tree produced by YQLParser#opt_bind_parameter.
    def enterOpt_bind_parameter(self, ctx:YQLParser.Opt_bind_parameterContext):
        pass

    # Exit a parse tree produced by YQLParser#opt_bind_parameter.
    def exitOpt_bind_parameter(self, ctx:YQLParser.Opt_bind_parameterContext):
        pass


    # Enter a parse tree produced by YQLParser#bind_parameter_list.
    def enterBind_parameter_list(self, ctx:YQLParser.Bind_parameter_listContext):
        pass

    # Exit a parse tree produced by YQLParser#bind_parameter_list.
    def exitBind_parameter_list(self, ctx:YQLParser.Bind_parameter_listContext):
        pass


    # Enter a parse tree produced by YQLParser#named_bind_parameter.
    def enterNamed_bind_parameter(self, ctx:YQLParser.Named_bind_parameterContext):
        pass

    # Exit a parse tree produced by YQLParser#named_bind_parameter.
    def exitNamed_bind_parameter(self, ctx:YQLParser.Named_bind_parameterContext):
        pass


    # Enter a parse tree produced by YQLParser#named_bind_parameter_list.
    def enterNamed_bind_parameter_list(self, ctx:YQLParser.Named_bind_parameter_listContext):
        pass

    # Exit a parse tree produced by YQLParser#named_bind_parameter_list.
    def exitNamed_bind_parameter_list(self, ctx:YQLParser.Named_bind_parameter_listContext):
        pass


    # Enter a parse tree produced by YQLParser#signed_number.
    def enterSigned_number(self, ctx:YQLParser.Signed_numberContext):
        pass

    # Exit a parse tree produced by YQLParser#signed_number.
    def exitSigned_number(self, ctx:YQLParser.Signed_numberContext):
        pass


    # Enter a parse tree produced by YQLParser#type_name_simple.
    def enterType_name_simple(self, ctx:YQLParser.Type_name_simpleContext):
        pass

    # Exit a parse tree produced by YQLParser#type_name_simple.
    def exitType_name_simple(self, ctx:YQLParser.Type_name_simpleContext):
        pass


    # Enter a parse tree produced by YQLParser#integer_or_bind.
    def enterInteger_or_bind(self, ctx:YQLParser.Integer_or_bindContext):
        pass

    # Exit a parse tree produced by YQLParser#integer_or_bind.
    def exitInteger_or_bind(self, ctx:YQLParser.Integer_or_bindContext):
        pass


    # Enter a parse tree produced by YQLParser#type_name_tag.
    def enterType_name_tag(self, ctx:YQLParser.Type_name_tagContext):
        pass

    # Exit a parse tree produced by YQLParser#type_name_tag.
    def exitType_name_tag(self, ctx:YQLParser.Type_name_tagContext):
        pass


    # Enter a parse tree produced by YQLParser#struct_arg.
    def enterStruct_arg(self, ctx:YQLParser.Struct_argContext):
        pass

    # Exit a parse tree produced by YQLParser#struct_arg.
    def exitStruct_arg(self, ctx:YQLParser.Struct_argContext):
        pass


    # Enter a parse tree produced by YQLParser#struct_arg_positional.
    def enterStruct_arg_positional(self, ctx:YQLParser.Struct_arg_positionalContext):
        pass

    # Exit a parse tree produced by YQLParser#struct_arg_positional.
    def exitStruct_arg_positional(self, ctx:YQLParser.Struct_arg_positionalContext):
        pass


    # Enter a parse tree produced by YQLParser#variant_arg.
    def enterVariant_arg(self, ctx:YQLParser.Variant_argContext):
        pass

    # Exit a parse tree produced by YQLParser#variant_arg.
    def exitVariant_arg(self, ctx:YQLParser.Variant_argContext):
        pass


    # Enter a parse tree produced by YQLParser#callable_arg.
    def enterCallable_arg(self, ctx:YQLParser.Callable_argContext):
        pass

    # Exit a parse tree produced by YQLParser#callable_arg.
    def exitCallable_arg(self, ctx:YQLParser.Callable_argContext):
        pass


    # Enter a parse tree produced by YQLParser#callable_arg_list.
    def enterCallable_arg_list(self, ctx:YQLParser.Callable_arg_listContext):
        pass

    # Exit a parse tree produced by YQLParser#callable_arg_list.
    def exitCallable_arg_list(self, ctx:YQLParser.Callable_arg_listContext):
        pass


    # Enter a parse tree produced by YQLParser#type_name_decimal.
    def enterType_name_decimal(self, ctx:YQLParser.Type_name_decimalContext):
        pass

    # Exit a parse tree produced by YQLParser#type_name_decimal.
    def exitType_name_decimal(self, ctx:YQLParser.Type_name_decimalContext):
        pass


    # Enter a parse tree produced by YQLParser#type_name_optional.
    def enterType_name_optional(self, ctx:YQLParser.Type_name_optionalContext):
        pass

    # Exit a parse tree produced by YQLParser#type_name_optional.
    def exitType_name_optional(self, ctx:YQLParser.Type_name_optionalContext):
        pass


    # Enter a parse tree produced by YQLParser#type_name_tuple.
    def enterType_name_tuple(self, ctx:YQLParser.Type_name_tupleContext):
        pass

    # Exit a parse tree produced by YQLParser#type_name_tuple.
    def exitType_name_tuple(self, ctx:YQLParser.Type_name_tupleContext):
        pass


    # Enter a parse tree produced by YQLParser#type_name_struct.
    def enterType_name_struct(self, ctx:YQLParser.Type_name_structContext):
        pass

    # Exit a parse tree produced by YQLParser#type_name_struct.
    def exitType_name_struct(self, ctx:YQLParser.Type_name_structContext):
        pass


    # Enter a parse tree produced by YQLParser#type_name_variant.
    def enterType_name_variant(self, ctx:YQLParser.Type_name_variantContext):
        pass

    # Exit a parse tree produced by YQLParser#type_name_variant.
    def exitType_name_variant(self, ctx:YQLParser.Type_name_variantContext):
        pass


    # Enter a parse tree produced by YQLParser#type_name_list.
    def enterType_name_list(self, ctx:YQLParser.Type_name_listContext):
        pass

    # Exit a parse tree produced by YQLParser#type_name_list.
    def exitType_name_list(self, ctx:YQLParser.Type_name_listContext):
        pass


    # Enter a parse tree produced by YQLParser#type_name_stream.
    def enterType_name_stream(self, ctx:YQLParser.Type_name_streamContext):
        pass

    # Exit a parse tree produced by YQLParser#type_name_stream.
    def exitType_name_stream(self, ctx:YQLParser.Type_name_streamContext):
        pass


    # Enter a parse tree produced by YQLParser#type_name_flow.
    def enterType_name_flow(self, ctx:YQLParser.Type_name_flowContext):
        pass

    # Exit a parse tree produced by YQLParser#type_name_flow.
    def exitType_name_flow(self, ctx:YQLParser.Type_name_flowContext):
        pass


    # Enter a parse tree produced by YQLParser#type_name_dict.
    def enterType_name_dict(self, ctx:YQLParser.Type_name_dictContext):
        pass

    # Exit a parse tree produced by YQLParser#type_name_dict.
    def exitType_name_dict(self, ctx:YQLParser.Type_name_dictContext):
        pass


    # Enter a parse tree produced by YQLParser#type_name_set.
    def enterType_name_set(self, ctx:YQLParser.Type_name_setContext):
        pass

    # Exit a parse tree produced by YQLParser#type_name_set.
    def exitType_name_set(self, ctx:YQLParser.Type_name_setContext):
        pass


    # Enter a parse tree produced by YQLParser#type_name_enum.
    def enterType_name_enum(self, ctx:YQLParser.Type_name_enumContext):
        pass

    # Exit a parse tree produced by YQLParser#type_name_enum.
    def exitType_name_enum(self, ctx:YQLParser.Type_name_enumContext):
        pass


    # Enter a parse tree produced by YQLParser#type_name_resource.
    def enterType_name_resource(self, ctx:YQLParser.Type_name_resourceContext):
        pass

    # Exit a parse tree produced by YQLParser#type_name_resource.
    def exitType_name_resource(self, ctx:YQLParser.Type_name_resourceContext):
        pass


    # Enter a parse tree produced by YQLParser#type_name_tagged.
    def enterType_name_tagged(self, ctx:YQLParser.Type_name_taggedContext):
        pass

    # Exit a parse tree produced by YQLParser#type_name_tagged.
    def exitType_name_tagged(self, ctx:YQLParser.Type_name_taggedContext):
        pass


    # Enter a parse tree produced by YQLParser#type_name_callable.
    def enterType_name_callable(self, ctx:YQLParser.Type_name_callableContext):
        pass

    # Exit a parse tree produced by YQLParser#type_name_callable.
    def exitType_name_callable(self, ctx:YQLParser.Type_name_callableContext):
        pass


    # Enter a parse tree produced by YQLParser#type_name_composite.
    def enterType_name_composite(self, ctx:YQLParser.Type_name_compositeContext):
        pass

    # Exit a parse tree produced by YQLParser#type_name_composite.
    def exitType_name_composite(self, ctx:YQLParser.Type_name_compositeContext):
        pass


    # Enter a parse tree produced by YQLParser#type_name.
    def enterType_name(self, ctx:YQLParser.Type_nameContext):
        pass

    # Exit a parse tree produced by YQLParser#type_name.
    def exitType_name(self, ctx:YQLParser.Type_nameContext):
        pass


    # Enter a parse tree produced by YQLParser#type_name_or_bind.
    def enterType_name_or_bind(self, ctx:YQLParser.Type_name_or_bindContext):
        pass

    # Exit a parse tree produced by YQLParser#type_name_or_bind.
    def exitType_name_or_bind(self, ctx:YQLParser.Type_name_or_bindContext):
        pass


    # Enter a parse tree produced by YQLParser#value_constructor_literal.
    def enterValue_constructor_literal(self, ctx:YQLParser.Value_constructor_literalContext):
        pass

    # Exit a parse tree produced by YQLParser#value_constructor_literal.
    def exitValue_constructor_literal(self, ctx:YQLParser.Value_constructor_literalContext):
        pass


    # Enter a parse tree produced by YQLParser#value_constructor.
    def enterValue_constructor(self, ctx:YQLParser.Value_constructorContext):
        pass

    # Exit a parse tree produced by YQLParser#value_constructor.
    def exitValue_constructor(self, ctx:YQLParser.Value_constructorContext):
        pass


    # Enter a parse tree produced by YQLParser#declare_stmt.
    def enterDeclare_stmt(self, ctx:YQLParser.Declare_stmtContext):
        pass

    # Exit a parse tree produced by YQLParser#declare_stmt.
    def exitDeclare_stmt(self, ctx:YQLParser.Declare_stmtContext):
        pass


    # Enter a parse tree produced by YQLParser#module_path.
    def enterModule_path(self, ctx:YQLParser.Module_pathContext):
        pass

    # Exit a parse tree produced by YQLParser#module_path.
    def exitModule_path(self, ctx:YQLParser.Module_pathContext):
        pass


    # Enter a parse tree produced by YQLParser#import_stmt.
    def enterImport_stmt(self, ctx:YQLParser.Import_stmtContext):
        pass

    # Exit a parse tree produced by YQLParser#import_stmt.
    def exitImport_stmt(self, ctx:YQLParser.Import_stmtContext):
        pass


    # Enter a parse tree produced by YQLParser#export_stmt.
    def enterExport_stmt(self, ctx:YQLParser.Export_stmtContext):
        pass

    # Exit a parse tree produced by YQLParser#export_stmt.
    def exitExport_stmt(self, ctx:YQLParser.Export_stmtContext):
        pass


    # Enter a parse tree produced by YQLParser#call_action.
    def enterCall_action(self, ctx:YQLParser.Call_actionContext):
        pass

    # Exit a parse tree produced by YQLParser#call_action.
    def exitCall_action(self, ctx:YQLParser.Call_actionContext):
        pass


    # Enter a parse tree produced by YQLParser#inline_action.
    def enterInline_action(self, ctx:YQLParser.Inline_actionContext):
        pass

    # Exit a parse tree produced by YQLParser#inline_action.
    def exitInline_action(self, ctx:YQLParser.Inline_actionContext):
        pass


    # Enter a parse tree produced by YQLParser#do_stmt.
    def enterDo_stmt(self, ctx:YQLParser.Do_stmtContext):
        pass

    # Exit a parse tree produced by YQLParser#do_stmt.
    def exitDo_stmt(self, ctx:YQLParser.Do_stmtContext):
        pass


    # Enter a parse tree produced by YQLParser#pragma_stmt.
    def enterPragma_stmt(self, ctx:YQLParser.Pragma_stmtContext):
        pass

    # Exit a parse tree produced by YQLParser#pragma_stmt.
    def exitPragma_stmt(self, ctx:YQLParser.Pragma_stmtContext):
        pass


    # Enter a parse tree produced by YQLParser#pragma_value.
    def enterPragma_value(self, ctx:YQLParser.Pragma_valueContext):
        pass

    # Exit a parse tree produced by YQLParser#pragma_value.
    def exitPragma_value(self, ctx:YQLParser.Pragma_valueContext):
        pass


    # Enter a parse tree produced by YQLParser#sort_specification.
    def enterSort_specification(self, ctx:YQLParser.Sort_specificationContext):
        pass

    # Exit a parse tree produced by YQLParser#sort_specification.
    def exitSort_specification(self, ctx:YQLParser.Sort_specificationContext):
        pass


    # Enter a parse tree produced by YQLParser#sort_specification_list.
    def enterSort_specification_list(self, ctx:YQLParser.Sort_specification_listContext):
        pass

    # Exit a parse tree produced by YQLParser#sort_specification_list.
    def exitSort_specification_list(self, ctx:YQLParser.Sort_specification_listContext):
        pass


    # Enter a parse tree produced by YQLParser#select_stmt.
    def enterSelect_stmt(self, ctx:YQLParser.Select_stmtContext):
        pass

    # Exit a parse tree produced by YQLParser#select_stmt.
    def exitSelect_stmt(self, ctx:YQLParser.Select_stmtContext):
        pass


    # Enter a parse tree produced by YQLParser#select_unparenthesized_stmt.
    def enterSelect_unparenthesized_stmt(self, ctx:YQLParser.Select_unparenthesized_stmtContext):
        pass

    # Exit a parse tree produced by YQLParser#select_unparenthesized_stmt.
    def exitSelect_unparenthesized_stmt(self, ctx:YQLParser.Select_unparenthesized_stmtContext):
        pass


    # Enter a parse tree produced by YQLParser#select_kind_parenthesis.
    def enterSelect_kind_parenthesis(self, ctx:YQLParser.Select_kind_parenthesisContext):
        pass

    # Exit a parse tree produced by YQLParser#select_kind_parenthesis.
    def exitSelect_kind_parenthesis(self, ctx:YQLParser.Select_kind_parenthesisContext):
        pass


    # Enter a parse tree produced by YQLParser#select_op.
    def enterSelect_op(self, ctx:YQLParser.Select_opContext):
        pass

    # Exit a parse tree produced by YQLParser#select_op.
    def exitSelect_op(self, ctx:YQLParser.Select_opContext):
        pass


    # Enter a parse tree produced by YQLParser#select_kind_partial.
    def enterSelect_kind_partial(self, ctx:YQLParser.Select_kind_partialContext):
        pass

    # Exit a parse tree produced by YQLParser#select_kind_partial.
    def exitSelect_kind_partial(self, ctx:YQLParser.Select_kind_partialContext):
        pass


    # Enter a parse tree produced by YQLParser#select_kind.
    def enterSelect_kind(self, ctx:YQLParser.Select_kindContext):
        pass

    # Exit a parse tree produced by YQLParser#select_kind.
    def exitSelect_kind(self, ctx:YQLParser.Select_kindContext):
        pass


    # Enter a parse tree produced by YQLParser#process_core.
    def enterProcess_core(self, ctx:YQLParser.Process_coreContext):
        pass

    # Exit a parse tree produced by YQLParser#process_core.
    def exitProcess_core(self, ctx:YQLParser.Process_coreContext):
        pass


    # Enter a parse tree produced by YQLParser#external_call_param.
    def enterExternal_call_param(self, ctx:YQLParser.External_call_paramContext):
        pass

    # Exit a parse tree produced by YQLParser#external_call_param.
    def exitExternal_call_param(self, ctx:YQLParser.External_call_paramContext):
        pass


    # Enter a parse tree produced by YQLParser#external_call_settings.
    def enterExternal_call_settings(self, ctx:YQLParser.External_call_settingsContext):
        pass

    # Exit a parse tree produced by YQLParser#external_call_settings.
    def exitExternal_call_settings(self, ctx:YQLParser.External_call_settingsContext):
        pass


    # Enter a parse tree produced by YQLParser#reduce_core.
    def enterReduce_core(self, ctx:YQLParser.Reduce_coreContext):
        pass

    # Exit a parse tree produced by YQLParser#reduce_core.
    def exitReduce_core(self, ctx:YQLParser.Reduce_coreContext):
        pass


    # Enter a parse tree produced by YQLParser#opt_set_quantifier.
    def enterOpt_set_quantifier(self, ctx:YQLParser.Opt_set_quantifierContext):
        pass

    # Exit a parse tree produced by YQLParser#opt_set_quantifier.
    def exitOpt_set_quantifier(self, ctx:YQLParser.Opt_set_quantifierContext):
        pass


    # Enter a parse tree produced by YQLParser#select_core.
    def enterSelect_core(self, ctx:YQLParser.Select_coreContext):
        pass

    # Exit a parse tree produced by YQLParser#select_core.
    def exitSelect_core(self, ctx:YQLParser.Select_coreContext):
        pass


    # Enter a parse tree produced by YQLParser#row_pattern_recognition_clause.
    def enterRow_pattern_recognition_clause(self, ctx:YQLParser.Row_pattern_recognition_clauseContext):
        pass

    # Exit a parse tree produced by YQLParser#row_pattern_recognition_clause.
    def exitRow_pattern_recognition_clause(self, ctx:YQLParser.Row_pattern_recognition_clauseContext):
        pass


    # Enter a parse tree produced by YQLParser#row_pattern_rows_per_match.
    def enterRow_pattern_rows_per_match(self, ctx:YQLParser.Row_pattern_rows_per_matchContext):
        pass

    # Exit a parse tree produced by YQLParser#row_pattern_rows_per_match.
    def exitRow_pattern_rows_per_match(self, ctx:YQLParser.Row_pattern_rows_per_matchContext):
        pass


    # Enter a parse tree produced by YQLParser#row_pattern_empty_match_handling.
    def enterRow_pattern_empty_match_handling(self, ctx:YQLParser.Row_pattern_empty_match_handlingContext):
        pass

    # Exit a parse tree produced by YQLParser#row_pattern_empty_match_handling.
    def exitRow_pattern_empty_match_handling(self, ctx:YQLParser.Row_pattern_empty_match_handlingContext):
        pass


    # Enter a parse tree produced by YQLParser#row_pattern_measures.
    def enterRow_pattern_measures(self, ctx:YQLParser.Row_pattern_measuresContext):
        pass

    # Exit a parse tree produced by YQLParser#row_pattern_measures.
    def exitRow_pattern_measures(self, ctx:YQLParser.Row_pattern_measuresContext):
        pass


    # Enter a parse tree produced by YQLParser#row_pattern_measure_list.
    def enterRow_pattern_measure_list(self, ctx:YQLParser.Row_pattern_measure_listContext):
        pass

    # Exit a parse tree produced by YQLParser#row_pattern_measure_list.
    def exitRow_pattern_measure_list(self, ctx:YQLParser.Row_pattern_measure_listContext):
        pass


    # Enter a parse tree produced by YQLParser#row_pattern_measure_definition.
    def enterRow_pattern_measure_definition(self, ctx:YQLParser.Row_pattern_measure_definitionContext):
        pass

    # Exit a parse tree produced by YQLParser#row_pattern_measure_definition.
    def exitRow_pattern_measure_definition(self, ctx:YQLParser.Row_pattern_measure_definitionContext):
        pass


    # Enter a parse tree produced by YQLParser#row_pattern_common_syntax.
    def enterRow_pattern_common_syntax(self, ctx:YQLParser.Row_pattern_common_syntaxContext):
        pass

    # Exit a parse tree produced by YQLParser#row_pattern_common_syntax.
    def exitRow_pattern_common_syntax(self, ctx:YQLParser.Row_pattern_common_syntaxContext):
        pass


    # Enter a parse tree produced by YQLParser#row_pattern_skip_to.
    def enterRow_pattern_skip_to(self, ctx:YQLParser.Row_pattern_skip_toContext):
        pass

    # Exit a parse tree produced by YQLParser#row_pattern_skip_to.
    def exitRow_pattern_skip_to(self, ctx:YQLParser.Row_pattern_skip_toContext):
        pass


    # Enter a parse tree produced by YQLParser#row_pattern_skip_to_variable_name.
    def enterRow_pattern_skip_to_variable_name(self, ctx:YQLParser.Row_pattern_skip_to_variable_nameContext):
        pass

    # Exit a parse tree produced by YQLParser#row_pattern_skip_to_variable_name.
    def exitRow_pattern_skip_to_variable_name(self, ctx:YQLParser.Row_pattern_skip_to_variable_nameContext):
        pass


    # Enter a parse tree produced by YQLParser#row_pattern_initial_or_seek.
    def enterRow_pattern_initial_or_seek(self, ctx:YQLParser.Row_pattern_initial_or_seekContext):
        pass

    # Exit a parse tree produced by YQLParser#row_pattern_initial_or_seek.
    def exitRow_pattern_initial_or_seek(self, ctx:YQLParser.Row_pattern_initial_or_seekContext):
        pass


    # Enter a parse tree produced by YQLParser#row_pattern.
    def enterRow_pattern(self, ctx:YQLParser.Row_patternContext):
        pass

    # Exit a parse tree produced by YQLParser#row_pattern.
    def exitRow_pattern(self, ctx:YQLParser.Row_patternContext):
        pass


    # Enter a parse tree produced by YQLParser#row_pattern_term.
    def enterRow_pattern_term(self, ctx:YQLParser.Row_pattern_termContext):
        pass

    # Exit a parse tree produced by YQLParser#row_pattern_term.
    def exitRow_pattern_term(self, ctx:YQLParser.Row_pattern_termContext):
        pass


    # Enter a parse tree produced by YQLParser#row_pattern_factor.
    def enterRow_pattern_factor(self, ctx:YQLParser.Row_pattern_factorContext):
        pass

    # Exit a parse tree produced by YQLParser#row_pattern_factor.
    def exitRow_pattern_factor(self, ctx:YQLParser.Row_pattern_factorContext):
        pass


    # Enter a parse tree produced by YQLParser#row_pattern_quantifier.
    def enterRow_pattern_quantifier(self, ctx:YQLParser.Row_pattern_quantifierContext):
        pass

    # Exit a parse tree produced by YQLParser#row_pattern_quantifier.
    def exitRow_pattern_quantifier(self, ctx:YQLParser.Row_pattern_quantifierContext):
        pass


    # Enter a parse tree produced by YQLParser#row_pattern_primary.
    def enterRow_pattern_primary(self, ctx:YQLParser.Row_pattern_primaryContext):
        pass

    # Exit a parse tree produced by YQLParser#row_pattern_primary.
    def exitRow_pattern_primary(self, ctx:YQLParser.Row_pattern_primaryContext):
        pass


    # Enter a parse tree produced by YQLParser#row_pattern_primary_variable_name.
    def enterRow_pattern_primary_variable_name(self, ctx:YQLParser.Row_pattern_primary_variable_nameContext):
        pass

    # Exit a parse tree produced by YQLParser#row_pattern_primary_variable_name.
    def exitRow_pattern_primary_variable_name(self, ctx:YQLParser.Row_pattern_primary_variable_nameContext):
        pass


    # Enter a parse tree produced by YQLParser#row_pattern_permute.
    def enterRow_pattern_permute(self, ctx:YQLParser.Row_pattern_permuteContext):
        pass

    # Exit a parse tree produced by YQLParser#row_pattern_permute.
    def exitRow_pattern_permute(self, ctx:YQLParser.Row_pattern_permuteContext):
        pass


    # Enter a parse tree produced by YQLParser#row_pattern_subset_clause.
    def enterRow_pattern_subset_clause(self, ctx:YQLParser.Row_pattern_subset_clauseContext):
        pass

    # Exit a parse tree produced by YQLParser#row_pattern_subset_clause.
    def exitRow_pattern_subset_clause(self, ctx:YQLParser.Row_pattern_subset_clauseContext):
        pass


    # Enter a parse tree produced by YQLParser#row_pattern_subset_list.
    def enterRow_pattern_subset_list(self, ctx:YQLParser.Row_pattern_subset_listContext):
        pass

    # Exit a parse tree produced by YQLParser#row_pattern_subset_list.
    def exitRow_pattern_subset_list(self, ctx:YQLParser.Row_pattern_subset_listContext):
        pass


    # Enter a parse tree produced by YQLParser#row_pattern_subset_item.
    def enterRow_pattern_subset_item(self, ctx:YQLParser.Row_pattern_subset_itemContext):
        pass

    # Exit a parse tree produced by YQLParser#row_pattern_subset_item.
    def exitRow_pattern_subset_item(self, ctx:YQLParser.Row_pattern_subset_itemContext):
        pass


    # Enter a parse tree produced by YQLParser#row_pattern_subset_item_variable_name.
    def enterRow_pattern_subset_item_variable_name(self, ctx:YQLParser.Row_pattern_subset_item_variable_nameContext):
        pass

    # Exit a parse tree produced by YQLParser#row_pattern_subset_item_variable_name.
    def exitRow_pattern_subset_item_variable_name(self, ctx:YQLParser.Row_pattern_subset_item_variable_nameContext):
        pass


    # Enter a parse tree produced by YQLParser#row_pattern_subset_rhs.
    def enterRow_pattern_subset_rhs(self, ctx:YQLParser.Row_pattern_subset_rhsContext):
        pass

    # Exit a parse tree produced by YQLParser#row_pattern_subset_rhs.
    def exitRow_pattern_subset_rhs(self, ctx:YQLParser.Row_pattern_subset_rhsContext):
        pass


    # Enter a parse tree produced by YQLParser#row_pattern_subset_rhs_variable_name.
    def enterRow_pattern_subset_rhs_variable_name(self, ctx:YQLParser.Row_pattern_subset_rhs_variable_nameContext):
        pass

    # Exit a parse tree produced by YQLParser#row_pattern_subset_rhs_variable_name.
    def exitRow_pattern_subset_rhs_variable_name(self, ctx:YQLParser.Row_pattern_subset_rhs_variable_nameContext):
        pass


    # Enter a parse tree produced by YQLParser#row_pattern_definition_list.
    def enterRow_pattern_definition_list(self, ctx:YQLParser.Row_pattern_definition_listContext):
        pass

    # Exit a parse tree produced by YQLParser#row_pattern_definition_list.
    def exitRow_pattern_definition_list(self, ctx:YQLParser.Row_pattern_definition_listContext):
        pass


    # Enter a parse tree produced by YQLParser#row_pattern_definition.
    def enterRow_pattern_definition(self, ctx:YQLParser.Row_pattern_definitionContext):
        pass

    # Exit a parse tree produced by YQLParser#row_pattern_definition.
    def exitRow_pattern_definition(self, ctx:YQLParser.Row_pattern_definitionContext):
        pass


    # Enter a parse tree produced by YQLParser#row_pattern_definition_variable_name.
    def enterRow_pattern_definition_variable_name(self, ctx:YQLParser.Row_pattern_definition_variable_nameContext):
        pass

    # Exit a parse tree produced by YQLParser#row_pattern_definition_variable_name.
    def exitRow_pattern_definition_variable_name(self, ctx:YQLParser.Row_pattern_definition_variable_nameContext):
        pass


    # Enter a parse tree produced by YQLParser#row_pattern_definition_search_condition.
    def enterRow_pattern_definition_search_condition(self, ctx:YQLParser.Row_pattern_definition_search_conditionContext):
        pass

    # Exit a parse tree produced by YQLParser#row_pattern_definition_search_condition.
    def exitRow_pattern_definition_search_condition(self, ctx:YQLParser.Row_pattern_definition_search_conditionContext):
        pass


    # Enter a parse tree produced by YQLParser#search_condition.
    def enterSearch_condition(self, ctx:YQLParser.Search_conditionContext):
        pass

    # Exit a parse tree produced by YQLParser#search_condition.
    def exitSearch_condition(self, ctx:YQLParser.Search_conditionContext):
        pass


    # Enter a parse tree produced by YQLParser#row_pattern_variable_name.
    def enterRow_pattern_variable_name(self, ctx:YQLParser.Row_pattern_variable_nameContext):
        pass

    # Exit a parse tree produced by YQLParser#row_pattern_variable_name.
    def exitRow_pattern_variable_name(self, ctx:YQLParser.Row_pattern_variable_nameContext):
        pass


    # Enter a parse tree produced by YQLParser#order_by_clause.
    def enterOrder_by_clause(self, ctx:YQLParser.Order_by_clauseContext):
        pass

    # Exit a parse tree produced by YQLParser#order_by_clause.
    def exitOrder_by_clause(self, ctx:YQLParser.Order_by_clauseContext):
        pass


    # Enter a parse tree produced by YQLParser#ext_order_by_clause.
    def enterExt_order_by_clause(self, ctx:YQLParser.Ext_order_by_clauseContext):
        pass

    # Exit a parse tree produced by YQLParser#ext_order_by_clause.
    def exitExt_order_by_clause(self, ctx:YQLParser.Ext_order_by_clauseContext):
        pass


    # Enter a parse tree produced by YQLParser#group_by_clause.
    def enterGroup_by_clause(self, ctx:YQLParser.Group_by_clauseContext):
        pass

    # Exit a parse tree produced by YQLParser#group_by_clause.
    def exitGroup_by_clause(self, ctx:YQLParser.Group_by_clauseContext):
        pass


    # Enter a parse tree produced by YQLParser#grouping_element_list.
    def enterGrouping_element_list(self, ctx:YQLParser.Grouping_element_listContext):
        pass

    # Exit a parse tree produced by YQLParser#grouping_element_list.
    def exitGrouping_element_list(self, ctx:YQLParser.Grouping_element_listContext):
        pass


    # Enter a parse tree produced by YQLParser#grouping_element.
    def enterGrouping_element(self, ctx:YQLParser.Grouping_elementContext):
        pass

    # Exit a parse tree produced by YQLParser#grouping_element.
    def exitGrouping_element(self, ctx:YQLParser.Grouping_elementContext):
        pass


    # Enter a parse tree produced by YQLParser#ordinary_grouping_set.
    def enterOrdinary_grouping_set(self, ctx:YQLParser.Ordinary_grouping_setContext):
        pass

    # Exit a parse tree produced by YQLParser#ordinary_grouping_set.
    def exitOrdinary_grouping_set(self, ctx:YQLParser.Ordinary_grouping_setContext):
        pass


    # Enter a parse tree produced by YQLParser#ordinary_grouping_set_list.
    def enterOrdinary_grouping_set_list(self, ctx:YQLParser.Ordinary_grouping_set_listContext):
        pass

    # Exit a parse tree produced by YQLParser#ordinary_grouping_set_list.
    def exitOrdinary_grouping_set_list(self, ctx:YQLParser.Ordinary_grouping_set_listContext):
        pass


    # Enter a parse tree produced by YQLParser#rollup_list.
    def enterRollup_list(self, ctx:YQLParser.Rollup_listContext):
        pass

    # Exit a parse tree produced by YQLParser#rollup_list.
    def exitRollup_list(self, ctx:YQLParser.Rollup_listContext):
        pass


    # Enter a parse tree produced by YQLParser#cube_list.
    def enterCube_list(self, ctx:YQLParser.Cube_listContext):
        pass

    # Exit a parse tree produced by YQLParser#cube_list.
    def exitCube_list(self, ctx:YQLParser.Cube_listContext):
        pass


    # Enter a parse tree produced by YQLParser#grouping_sets_specification.
    def enterGrouping_sets_specification(self, ctx:YQLParser.Grouping_sets_specificationContext):
        pass

    # Exit a parse tree produced by YQLParser#grouping_sets_specification.
    def exitGrouping_sets_specification(self, ctx:YQLParser.Grouping_sets_specificationContext):
        pass


    # Enter a parse tree produced by YQLParser#hopping_window_specification.
    def enterHopping_window_specification(self, ctx:YQLParser.Hopping_window_specificationContext):
        pass

    # Exit a parse tree produced by YQLParser#hopping_window_specification.
    def exitHopping_window_specification(self, ctx:YQLParser.Hopping_window_specificationContext):
        pass


    # Enter a parse tree produced by YQLParser#result_column.
    def enterResult_column(self, ctx:YQLParser.Result_columnContext):
        pass

    # Exit a parse tree produced by YQLParser#result_column.
    def exitResult_column(self, ctx:YQLParser.Result_columnContext):
        pass


    # Enter a parse tree produced by YQLParser#join_source.
    def enterJoin_source(self, ctx:YQLParser.Join_sourceContext):
        pass

    # Exit a parse tree produced by YQLParser#join_source.
    def exitJoin_source(self, ctx:YQLParser.Join_sourceContext):
        pass


    # Enter a parse tree produced by YQLParser#named_column.
    def enterNamed_column(self, ctx:YQLParser.Named_columnContext):
        pass

    # Exit a parse tree produced by YQLParser#named_column.
    def exitNamed_column(self, ctx:YQLParser.Named_columnContext):
        pass


    # Enter a parse tree produced by YQLParser#flatten_by_arg.
    def enterFlatten_by_arg(self, ctx:YQLParser.Flatten_by_argContext):
        pass

    # Exit a parse tree produced by YQLParser#flatten_by_arg.
    def exitFlatten_by_arg(self, ctx:YQLParser.Flatten_by_argContext):
        pass


    # Enter a parse tree produced by YQLParser#flatten_source.
    def enterFlatten_source(self, ctx:YQLParser.Flatten_sourceContext):
        pass

    # Exit a parse tree produced by YQLParser#flatten_source.
    def exitFlatten_source(self, ctx:YQLParser.Flatten_sourceContext):
        pass


    # Enter a parse tree produced by YQLParser#named_single_source.
    def enterNamed_single_source(self, ctx:YQLParser.Named_single_sourceContext):
        pass

    # Exit a parse tree produced by YQLParser#named_single_source.
    def exitNamed_single_source(self, ctx:YQLParser.Named_single_sourceContext):
        pass


    # Enter a parse tree produced by YQLParser#single_source.
    def enterSingle_source(self, ctx:YQLParser.Single_sourceContext):
        pass

    # Exit a parse tree produced by YQLParser#single_source.
    def exitSingle_source(self, ctx:YQLParser.Single_sourceContext):
        pass


    # Enter a parse tree produced by YQLParser#sample_clause.
    def enterSample_clause(self, ctx:YQLParser.Sample_clauseContext):
        pass

    # Exit a parse tree produced by YQLParser#sample_clause.
    def exitSample_clause(self, ctx:YQLParser.Sample_clauseContext):
        pass


    # Enter a parse tree produced by YQLParser#tablesample_clause.
    def enterTablesample_clause(self, ctx:YQLParser.Tablesample_clauseContext):
        pass

    # Exit a parse tree produced by YQLParser#tablesample_clause.
    def exitTablesample_clause(self, ctx:YQLParser.Tablesample_clauseContext):
        pass


    # Enter a parse tree produced by YQLParser#sampling_mode.
    def enterSampling_mode(self, ctx:YQLParser.Sampling_modeContext):
        pass

    # Exit a parse tree produced by YQLParser#sampling_mode.
    def exitSampling_mode(self, ctx:YQLParser.Sampling_modeContext):
        pass


    # Enter a parse tree produced by YQLParser#repeatable_clause.
    def enterRepeatable_clause(self, ctx:YQLParser.Repeatable_clauseContext):
        pass

    # Exit a parse tree produced by YQLParser#repeatable_clause.
    def exitRepeatable_clause(self, ctx:YQLParser.Repeatable_clauseContext):
        pass


    # Enter a parse tree produced by YQLParser#join_op.
    def enterJoin_op(self, ctx:YQLParser.Join_opContext):
        pass

    # Exit a parse tree produced by YQLParser#join_op.
    def exitJoin_op(self, ctx:YQLParser.Join_opContext):
        pass


    # Enter a parse tree produced by YQLParser#join_constraint.
    def enterJoin_constraint(self, ctx:YQLParser.Join_constraintContext):
        pass

    # Exit a parse tree produced by YQLParser#join_constraint.
    def exitJoin_constraint(self, ctx:YQLParser.Join_constraintContext):
        pass


    # Enter a parse tree produced by YQLParser#returning_columns_list.
    def enterReturning_columns_list(self, ctx:YQLParser.Returning_columns_listContext):
        pass

    # Exit a parse tree produced by YQLParser#returning_columns_list.
    def exitReturning_columns_list(self, ctx:YQLParser.Returning_columns_listContext):
        pass


    # Enter a parse tree produced by YQLParser#into_table_stmt.
    def enterInto_table_stmt(self, ctx:YQLParser.Into_table_stmtContext):
        pass

    # Exit a parse tree produced by YQLParser#into_table_stmt.
    def exitInto_table_stmt(self, ctx:YQLParser.Into_table_stmtContext):
        pass


    # Enter a parse tree produced by YQLParser#into_values_source.
    def enterInto_values_source(self, ctx:YQLParser.Into_values_sourceContext):
        pass

    # Exit a parse tree produced by YQLParser#into_values_source.
    def exitInto_values_source(self, ctx:YQLParser.Into_values_sourceContext):
        pass


    # Enter a parse tree produced by YQLParser#values_stmt.
    def enterValues_stmt(self, ctx:YQLParser.Values_stmtContext):
        pass

    # Exit a parse tree produced by YQLParser#values_stmt.
    def exitValues_stmt(self, ctx:YQLParser.Values_stmtContext):
        pass


    # Enter a parse tree produced by YQLParser#values_source.
    def enterValues_source(self, ctx:YQLParser.Values_sourceContext):
        pass

    # Exit a parse tree produced by YQLParser#values_source.
    def exitValues_source(self, ctx:YQLParser.Values_sourceContext):
        pass


    # Enter a parse tree produced by YQLParser#values_source_row_list.
    def enterValues_source_row_list(self, ctx:YQLParser.Values_source_row_listContext):
        pass

    # Exit a parse tree produced by YQLParser#values_source_row_list.
    def exitValues_source_row_list(self, ctx:YQLParser.Values_source_row_listContext):
        pass


    # Enter a parse tree produced by YQLParser#values_source_row.
    def enterValues_source_row(self, ctx:YQLParser.Values_source_rowContext):
        pass

    # Exit a parse tree produced by YQLParser#values_source_row.
    def exitValues_source_row(self, ctx:YQLParser.Values_source_rowContext):
        pass


    # Enter a parse tree produced by YQLParser#simple_values_source.
    def enterSimple_values_source(self, ctx:YQLParser.Simple_values_sourceContext):
        pass

    # Exit a parse tree produced by YQLParser#simple_values_source.
    def exitSimple_values_source(self, ctx:YQLParser.Simple_values_sourceContext):
        pass


    # Enter a parse tree produced by YQLParser#create_external_data_source_stmt.
    def enterCreate_external_data_source_stmt(self, ctx:YQLParser.Create_external_data_source_stmtContext):
        pass

    # Exit a parse tree produced by YQLParser#create_external_data_source_stmt.
    def exitCreate_external_data_source_stmt(self, ctx:YQLParser.Create_external_data_source_stmtContext):
        pass


    # Enter a parse tree produced by YQLParser#alter_external_data_source_stmt.
    def enterAlter_external_data_source_stmt(self, ctx:YQLParser.Alter_external_data_source_stmtContext):
        pass

    # Exit a parse tree produced by YQLParser#alter_external_data_source_stmt.
    def exitAlter_external_data_source_stmt(self, ctx:YQLParser.Alter_external_data_source_stmtContext):
        pass


    # Enter a parse tree produced by YQLParser#alter_external_data_source_action.
    def enterAlter_external_data_source_action(self, ctx:YQLParser.Alter_external_data_source_actionContext):
        pass

    # Exit a parse tree produced by YQLParser#alter_external_data_source_action.
    def exitAlter_external_data_source_action(self, ctx:YQLParser.Alter_external_data_source_actionContext):
        pass


    # Enter a parse tree produced by YQLParser#drop_external_data_source_stmt.
    def enterDrop_external_data_source_stmt(self, ctx:YQLParser.Drop_external_data_source_stmtContext):
        pass

    # Exit a parse tree produced by YQLParser#drop_external_data_source_stmt.
    def exitDrop_external_data_source_stmt(self, ctx:YQLParser.Drop_external_data_source_stmtContext):
        pass


    # Enter a parse tree produced by YQLParser#create_view_stmt.
    def enterCreate_view_stmt(self, ctx:YQLParser.Create_view_stmtContext):
        pass

    # Exit a parse tree produced by YQLParser#create_view_stmt.
    def exitCreate_view_stmt(self, ctx:YQLParser.Create_view_stmtContext):
        pass


    # Enter a parse tree produced by YQLParser#drop_view_stmt.
    def enterDrop_view_stmt(self, ctx:YQLParser.Drop_view_stmtContext):
        pass

    # Exit a parse tree produced by YQLParser#drop_view_stmt.
    def exitDrop_view_stmt(self, ctx:YQLParser.Drop_view_stmtContext):
        pass


    # Enter a parse tree produced by YQLParser#upsert_object_stmt.
    def enterUpsert_object_stmt(self, ctx:YQLParser.Upsert_object_stmtContext):
        pass

    # Exit a parse tree produced by YQLParser#upsert_object_stmt.
    def exitUpsert_object_stmt(self, ctx:YQLParser.Upsert_object_stmtContext):
        pass


    # Enter a parse tree produced by YQLParser#create_object_stmt.
    def enterCreate_object_stmt(self, ctx:YQLParser.Create_object_stmtContext):
        pass

    # Exit a parse tree produced by YQLParser#create_object_stmt.
    def exitCreate_object_stmt(self, ctx:YQLParser.Create_object_stmtContext):
        pass


    # Enter a parse tree produced by YQLParser#create_object_features.
    def enterCreate_object_features(self, ctx:YQLParser.Create_object_featuresContext):
        pass

    # Exit a parse tree produced by YQLParser#create_object_features.
    def exitCreate_object_features(self, ctx:YQLParser.Create_object_featuresContext):
        pass


    # Enter a parse tree produced by YQLParser#alter_object_stmt.
    def enterAlter_object_stmt(self, ctx:YQLParser.Alter_object_stmtContext):
        pass

    # Exit a parse tree produced by YQLParser#alter_object_stmt.
    def exitAlter_object_stmt(self, ctx:YQLParser.Alter_object_stmtContext):
        pass


    # Enter a parse tree produced by YQLParser#alter_object_features.
    def enterAlter_object_features(self, ctx:YQLParser.Alter_object_featuresContext):
        pass

    # Exit a parse tree produced by YQLParser#alter_object_features.
    def exitAlter_object_features(self, ctx:YQLParser.Alter_object_featuresContext):
        pass


    # Enter a parse tree produced by YQLParser#drop_object_stmt.
    def enterDrop_object_stmt(self, ctx:YQLParser.Drop_object_stmtContext):
        pass

    # Exit a parse tree produced by YQLParser#drop_object_stmt.
    def exitDrop_object_stmt(self, ctx:YQLParser.Drop_object_stmtContext):
        pass


    # Enter a parse tree produced by YQLParser#drop_object_features.
    def enterDrop_object_features(self, ctx:YQLParser.Drop_object_featuresContext):
        pass

    # Exit a parse tree produced by YQLParser#drop_object_features.
    def exitDrop_object_features(self, ctx:YQLParser.Drop_object_featuresContext):
        pass


    # Enter a parse tree produced by YQLParser#object_feature_value.
    def enterObject_feature_value(self, ctx:YQLParser.Object_feature_valueContext):
        pass

    # Exit a parse tree produced by YQLParser#object_feature_value.
    def exitObject_feature_value(self, ctx:YQLParser.Object_feature_valueContext):
        pass


    # Enter a parse tree produced by YQLParser#object_feature_kv.
    def enterObject_feature_kv(self, ctx:YQLParser.Object_feature_kvContext):
        pass

    # Exit a parse tree produced by YQLParser#object_feature_kv.
    def exitObject_feature_kv(self, ctx:YQLParser.Object_feature_kvContext):
        pass


    # Enter a parse tree produced by YQLParser#object_feature_flag.
    def enterObject_feature_flag(self, ctx:YQLParser.Object_feature_flagContext):
        pass

    # Exit a parse tree produced by YQLParser#object_feature_flag.
    def exitObject_feature_flag(self, ctx:YQLParser.Object_feature_flagContext):
        pass


    # Enter a parse tree produced by YQLParser#object_feature.
    def enterObject_feature(self, ctx:YQLParser.Object_featureContext):
        pass

    # Exit a parse tree produced by YQLParser#object_feature.
    def exitObject_feature(self, ctx:YQLParser.Object_featureContext):
        pass


    # Enter a parse tree produced by YQLParser#object_features.
    def enterObject_features(self, ctx:YQLParser.Object_featuresContext):
        pass

    # Exit a parse tree produced by YQLParser#object_features.
    def exitObject_features(self, ctx:YQLParser.Object_featuresContext):
        pass


    # Enter a parse tree produced by YQLParser#object_type_ref.
    def enterObject_type_ref(self, ctx:YQLParser.Object_type_refContext):
        pass

    # Exit a parse tree produced by YQLParser#object_type_ref.
    def exitObject_type_ref(self, ctx:YQLParser.Object_type_refContext):
        pass


    # Enter a parse tree produced by YQLParser#create_table_stmt.
    def enterCreate_table_stmt(self, ctx:YQLParser.Create_table_stmtContext):
        pass

    # Exit a parse tree produced by YQLParser#create_table_stmt.
    def exitCreate_table_stmt(self, ctx:YQLParser.Create_table_stmtContext):
        pass


    # Enter a parse tree produced by YQLParser#create_table_entry.
    def enterCreate_table_entry(self, ctx:YQLParser.Create_table_entryContext):
        pass

    # Exit a parse tree produced by YQLParser#create_table_entry.
    def exitCreate_table_entry(self, ctx:YQLParser.Create_table_entryContext):
        pass


    # Enter a parse tree produced by YQLParser#create_backup_collection_stmt.
    def enterCreate_backup_collection_stmt(self, ctx:YQLParser.Create_backup_collection_stmtContext):
        pass

    # Exit a parse tree produced by YQLParser#create_backup_collection_stmt.
    def exitCreate_backup_collection_stmt(self, ctx:YQLParser.Create_backup_collection_stmtContext):
        pass


    # Enter a parse tree produced by YQLParser#alter_backup_collection_stmt.
    def enterAlter_backup_collection_stmt(self, ctx:YQLParser.Alter_backup_collection_stmtContext):
        pass

    # Exit a parse tree produced by YQLParser#alter_backup_collection_stmt.
    def exitAlter_backup_collection_stmt(self, ctx:YQLParser.Alter_backup_collection_stmtContext):
        pass


    # Enter a parse tree produced by YQLParser#drop_backup_collection_stmt.
    def enterDrop_backup_collection_stmt(self, ctx:YQLParser.Drop_backup_collection_stmtContext):
        pass

    # Exit a parse tree produced by YQLParser#drop_backup_collection_stmt.
    def exitDrop_backup_collection_stmt(self, ctx:YQLParser.Drop_backup_collection_stmtContext):
        pass


    # Enter a parse tree produced by YQLParser#create_backup_collection_entries.
    def enterCreate_backup_collection_entries(self, ctx:YQLParser.Create_backup_collection_entriesContext):
        pass

    # Exit a parse tree produced by YQLParser#create_backup_collection_entries.
    def exitCreate_backup_collection_entries(self, ctx:YQLParser.Create_backup_collection_entriesContext):
        pass


    # Enter a parse tree produced by YQLParser#create_backup_collection_entries_many.
    def enterCreate_backup_collection_entries_many(self, ctx:YQLParser.Create_backup_collection_entries_manyContext):
        pass

    # Exit a parse tree produced by YQLParser#create_backup_collection_entries_many.
    def exitCreate_backup_collection_entries_many(self, ctx:YQLParser.Create_backup_collection_entries_manyContext):
        pass


    # Enter a parse tree produced by YQLParser#table_list.
    def enterTable_list(self, ctx:YQLParser.Table_listContext):
        pass

    # Exit a parse tree produced by YQLParser#table_list.
    def exitTable_list(self, ctx:YQLParser.Table_listContext):
        pass


    # Enter a parse tree produced by YQLParser#alter_backup_collection_actions.
    def enterAlter_backup_collection_actions(self, ctx:YQLParser.Alter_backup_collection_actionsContext):
        pass

    # Exit a parse tree produced by YQLParser#alter_backup_collection_actions.
    def exitAlter_backup_collection_actions(self, ctx:YQLParser.Alter_backup_collection_actionsContext):
        pass


    # Enter a parse tree produced by YQLParser#alter_backup_collection_action.
    def enterAlter_backup_collection_action(self, ctx:YQLParser.Alter_backup_collection_actionContext):
        pass

    # Exit a parse tree produced by YQLParser#alter_backup_collection_action.
    def exitAlter_backup_collection_action(self, ctx:YQLParser.Alter_backup_collection_actionContext):
        pass


    # Enter a parse tree produced by YQLParser#alter_backup_collection_entries.
    def enterAlter_backup_collection_entries(self, ctx:YQLParser.Alter_backup_collection_entriesContext):
        pass

    # Exit a parse tree produced by YQLParser#alter_backup_collection_entries.
    def exitAlter_backup_collection_entries(self, ctx:YQLParser.Alter_backup_collection_entriesContext):
        pass


    # Enter a parse tree produced by YQLParser#alter_backup_collection_entry.
    def enterAlter_backup_collection_entry(self, ctx:YQLParser.Alter_backup_collection_entryContext):
        pass

    # Exit a parse tree produced by YQLParser#alter_backup_collection_entry.
    def exitAlter_backup_collection_entry(self, ctx:YQLParser.Alter_backup_collection_entryContext):
        pass


    # Enter a parse tree produced by YQLParser#backup_collection.
    def enterBackup_collection(self, ctx:YQLParser.Backup_collectionContext):
        pass

    # Exit a parse tree produced by YQLParser#backup_collection.
    def exitBackup_collection(self, ctx:YQLParser.Backup_collectionContext):
        pass


    # Enter a parse tree produced by YQLParser#backup_collection_settings.
    def enterBackup_collection_settings(self, ctx:YQLParser.Backup_collection_settingsContext):
        pass

    # Exit a parse tree produced by YQLParser#backup_collection_settings.
    def exitBackup_collection_settings(self, ctx:YQLParser.Backup_collection_settingsContext):
        pass


    # Enter a parse tree produced by YQLParser#backup_collection_settings_entry.
    def enterBackup_collection_settings_entry(self, ctx:YQLParser.Backup_collection_settings_entryContext):
        pass

    # Exit a parse tree produced by YQLParser#backup_collection_settings_entry.
    def exitBackup_collection_settings_entry(self, ctx:YQLParser.Backup_collection_settings_entryContext):
        pass


    # Enter a parse tree produced by YQLParser#backup_stmt.
    def enterBackup_stmt(self, ctx:YQLParser.Backup_stmtContext):
        pass

    # Exit a parse tree produced by YQLParser#backup_stmt.
    def exitBackup_stmt(self, ctx:YQLParser.Backup_stmtContext):
        pass


    # Enter a parse tree produced by YQLParser#restore_stmt.
    def enterRestore_stmt(self, ctx:YQLParser.Restore_stmtContext):
        pass

    # Exit a parse tree produced by YQLParser#restore_stmt.
    def exitRestore_stmt(self, ctx:YQLParser.Restore_stmtContext):
        pass


    # Enter a parse tree produced by YQLParser#table_inherits.
    def enterTable_inherits(self, ctx:YQLParser.Table_inheritsContext):
        pass

    # Exit a parse tree produced by YQLParser#table_inherits.
    def exitTable_inherits(self, ctx:YQLParser.Table_inheritsContext):
        pass


    # Enter a parse tree produced by YQLParser#table_partition_by.
    def enterTable_partition_by(self, ctx:YQLParser.Table_partition_byContext):
        pass

    # Exit a parse tree produced by YQLParser#table_partition_by.
    def exitTable_partition_by(self, ctx:YQLParser.Table_partition_byContext):
        pass


    # Enter a parse tree produced by YQLParser#with_table_settings.
    def enterWith_table_settings(self, ctx:YQLParser.With_table_settingsContext):
        pass

    # Exit a parse tree produced by YQLParser#with_table_settings.
    def exitWith_table_settings(self, ctx:YQLParser.With_table_settingsContext):
        pass


    # Enter a parse tree produced by YQLParser#table_tablestore.
    def enterTable_tablestore(self, ctx:YQLParser.Table_tablestoreContext):
        pass

    # Exit a parse tree produced by YQLParser#table_tablestore.
    def exitTable_tablestore(self, ctx:YQLParser.Table_tablestoreContext):
        pass


    # Enter a parse tree produced by YQLParser#table_settings_entry.
    def enterTable_settings_entry(self, ctx:YQLParser.Table_settings_entryContext):
        pass

    # Exit a parse tree produced by YQLParser#table_settings_entry.
    def exitTable_settings_entry(self, ctx:YQLParser.Table_settings_entryContext):
        pass


    # Enter a parse tree produced by YQLParser#table_as_source.
    def enterTable_as_source(self, ctx:YQLParser.Table_as_sourceContext):
        pass

    # Exit a parse tree produced by YQLParser#table_as_source.
    def exitTable_as_source(self, ctx:YQLParser.Table_as_sourceContext):
        pass


    # Enter a parse tree produced by YQLParser#alter_table_stmt.
    def enterAlter_table_stmt(self, ctx:YQLParser.Alter_table_stmtContext):
        pass

    # Exit a parse tree produced by YQLParser#alter_table_stmt.
    def exitAlter_table_stmt(self, ctx:YQLParser.Alter_table_stmtContext):
        pass


    # Enter a parse tree produced by YQLParser#alter_table_action.
    def enterAlter_table_action(self, ctx:YQLParser.Alter_table_actionContext):
        pass

    # Exit a parse tree produced by YQLParser#alter_table_action.
    def exitAlter_table_action(self, ctx:YQLParser.Alter_table_actionContext):
        pass


    # Enter a parse tree produced by YQLParser#alter_external_table_stmt.
    def enterAlter_external_table_stmt(self, ctx:YQLParser.Alter_external_table_stmtContext):
        pass

    # Exit a parse tree produced by YQLParser#alter_external_table_stmt.
    def exitAlter_external_table_stmt(self, ctx:YQLParser.Alter_external_table_stmtContext):
        pass


    # Enter a parse tree produced by YQLParser#alter_external_table_action.
    def enterAlter_external_table_action(self, ctx:YQLParser.Alter_external_table_actionContext):
        pass

    # Exit a parse tree produced by YQLParser#alter_external_table_action.
    def exitAlter_external_table_action(self, ctx:YQLParser.Alter_external_table_actionContext):
        pass


    # Enter a parse tree produced by YQLParser#alter_table_store_stmt.
    def enterAlter_table_store_stmt(self, ctx:YQLParser.Alter_table_store_stmtContext):
        pass

    # Exit a parse tree produced by YQLParser#alter_table_store_stmt.
    def exitAlter_table_store_stmt(self, ctx:YQLParser.Alter_table_store_stmtContext):
        pass


    # Enter a parse tree produced by YQLParser#alter_table_store_action.
    def enterAlter_table_store_action(self, ctx:YQLParser.Alter_table_store_actionContext):
        pass

    # Exit a parse tree produced by YQLParser#alter_table_store_action.
    def exitAlter_table_store_action(self, ctx:YQLParser.Alter_table_store_actionContext):
        pass


    # Enter a parse tree produced by YQLParser#alter_table_add_column.
    def enterAlter_table_add_column(self, ctx:YQLParser.Alter_table_add_columnContext):
        pass

    # Exit a parse tree produced by YQLParser#alter_table_add_column.
    def exitAlter_table_add_column(self, ctx:YQLParser.Alter_table_add_columnContext):
        pass


    # Enter a parse tree produced by YQLParser#alter_table_drop_column.
    def enterAlter_table_drop_column(self, ctx:YQLParser.Alter_table_drop_columnContext):
        pass

    # Exit a parse tree produced by YQLParser#alter_table_drop_column.
    def exitAlter_table_drop_column(self, ctx:YQLParser.Alter_table_drop_columnContext):
        pass


    # Enter a parse tree produced by YQLParser#alter_table_alter_column.
    def enterAlter_table_alter_column(self, ctx:YQLParser.Alter_table_alter_columnContext):
        pass

    # Exit a parse tree produced by YQLParser#alter_table_alter_column.
    def exitAlter_table_alter_column(self, ctx:YQLParser.Alter_table_alter_columnContext):
        pass


    # Enter a parse tree produced by YQLParser#alter_table_alter_column_drop_not_null.
    def enterAlter_table_alter_column_drop_not_null(self, ctx:YQLParser.Alter_table_alter_column_drop_not_nullContext):
        pass

    # Exit a parse tree produced by YQLParser#alter_table_alter_column_drop_not_null.
    def exitAlter_table_alter_column_drop_not_null(self, ctx:YQLParser.Alter_table_alter_column_drop_not_nullContext):
        pass


    # Enter a parse tree produced by YQLParser#alter_table_add_column_family.
    def enterAlter_table_add_column_family(self, ctx:YQLParser.Alter_table_add_column_familyContext):
        pass

    # Exit a parse tree produced by YQLParser#alter_table_add_column_family.
    def exitAlter_table_add_column_family(self, ctx:YQLParser.Alter_table_add_column_familyContext):
        pass


    # Enter a parse tree produced by YQLParser#alter_table_alter_column_family.
    def enterAlter_table_alter_column_family(self, ctx:YQLParser.Alter_table_alter_column_familyContext):
        pass

    # Exit a parse tree produced by YQLParser#alter_table_alter_column_family.
    def exitAlter_table_alter_column_family(self, ctx:YQLParser.Alter_table_alter_column_familyContext):
        pass


    # Enter a parse tree produced by YQLParser#alter_table_set_table_setting_uncompat.
    def enterAlter_table_set_table_setting_uncompat(self, ctx:YQLParser.Alter_table_set_table_setting_uncompatContext):
        pass

    # Exit a parse tree produced by YQLParser#alter_table_set_table_setting_uncompat.
    def exitAlter_table_set_table_setting_uncompat(self, ctx:YQLParser.Alter_table_set_table_setting_uncompatContext):
        pass


    # Enter a parse tree produced by YQLParser#alter_table_set_table_setting_compat.
    def enterAlter_table_set_table_setting_compat(self, ctx:YQLParser.Alter_table_set_table_setting_compatContext):
        pass

    # Exit a parse tree produced by YQLParser#alter_table_set_table_setting_compat.
    def exitAlter_table_set_table_setting_compat(self, ctx:YQLParser.Alter_table_set_table_setting_compatContext):
        pass


    # Enter a parse tree produced by YQLParser#alter_table_reset_table_setting.
    def enterAlter_table_reset_table_setting(self, ctx:YQLParser.Alter_table_reset_table_settingContext):
        pass

    # Exit a parse tree produced by YQLParser#alter_table_reset_table_setting.
    def exitAlter_table_reset_table_setting(self, ctx:YQLParser.Alter_table_reset_table_settingContext):
        pass


    # Enter a parse tree produced by YQLParser#alter_table_add_index.
    def enterAlter_table_add_index(self, ctx:YQLParser.Alter_table_add_indexContext):
        pass

    # Exit a parse tree produced by YQLParser#alter_table_add_index.
    def exitAlter_table_add_index(self, ctx:YQLParser.Alter_table_add_indexContext):
        pass


    # Enter a parse tree produced by YQLParser#alter_table_drop_index.
    def enterAlter_table_drop_index(self, ctx:YQLParser.Alter_table_drop_indexContext):
        pass

    # Exit a parse tree produced by YQLParser#alter_table_drop_index.
    def exitAlter_table_drop_index(self, ctx:YQLParser.Alter_table_drop_indexContext):
        pass


    # Enter a parse tree produced by YQLParser#alter_table_rename_to.
    def enterAlter_table_rename_to(self, ctx:YQLParser.Alter_table_rename_toContext):
        pass

    # Exit a parse tree produced by YQLParser#alter_table_rename_to.
    def exitAlter_table_rename_to(self, ctx:YQLParser.Alter_table_rename_toContext):
        pass


    # Enter a parse tree produced by YQLParser#alter_table_rename_index_to.
    def enterAlter_table_rename_index_to(self, ctx:YQLParser.Alter_table_rename_index_toContext):
        pass

    # Exit a parse tree produced by YQLParser#alter_table_rename_index_to.
    def exitAlter_table_rename_index_to(self, ctx:YQLParser.Alter_table_rename_index_toContext):
        pass


    # Enter a parse tree produced by YQLParser#alter_table_add_changefeed.
    def enterAlter_table_add_changefeed(self, ctx:YQLParser.Alter_table_add_changefeedContext):
        pass

    # Exit a parse tree produced by YQLParser#alter_table_add_changefeed.
    def exitAlter_table_add_changefeed(self, ctx:YQLParser.Alter_table_add_changefeedContext):
        pass


    # Enter a parse tree produced by YQLParser#alter_table_alter_changefeed.
    def enterAlter_table_alter_changefeed(self, ctx:YQLParser.Alter_table_alter_changefeedContext):
        pass

    # Exit a parse tree produced by YQLParser#alter_table_alter_changefeed.
    def exitAlter_table_alter_changefeed(self, ctx:YQLParser.Alter_table_alter_changefeedContext):
        pass


    # Enter a parse tree produced by YQLParser#alter_table_drop_changefeed.
    def enterAlter_table_drop_changefeed(self, ctx:YQLParser.Alter_table_drop_changefeedContext):
        pass

    # Exit a parse tree produced by YQLParser#alter_table_drop_changefeed.
    def exitAlter_table_drop_changefeed(self, ctx:YQLParser.Alter_table_drop_changefeedContext):
        pass


    # Enter a parse tree produced by YQLParser#alter_table_alter_index.
    def enterAlter_table_alter_index(self, ctx:YQLParser.Alter_table_alter_indexContext):
        pass

    # Exit a parse tree produced by YQLParser#alter_table_alter_index.
    def exitAlter_table_alter_index(self, ctx:YQLParser.Alter_table_alter_indexContext):
        pass


    # Enter a parse tree produced by YQLParser#column_schema.
    def enterColumn_schema(self, ctx:YQLParser.Column_schemaContext):
        pass

    # Exit a parse tree produced by YQLParser#column_schema.
    def exitColumn_schema(self, ctx:YQLParser.Column_schemaContext):
        pass


    # Enter a parse tree produced by YQLParser#family_relation.
    def enterFamily_relation(self, ctx:YQLParser.Family_relationContext):
        pass

    # Exit a parse tree produced by YQLParser#family_relation.
    def exitFamily_relation(self, ctx:YQLParser.Family_relationContext):
        pass


    # Enter a parse tree produced by YQLParser#opt_column_constraints.
    def enterOpt_column_constraints(self, ctx:YQLParser.Opt_column_constraintsContext):
        pass

    # Exit a parse tree produced by YQLParser#opt_column_constraints.
    def exitOpt_column_constraints(self, ctx:YQLParser.Opt_column_constraintsContext):
        pass


    # Enter a parse tree produced by YQLParser#column_order_by_specification.
    def enterColumn_order_by_specification(self, ctx:YQLParser.Column_order_by_specificationContext):
        pass

    # Exit a parse tree produced by YQLParser#column_order_by_specification.
    def exitColumn_order_by_specification(self, ctx:YQLParser.Column_order_by_specificationContext):
        pass


    # Enter a parse tree produced by YQLParser#table_constraint.
    def enterTable_constraint(self, ctx:YQLParser.Table_constraintContext):
        pass

    # Exit a parse tree produced by YQLParser#table_constraint.
    def exitTable_constraint(self, ctx:YQLParser.Table_constraintContext):
        pass


    # Enter a parse tree produced by YQLParser#table_index.
    def enterTable_index(self, ctx:YQLParser.Table_indexContext):
        pass

    # Exit a parse tree produced by YQLParser#table_index.
    def exitTable_index(self, ctx:YQLParser.Table_indexContext):
        pass


    # Enter a parse tree produced by YQLParser#table_index_type.
    def enterTable_index_type(self, ctx:YQLParser.Table_index_typeContext):
        pass

    # Exit a parse tree produced by YQLParser#table_index_type.
    def exitTable_index_type(self, ctx:YQLParser.Table_index_typeContext):
        pass


    # Enter a parse tree produced by YQLParser#global_index.
    def enterGlobal_index(self, ctx:YQLParser.Global_indexContext):
        pass

    # Exit a parse tree produced by YQLParser#global_index.
    def exitGlobal_index(self, ctx:YQLParser.Global_indexContext):
        pass


    # Enter a parse tree produced by YQLParser#local_index.
    def enterLocal_index(self, ctx:YQLParser.Local_indexContext):
        pass

    # Exit a parse tree produced by YQLParser#local_index.
    def exitLocal_index(self, ctx:YQLParser.Local_indexContext):
        pass


    # Enter a parse tree produced by YQLParser#index_subtype.
    def enterIndex_subtype(self, ctx:YQLParser.Index_subtypeContext):
        pass

    # Exit a parse tree produced by YQLParser#index_subtype.
    def exitIndex_subtype(self, ctx:YQLParser.Index_subtypeContext):
        pass


    # Enter a parse tree produced by YQLParser#with_index_settings.
    def enterWith_index_settings(self, ctx:YQLParser.With_index_settingsContext):
        pass

    # Exit a parse tree produced by YQLParser#with_index_settings.
    def exitWith_index_settings(self, ctx:YQLParser.With_index_settingsContext):
        pass


    # Enter a parse tree produced by YQLParser#index_setting_entry.
    def enterIndex_setting_entry(self, ctx:YQLParser.Index_setting_entryContext):
        pass

    # Exit a parse tree produced by YQLParser#index_setting_entry.
    def exitIndex_setting_entry(self, ctx:YQLParser.Index_setting_entryContext):
        pass


    # Enter a parse tree produced by YQLParser#index_setting_value.
    def enterIndex_setting_value(self, ctx:YQLParser.Index_setting_valueContext):
        pass

    # Exit a parse tree produced by YQLParser#index_setting_value.
    def exitIndex_setting_value(self, ctx:YQLParser.Index_setting_valueContext):
        pass


    # Enter a parse tree produced by YQLParser#changefeed.
    def enterChangefeed(self, ctx:YQLParser.ChangefeedContext):
        pass

    # Exit a parse tree produced by YQLParser#changefeed.
    def exitChangefeed(self, ctx:YQLParser.ChangefeedContext):
        pass


    # Enter a parse tree produced by YQLParser#changefeed_settings.
    def enterChangefeed_settings(self, ctx:YQLParser.Changefeed_settingsContext):
        pass

    # Exit a parse tree produced by YQLParser#changefeed_settings.
    def exitChangefeed_settings(self, ctx:YQLParser.Changefeed_settingsContext):
        pass


    # Enter a parse tree produced by YQLParser#changefeed_settings_entry.
    def enterChangefeed_settings_entry(self, ctx:YQLParser.Changefeed_settings_entryContext):
        pass

    # Exit a parse tree produced by YQLParser#changefeed_settings_entry.
    def exitChangefeed_settings_entry(self, ctx:YQLParser.Changefeed_settings_entryContext):
        pass


    # Enter a parse tree produced by YQLParser#changefeed_setting_value.
    def enterChangefeed_setting_value(self, ctx:YQLParser.Changefeed_setting_valueContext):
        pass

    # Exit a parse tree produced by YQLParser#changefeed_setting_value.
    def exitChangefeed_setting_value(self, ctx:YQLParser.Changefeed_setting_valueContext):
        pass


    # Enter a parse tree produced by YQLParser#changefeed_alter_settings.
    def enterChangefeed_alter_settings(self, ctx:YQLParser.Changefeed_alter_settingsContext):
        pass

    # Exit a parse tree produced by YQLParser#changefeed_alter_settings.
    def exitChangefeed_alter_settings(self, ctx:YQLParser.Changefeed_alter_settingsContext):
        pass


    # Enter a parse tree produced by YQLParser#alter_table_setting_entry.
    def enterAlter_table_setting_entry(self, ctx:YQLParser.Alter_table_setting_entryContext):
        pass

    # Exit a parse tree produced by YQLParser#alter_table_setting_entry.
    def exitAlter_table_setting_entry(self, ctx:YQLParser.Alter_table_setting_entryContext):
        pass


    # Enter a parse tree produced by YQLParser#table_setting_value.
    def enterTable_setting_value(self, ctx:YQLParser.Table_setting_valueContext):
        pass

    # Exit a parse tree produced by YQLParser#table_setting_value.
    def exitTable_setting_value(self, ctx:YQLParser.Table_setting_valueContext):
        pass


    # Enter a parse tree produced by YQLParser#ttl_tier_list.
    def enterTtl_tier_list(self, ctx:YQLParser.Ttl_tier_listContext):
        pass

    # Exit a parse tree produced by YQLParser#ttl_tier_list.
    def exitTtl_tier_list(self, ctx:YQLParser.Ttl_tier_listContext):
        pass


    # Enter a parse tree produced by YQLParser#ttl_tier_action.
    def enterTtl_tier_action(self, ctx:YQLParser.Ttl_tier_actionContext):
        pass

    # Exit a parse tree produced by YQLParser#ttl_tier_action.
    def exitTtl_tier_action(self, ctx:YQLParser.Ttl_tier_actionContext):
        pass


    # Enter a parse tree produced by YQLParser#family_entry.
    def enterFamily_entry(self, ctx:YQLParser.Family_entryContext):
        pass

    # Exit a parse tree produced by YQLParser#family_entry.
    def exitFamily_entry(self, ctx:YQLParser.Family_entryContext):
        pass


    # Enter a parse tree produced by YQLParser#family_settings.
    def enterFamily_settings(self, ctx:YQLParser.Family_settingsContext):
        pass

    # Exit a parse tree produced by YQLParser#family_settings.
    def exitFamily_settings(self, ctx:YQLParser.Family_settingsContext):
        pass


    # Enter a parse tree produced by YQLParser#family_settings_entry.
    def enterFamily_settings_entry(self, ctx:YQLParser.Family_settings_entryContext):
        pass

    # Exit a parse tree produced by YQLParser#family_settings_entry.
    def exitFamily_settings_entry(self, ctx:YQLParser.Family_settings_entryContext):
        pass


    # Enter a parse tree produced by YQLParser#family_setting_value.
    def enterFamily_setting_value(self, ctx:YQLParser.Family_setting_valueContext):
        pass

    # Exit a parse tree produced by YQLParser#family_setting_value.
    def exitFamily_setting_value(self, ctx:YQLParser.Family_setting_valueContext):
        pass


    # Enter a parse tree produced by YQLParser#split_boundaries.
    def enterSplit_boundaries(self, ctx:YQLParser.Split_boundariesContext):
        pass

    # Exit a parse tree produced by YQLParser#split_boundaries.
    def exitSplit_boundaries(self, ctx:YQLParser.Split_boundariesContext):
        pass


    # Enter a parse tree produced by YQLParser#literal_value_list.
    def enterLiteral_value_list(self, ctx:YQLParser.Literal_value_listContext):
        pass

    # Exit a parse tree produced by YQLParser#literal_value_list.
    def exitLiteral_value_list(self, ctx:YQLParser.Literal_value_listContext):
        pass


    # Enter a parse tree produced by YQLParser#alter_table_alter_index_action.
    def enterAlter_table_alter_index_action(self, ctx:YQLParser.Alter_table_alter_index_actionContext):
        pass

    # Exit a parse tree produced by YQLParser#alter_table_alter_index_action.
    def exitAlter_table_alter_index_action(self, ctx:YQLParser.Alter_table_alter_index_actionContext):
        pass


    # Enter a parse tree produced by YQLParser#drop_table_stmt.
    def enterDrop_table_stmt(self, ctx:YQLParser.Drop_table_stmtContext):
        pass

    # Exit a parse tree produced by YQLParser#drop_table_stmt.
    def exitDrop_table_stmt(self, ctx:YQLParser.Drop_table_stmtContext):
        pass


    # Enter a parse tree produced by YQLParser#create_user_stmt.
    def enterCreate_user_stmt(self, ctx:YQLParser.Create_user_stmtContext):
        pass

    # Exit a parse tree produced by YQLParser#create_user_stmt.
    def exitCreate_user_stmt(self, ctx:YQLParser.Create_user_stmtContext):
        pass


    # Enter a parse tree produced by YQLParser#alter_user_stmt.
    def enterAlter_user_stmt(self, ctx:YQLParser.Alter_user_stmtContext):
        pass

    # Exit a parse tree produced by YQLParser#alter_user_stmt.
    def exitAlter_user_stmt(self, ctx:YQLParser.Alter_user_stmtContext):
        pass


    # Enter a parse tree produced by YQLParser#create_group_stmt.
    def enterCreate_group_stmt(self, ctx:YQLParser.Create_group_stmtContext):
        pass

    # Exit a parse tree produced by YQLParser#create_group_stmt.
    def exitCreate_group_stmt(self, ctx:YQLParser.Create_group_stmtContext):
        pass


    # Enter a parse tree produced by YQLParser#alter_group_stmt.
    def enterAlter_group_stmt(self, ctx:YQLParser.Alter_group_stmtContext):
        pass

    # Exit a parse tree produced by YQLParser#alter_group_stmt.
    def exitAlter_group_stmt(self, ctx:YQLParser.Alter_group_stmtContext):
        pass


    # Enter a parse tree produced by YQLParser#drop_role_stmt.
    def enterDrop_role_stmt(self, ctx:YQLParser.Drop_role_stmtContext):
        pass

    # Exit a parse tree produced by YQLParser#drop_role_stmt.
    def exitDrop_role_stmt(self, ctx:YQLParser.Drop_role_stmtContext):
        pass


    # Enter a parse tree produced by YQLParser#role_name.
    def enterRole_name(self, ctx:YQLParser.Role_nameContext):
        pass

    # Exit a parse tree produced by YQLParser#role_name.
    def exitRole_name(self, ctx:YQLParser.Role_nameContext):
        pass


    # Enter a parse tree produced by YQLParser#create_user_option.
    def enterCreate_user_option(self, ctx:YQLParser.Create_user_optionContext):
        pass

    # Exit a parse tree produced by YQLParser#create_user_option.
    def exitCreate_user_option(self, ctx:YQLParser.Create_user_optionContext):
        pass


    # Enter a parse tree produced by YQLParser#password_option.
    def enterPassword_option(self, ctx:YQLParser.Password_optionContext):
        pass

    # Exit a parse tree produced by YQLParser#password_option.
    def exitPassword_option(self, ctx:YQLParser.Password_optionContext):
        pass


    # Enter a parse tree produced by YQLParser#login_option.
    def enterLogin_option(self, ctx:YQLParser.Login_optionContext):
        pass

    # Exit a parse tree produced by YQLParser#login_option.
    def exitLogin_option(self, ctx:YQLParser.Login_optionContext):
        pass


    # Enter a parse tree produced by YQLParser#grant_permissions_stmt.
    def enterGrant_permissions_stmt(self, ctx:YQLParser.Grant_permissions_stmtContext):
        pass

    # Exit a parse tree produced by YQLParser#grant_permissions_stmt.
    def exitGrant_permissions_stmt(self, ctx:YQLParser.Grant_permissions_stmtContext):
        pass


    # Enter a parse tree produced by YQLParser#revoke_permissions_stmt.
    def enterRevoke_permissions_stmt(self, ctx:YQLParser.Revoke_permissions_stmtContext):
        pass

    # Exit a parse tree produced by YQLParser#revoke_permissions_stmt.
    def exitRevoke_permissions_stmt(self, ctx:YQLParser.Revoke_permissions_stmtContext):
        pass


    # Enter a parse tree produced by YQLParser#permission_id.
    def enterPermission_id(self, ctx:YQLParser.Permission_idContext):
        pass

    # Exit a parse tree produced by YQLParser#permission_id.
    def exitPermission_id(self, ctx:YQLParser.Permission_idContext):
        pass


    # Enter a parse tree produced by YQLParser#permission_name.
    def enterPermission_name(self, ctx:YQLParser.Permission_nameContext):
        pass

    # Exit a parse tree produced by YQLParser#permission_name.
    def exitPermission_name(self, ctx:YQLParser.Permission_nameContext):
        pass


    # Enter a parse tree produced by YQLParser#permission_name_target.
    def enterPermission_name_target(self, ctx:YQLParser.Permission_name_targetContext):
        pass

    # Exit a parse tree produced by YQLParser#permission_name_target.
    def exitPermission_name_target(self, ctx:YQLParser.Permission_name_targetContext):
        pass


    # Enter a parse tree produced by YQLParser#create_resource_pool_stmt.
    def enterCreate_resource_pool_stmt(self, ctx:YQLParser.Create_resource_pool_stmtContext):
        pass

    # Exit a parse tree produced by YQLParser#create_resource_pool_stmt.
    def exitCreate_resource_pool_stmt(self, ctx:YQLParser.Create_resource_pool_stmtContext):
        pass


    # Enter a parse tree produced by YQLParser#alter_resource_pool_stmt.
    def enterAlter_resource_pool_stmt(self, ctx:YQLParser.Alter_resource_pool_stmtContext):
        pass

    # Exit a parse tree produced by YQLParser#alter_resource_pool_stmt.
    def exitAlter_resource_pool_stmt(self, ctx:YQLParser.Alter_resource_pool_stmtContext):
        pass


    # Enter a parse tree produced by YQLParser#alter_resource_pool_action.
    def enterAlter_resource_pool_action(self, ctx:YQLParser.Alter_resource_pool_actionContext):
        pass

    # Exit a parse tree produced by YQLParser#alter_resource_pool_action.
    def exitAlter_resource_pool_action(self, ctx:YQLParser.Alter_resource_pool_actionContext):
        pass


    # Enter a parse tree produced by YQLParser#drop_resource_pool_stmt.
    def enterDrop_resource_pool_stmt(self, ctx:YQLParser.Drop_resource_pool_stmtContext):
        pass

    # Exit a parse tree produced by YQLParser#drop_resource_pool_stmt.
    def exitDrop_resource_pool_stmt(self, ctx:YQLParser.Drop_resource_pool_stmtContext):
        pass


    # Enter a parse tree produced by YQLParser#create_resource_pool_classifier_stmt.
    def enterCreate_resource_pool_classifier_stmt(self, ctx:YQLParser.Create_resource_pool_classifier_stmtContext):
        pass

    # Exit a parse tree produced by YQLParser#create_resource_pool_classifier_stmt.
    def exitCreate_resource_pool_classifier_stmt(self, ctx:YQLParser.Create_resource_pool_classifier_stmtContext):
        pass


    # Enter a parse tree produced by YQLParser#alter_resource_pool_classifier_stmt.
    def enterAlter_resource_pool_classifier_stmt(self, ctx:YQLParser.Alter_resource_pool_classifier_stmtContext):
        pass

    # Exit a parse tree produced by YQLParser#alter_resource_pool_classifier_stmt.
    def exitAlter_resource_pool_classifier_stmt(self, ctx:YQLParser.Alter_resource_pool_classifier_stmtContext):
        pass


    # Enter a parse tree produced by YQLParser#alter_resource_pool_classifier_action.
    def enterAlter_resource_pool_classifier_action(self, ctx:YQLParser.Alter_resource_pool_classifier_actionContext):
        pass

    # Exit a parse tree produced by YQLParser#alter_resource_pool_classifier_action.
    def exitAlter_resource_pool_classifier_action(self, ctx:YQLParser.Alter_resource_pool_classifier_actionContext):
        pass


    # Enter a parse tree produced by YQLParser#drop_resource_pool_classifier_stmt.
    def enterDrop_resource_pool_classifier_stmt(self, ctx:YQLParser.Drop_resource_pool_classifier_stmtContext):
        pass

    # Exit a parse tree produced by YQLParser#drop_resource_pool_classifier_stmt.
    def exitDrop_resource_pool_classifier_stmt(self, ctx:YQLParser.Drop_resource_pool_classifier_stmtContext):
        pass


    # Enter a parse tree produced by YQLParser#create_replication_stmt.
    def enterCreate_replication_stmt(self, ctx:YQLParser.Create_replication_stmtContext):
        pass

    # Exit a parse tree produced by YQLParser#create_replication_stmt.
    def exitCreate_replication_stmt(self, ctx:YQLParser.Create_replication_stmtContext):
        pass


    # Enter a parse tree produced by YQLParser#replication_target.
    def enterReplication_target(self, ctx:YQLParser.Replication_targetContext):
        pass

    # Exit a parse tree produced by YQLParser#replication_target.
    def exitReplication_target(self, ctx:YQLParser.Replication_targetContext):
        pass


    # Enter a parse tree produced by YQLParser#replication_settings.
    def enterReplication_settings(self, ctx:YQLParser.Replication_settingsContext):
        pass

    # Exit a parse tree produced by YQLParser#replication_settings.
    def exitReplication_settings(self, ctx:YQLParser.Replication_settingsContext):
        pass


    # Enter a parse tree produced by YQLParser#replication_settings_entry.
    def enterReplication_settings_entry(self, ctx:YQLParser.Replication_settings_entryContext):
        pass

    # Exit a parse tree produced by YQLParser#replication_settings_entry.
    def exitReplication_settings_entry(self, ctx:YQLParser.Replication_settings_entryContext):
        pass


    # Enter a parse tree produced by YQLParser#alter_replication_stmt.
    def enterAlter_replication_stmt(self, ctx:YQLParser.Alter_replication_stmtContext):
        pass

    # Exit a parse tree produced by YQLParser#alter_replication_stmt.
    def exitAlter_replication_stmt(self, ctx:YQLParser.Alter_replication_stmtContext):
        pass


    # Enter a parse tree produced by YQLParser#alter_replication_action.
    def enterAlter_replication_action(self, ctx:YQLParser.Alter_replication_actionContext):
        pass

    # Exit a parse tree produced by YQLParser#alter_replication_action.
    def exitAlter_replication_action(self, ctx:YQLParser.Alter_replication_actionContext):
        pass


    # Enter a parse tree produced by YQLParser#alter_replication_set_setting.
    def enterAlter_replication_set_setting(self, ctx:YQLParser.Alter_replication_set_settingContext):
        pass

    # Exit a parse tree produced by YQLParser#alter_replication_set_setting.
    def exitAlter_replication_set_setting(self, ctx:YQLParser.Alter_replication_set_settingContext):
        pass


    # Enter a parse tree produced by YQLParser#drop_replication_stmt.
    def enterDrop_replication_stmt(self, ctx:YQLParser.Drop_replication_stmtContext):
        pass

    # Exit a parse tree produced by YQLParser#drop_replication_stmt.
    def exitDrop_replication_stmt(self, ctx:YQLParser.Drop_replication_stmtContext):
        pass


    # Enter a parse tree produced by YQLParser#action_or_subquery_args.
    def enterAction_or_subquery_args(self, ctx:YQLParser.Action_or_subquery_argsContext):
        pass

    # Exit a parse tree produced by YQLParser#action_or_subquery_args.
    def exitAction_or_subquery_args(self, ctx:YQLParser.Action_or_subquery_argsContext):
        pass


    # Enter a parse tree produced by YQLParser#define_action_or_subquery_stmt.
    def enterDefine_action_or_subquery_stmt(self, ctx:YQLParser.Define_action_or_subquery_stmtContext):
        pass

    # Exit a parse tree produced by YQLParser#define_action_or_subquery_stmt.
    def exitDefine_action_or_subquery_stmt(self, ctx:YQLParser.Define_action_or_subquery_stmtContext):
        pass


    # Enter a parse tree produced by YQLParser#define_action_or_subquery_body.
    def enterDefine_action_or_subquery_body(self, ctx:YQLParser.Define_action_or_subquery_bodyContext):
        pass

    # Exit a parse tree produced by YQLParser#define_action_or_subquery_body.
    def exitDefine_action_or_subquery_body(self, ctx:YQLParser.Define_action_or_subquery_bodyContext):
        pass


    # Enter a parse tree produced by YQLParser#if_stmt.
    def enterIf_stmt(self, ctx:YQLParser.If_stmtContext):
        pass

    # Exit a parse tree produced by YQLParser#if_stmt.
    def exitIf_stmt(self, ctx:YQLParser.If_stmtContext):
        pass


    # Enter a parse tree produced by YQLParser#for_stmt.
    def enterFor_stmt(self, ctx:YQLParser.For_stmtContext):
        pass

    # Exit a parse tree produced by YQLParser#for_stmt.
    def exitFor_stmt(self, ctx:YQLParser.For_stmtContext):
        pass


    # Enter a parse tree produced by YQLParser#table_ref.
    def enterTable_ref(self, ctx:YQLParser.Table_refContext):
        pass

    # Exit a parse tree produced by YQLParser#table_ref.
    def exitTable_ref(self, ctx:YQLParser.Table_refContext):
        pass


    # Enter a parse tree produced by YQLParser#table_key.
    def enterTable_key(self, ctx:YQLParser.Table_keyContext):
        pass

    # Exit a parse tree produced by YQLParser#table_key.
    def exitTable_key(self, ctx:YQLParser.Table_keyContext):
        pass


    # Enter a parse tree produced by YQLParser#table_arg.
    def enterTable_arg(self, ctx:YQLParser.Table_argContext):
        pass

    # Exit a parse tree produced by YQLParser#table_arg.
    def exitTable_arg(self, ctx:YQLParser.Table_argContext):
        pass


    # Enter a parse tree produced by YQLParser#table_hints.
    def enterTable_hints(self, ctx:YQLParser.Table_hintsContext):
        pass

    # Exit a parse tree produced by YQLParser#table_hints.
    def exitTable_hints(self, ctx:YQLParser.Table_hintsContext):
        pass


    # Enter a parse tree produced by YQLParser#table_hint.
    def enterTable_hint(self, ctx:YQLParser.Table_hintContext):
        pass

    # Exit a parse tree produced by YQLParser#table_hint.
    def exitTable_hint(self, ctx:YQLParser.Table_hintContext):
        pass


    # Enter a parse tree produced by YQLParser#object_ref.
    def enterObject_ref(self, ctx:YQLParser.Object_refContext):
        pass

    # Exit a parse tree produced by YQLParser#object_ref.
    def exitObject_ref(self, ctx:YQLParser.Object_refContext):
        pass


    # Enter a parse tree produced by YQLParser#simple_table_ref_core.
    def enterSimple_table_ref_core(self, ctx:YQLParser.Simple_table_ref_coreContext):
        pass

    # Exit a parse tree produced by YQLParser#simple_table_ref_core.
    def exitSimple_table_ref_core(self, ctx:YQLParser.Simple_table_ref_coreContext):
        pass


    # Enter a parse tree produced by YQLParser#simple_table_ref.
    def enterSimple_table_ref(self, ctx:YQLParser.Simple_table_refContext):
        pass

    # Exit a parse tree produced by YQLParser#simple_table_ref.
    def exitSimple_table_ref(self, ctx:YQLParser.Simple_table_refContext):
        pass


    # Enter a parse tree produced by YQLParser#into_simple_table_ref.
    def enterInto_simple_table_ref(self, ctx:YQLParser.Into_simple_table_refContext):
        pass

    # Exit a parse tree produced by YQLParser#into_simple_table_ref.
    def exitInto_simple_table_ref(self, ctx:YQLParser.Into_simple_table_refContext):
        pass


    # Enter a parse tree produced by YQLParser#delete_stmt.
    def enterDelete_stmt(self, ctx:YQLParser.Delete_stmtContext):
        pass

    # Exit a parse tree produced by YQLParser#delete_stmt.
    def exitDelete_stmt(self, ctx:YQLParser.Delete_stmtContext):
        pass


    # Enter a parse tree produced by YQLParser#update_stmt.
    def enterUpdate_stmt(self, ctx:YQLParser.Update_stmtContext):
        pass

    # Exit a parse tree produced by YQLParser#update_stmt.
    def exitUpdate_stmt(self, ctx:YQLParser.Update_stmtContext):
        pass


    # Enter a parse tree produced by YQLParser#set_clause_choice.
    def enterSet_clause_choice(self, ctx:YQLParser.Set_clause_choiceContext):
        pass

    # Exit a parse tree produced by YQLParser#set_clause_choice.
    def exitSet_clause_choice(self, ctx:YQLParser.Set_clause_choiceContext):
        pass


    # Enter a parse tree produced by YQLParser#set_clause_list.
    def enterSet_clause_list(self, ctx:YQLParser.Set_clause_listContext):
        pass

    # Exit a parse tree produced by YQLParser#set_clause_list.
    def exitSet_clause_list(self, ctx:YQLParser.Set_clause_listContext):
        pass


    # Enter a parse tree produced by YQLParser#set_clause.
    def enterSet_clause(self, ctx:YQLParser.Set_clauseContext):
        pass

    # Exit a parse tree produced by YQLParser#set_clause.
    def exitSet_clause(self, ctx:YQLParser.Set_clauseContext):
        pass


    # Enter a parse tree produced by YQLParser#set_target.
    def enterSet_target(self, ctx:YQLParser.Set_targetContext):
        pass

    # Exit a parse tree produced by YQLParser#set_target.
    def exitSet_target(self, ctx:YQLParser.Set_targetContext):
        pass


    # Enter a parse tree produced by YQLParser#multiple_column_assignment.
    def enterMultiple_column_assignment(self, ctx:YQLParser.Multiple_column_assignmentContext):
        pass

    # Exit a parse tree produced by YQLParser#multiple_column_assignment.
    def exitMultiple_column_assignment(self, ctx:YQLParser.Multiple_column_assignmentContext):
        pass


    # Enter a parse tree produced by YQLParser#set_target_list.
    def enterSet_target_list(self, ctx:YQLParser.Set_target_listContext):
        pass

    # Exit a parse tree produced by YQLParser#set_target_list.
    def exitSet_target_list(self, ctx:YQLParser.Set_target_listContext):
        pass


    # Enter a parse tree produced by YQLParser#create_topic_stmt.
    def enterCreate_topic_stmt(self, ctx:YQLParser.Create_topic_stmtContext):
        pass

    # Exit a parse tree produced by YQLParser#create_topic_stmt.
    def exitCreate_topic_stmt(self, ctx:YQLParser.Create_topic_stmtContext):
        pass


    # Enter a parse tree produced by YQLParser#create_topic_entries.
    def enterCreate_topic_entries(self, ctx:YQLParser.Create_topic_entriesContext):
        pass

    # Exit a parse tree produced by YQLParser#create_topic_entries.
    def exitCreate_topic_entries(self, ctx:YQLParser.Create_topic_entriesContext):
        pass


    # Enter a parse tree produced by YQLParser#create_topic_entry.
    def enterCreate_topic_entry(self, ctx:YQLParser.Create_topic_entryContext):
        pass

    # Exit a parse tree produced by YQLParser#create_topic_entry.
    def exitCreate_topic_entry(self, ctx:YQLParser.Create_topic_entryContext):
        pass


    # Enter a parse tree produced by YQLParser#with_topic_settings.
    def enterWith_topic_settings(self, ctx:YQLParser.With_topic_settingsContext):
        pass

    # Exit a parse tree produced by YQLParser#with_topic_settings.
    def exitWith_topic_settings(self, ctx:YQLParser.With_topic_settingsContext):
        pass


    # Enter a parse tree produced by YQLParser#alter_topic_stmt.
    def enterAlter_topic_stmt(self, ctx:YQLParser.Alter_topic_stmtContext):
        pass

    # Exit a parse tree produced by YQLParser#alter_topic_stmt.
    def exitAlter_topic_stmt(self, ctx:YQLParser.Alter_topic_stmtContext):
        pass


    # Enter a parse tree produced by YQLParser#alter_topic_action.
    def enterAlter_topic_action(self, ctx:YQLParser.Alter_topic_actionContext):
        pass

    # Exit a parse tree produced by YQLParser#alter_topic_action.
    def exitAlter_topic_action(self, ctx:YQLParser.Alter_topic_actionContext):
        pass


    # Enter a parse tree produced by YQLParser#alter_topic_add_consumer.
    def enterAlter_topic_add_consumer(self, ctx:YQLParser.Alter_topic_add_consumerContext):
        pass

    # Exit a parse tree produced by YQLParser#alter_topic_add_consumer.
    def exitAlter_topic_add_consumer(self, ctx:YQLParser.Alter_topic_add_consumerContext):
        pass


    # Enter a parse tree produced by YQLParser#topic_create_consumer_entry.
    def enterTopic_create_consumer_entry(self, ctx:YQLParser.Topic_create_consumer_entryContext):
        pass

    # Exit a parse tree produced by YQLParser#topic_create_consumer_entry.
    def exitTopic_create_consumer_entry(self, ctx:YQLParser.Topic_create_consumer_entryContext):
        pass


    # Enter a parse tree produced by YQLParser#alter_topic_alter_consumer.
    def enterAlter_topic_alter_consumer(self, ctx:YQLParser.Alter_topic_alter_consumerContext):
        pass

    # Exit a parse tree produced by YQLParser#alter_topic_alter_consumer.
    def exitAlter_topic_alter_consumer(self, ctx:YQLParser.Alter_topic_alter_consumerContext):
        pass


    # Enter a parse tree produced by YQLParser#alter_topic_alter_consumer_entry.
    def enterAlter_topic_alter_consumer_entry(self, ctx:YQLParser.Alter_topic_alter_consumer_entryContext):
        pass

    # Exit a parse tree produced by YQLParser#alter_topic_alter_consumer_entry.
    def exitAlter_topic_alter_consumer_entry(self, ctx:YQLParser.Alter_topic_alter_consumer_entryContext):
        pass


    # Enter a parse tree produced by YQLParser#alter_topic_drop_consumer.
    def enterAlter_topic_drop_consumer(self, ctx:YQLParser.Alter_topic_drop_consumerContext):
        pass

    # Exit a parse tree produced by YQLParser#alter_topic_drop_consumer.
    def exitAlter_topic_drop_consumer(self, ctx:YQLParser.Alter_topic_drop_consumerContext):
        pass


    # Enter a parse tree produced by YQLParser#topic_alter_consumer_set.
    def enterTopic_alter_consumer_set(self, ctx:YQLParser.Topic_alter_consumer_setContext):
        pass

    # Exit a parse tree produced by YQLParser#topic_alter_consumer_set.
    def exitTopic_alter_consumer_set(self, ctx:YQLParser.Topic_alter_consumer_setContext):
        pass


    # Enter a parse tree produced by YQLParser#topic_alter_consumer_reset.
    def enterTopic_alter_consumer_reset(self, ctx:YQLParser.Topic_alter_consumer_resetContext):
        pass

    # Exit a parse tree produced by YQLParser#topic_alter_consumer_reset.
    def exitTopic_alter_consumer_reset(self, ctx:YQLParser.Topic_alter_consumer_resetContext):
        pass


    # Enter a parse tree produced by YQLParser#alter_topic_set_settings.
    def enterAlter_topic_set_settings(self, ctx:YQLParser.Alter_topic_set_settingsContext):
        pass

    # Exit a parse tree produced by YQLParser#alter_topic_set_settings.
    def exitAlter_topic_set_settings(self, ctx:YQLParser.Alter_topic_set_settingsContext):
        pass


    # Enter a parse tree produced by YQLParser#alter_topic_reset_settings.
    def enterAlter_topic_reset_settings(self, ctx:YQLParser.Alter_topic_reset_settingsContext):
        pass

    # Exit a parse tree produced by YQLParser#alter_topic_reset_settings.
    def exitAlter_topic_reset_settings(self, ctx:YQLParser.Alter_topic_reset_settingsContext):
        pass


    # Enter a parse tree produced by YQLParser#drop_topic_stmt.
    def enterDrop_topic_stmt(self, ctx:YQLParser.Drop_topic_stmtContext):
        pass

    # Exit a parse tree produced by YQLParser#drop_topic_stmt.
    def exitDrop_topic_stmt(self, ctx:YQLParser.Drop_topic_stmtContext):
        pass


    # Enter a parse tree produced by YQLParser#topic_settings.
    def enterTopic_settings(self, ctx:YQLParser.Topic_settingsContext):
        pass

    # Exit a parse tree produced by YQLParser#topic_settings.
    def exitTopic_settings(self, ctx:YQLParser.Topic_settingsContext):
        pass


    # Enter a parse tree produced by YQLParser#topic_settings_entry.
    def enterTopic_settings_entry(self, ctx:YQLParser.Topic_settings_entryContext):
        pass

    # Exit a parse tree produced by YQLParser#topic_settings_entry.
    def exitTopic_settings_entry(self, ctx:YQLParser.Topic_settings_entryContext):
        pass


    # Enter a parse tree produced by YQLParser#topic_setting_value.
    def enterTopic_setting_value(self, ctx:YQLParser.Topic_setting_valueContext):
        pass

    # Exit a parse tree produced by YQLParser#topic_setting_value.
    def exitTopic_setting_value(self, ctx:YQLParser.Topic_setting_valueContext):
        pass


    # Enter a parse tree produced by YQLParser#topic_consumer_with_settings.
    def enterTopic_consumer_with_settings(self, ctx:YQLParser.Topic_consumer_with_settingsContext):
        pass

    # Exit a parse tree produced by YQLParser#topic_consumer_with_settings.
    def exitTopic_consumer_with_settings(self, ctx:YQLParser.Topic_consumer_with_settingsContext):
        pass


    # Enter a parse tree produced by YQLParser#topic_consumer_settings.
    def enterTopic_consumer_settings(self, ctx:YQLParser.Topic_consumer_settingsContext):
        pass

    # Exit a parse tree produced by YQLParser#topic_consumer_settings.
    def exitTopic_consumer_settings(self, ctx:YQLParser.Topic_consumer_settingsContext):
        pass


    # Enter a parse tree produced by YQLParser#topic_consumer_settings_entry.
    def enterTopic_consumer_settings_entry(self, ctx:YQLParser.Topic_consumer_settings_entryContext):
        pass

    # Exit a parse tree produced by YQLParser#topic_consumer_settings_entry.
    def exitTopic_consumer_settings_entry(self, ctx:YQLParser.Topic_consumer_settings_entryContext):
        pass


    # Enter a parse tree produced by YQLParser#topic_consumer_setting_value.
    def enterTopic_consumer_setting_value(self, ctx:YQLParser.Topic_consumer_setting_valueContext):
        pass

    # Exit a parse tree produced by YQLParser#topic_consumer_setting_value.
    def exitTopic_consumer_setting_value(self, ctx:YQLParser.Topic_consumer_setting_valueContext):
        pass


    # Enter a parse tree produced by YQLParser#topic_ref.
    def enterTopic_ref(self, ctx:YQLParser.Topic_refContext):
        pass

    # Exit a parse tree produced by YQLParser#topic_ref.
    def exitTopic_ref(self, ctx:YQLParser.Topic_refContext):
        pass


    # Enter a parse tree produced by YQLParser#topic_consumer_ref.
    def enterTopic_consumer_ref(self, ctx:YQLParser.Topic_consumer_refContext):
        pass

    # Exit a parse tree produced by YQLParser#topic_consumer_ref.
    def exitTopic_consumer_ref(self, ctx:YQLParser.Topic_consumer_refContext):
        pass


    # Enter a parse tree produced by YQLParser#null_treatment.
    def enterNull_treatment(self, ctx:YQLParser.Null_treatmentContext):
        pass

    # Exit a parse tree produced by YQLParser#null_treatment.
    def exitNull_treatment(self, ctx:YQLParser.Null_treatmentContext):
        pass


    # Enter a parse tree produced by YQLParser#filter_clause.
    def enterFilter_clause(self, ctx:YQLParser.Filter_clauseContext):
        pass

    # Exit a parse tree produced by YQLParser#filter_clause.
    def exitFilter_clause(self, ctx:YQLParser.Filter_clauseContext):
        pass


    # Enter a parse tree produced by YQLParser#window_name_or_specification.
    def enterWindow_name_or_specification(self, ctx:YQLParser.Window_name_or_specificationContext):
        pass

    # Exit a parse tree produced by YQLParser#window_name_or_specification.
    def exitWindow_name_or_specification(self, ctx:YQLParser.Window_name_or_specificationContext):
        pass


    # Enter a parse tree produced by YQLParser#window_name.
    def enterWindow_name(self, ctx:YQLParser.Window_nameContext):
        pass

    # Exit a parse tree produced by YQLParser#window_name.
    def exitWindow_name(self, ctx:YQLParser.Window_nameContext):
        pass


    # Enter a parse tree produced by YQLParser#window_clause.
    def enterWindow_clause(self, ctx:YQLParser.Window_clauseContext):
        pass

    # Exit a parse tree produced by YQLParser#window_clause.
    def exitWindow_clause(self, ctx:YQLParser.Window_clauseContext):
        pass


    # Enter a parse tree produced by YQLParser#window_definition_list.
    def enterWindow_definition_list(self, ctx:YQLParser.Window_definition_listContext):
        pass

    # Exit a parse tree produced by YQLParser#window_definition_list.
    def exitWindow_definition_list(self, ctx:YQLParser.Window_definition_listContext):
        pass


    # Enter a parse tree produced by YQLParser#window_definition.
    def enterWindow_definition(self, ctx:YQLParser.Window_definitionContext):
        pass

    # Exit a parse tree produced by YQLParser#window_definition.
    def exitWindow_definition(self, ctx:YQLParser.Window_definitionContext):
        pass


    # Enter a parse tree produced by YQLParser#new_window_name.
    def enterNew_window_name(self, ctx:YQLParser.New_window_nameContext):
        pass

    # Exit a parse tree produced by YQLParser#new_window_name.
    def exitNew_window_name(self, ctx:YQLParser.New_window_nameContext):
        pass


    # Enter a parse tree produced by YQLParser#window_specification.
    def enterWindow_specification(self, ctx:YQLParser.Window_specificationContext):
        pass

    # Exit a parse tree produced by YQLParser#window_specification.
    def exitWindow_specification(self, ctx:YQLParser.Window_specificationContext):
        pass


    # Enter a parse tree produced by YQLParser#window_specification_details.
    def enterWindow_specification_details(self, ctx:YQLParser.Window_specification_detailsContext):
        pass

    # Exit a parse tree produced by YQLParser#window_specification_details.
    def exitWindow_specification_details(self, ctx:YQLParser.Window_specification_detailsContext):
        pass


    # Enter a parse tree produced by YQLParser#existing_window_name.
    def enterExisting_window_name(self, ctx:YQLParser.Existing_window_nameContext):
        pass

    # Exit a parse tree produced by YQLParser#existing_window_name.
    def exitExisting_window_name(self, ctx:YQLParser.Existing_window_nameContext):
        pass


    # Enter a parse tree produced by YQLParser#window_partition_clause.
    def enterWindow_partition_clause(self, ctx:YQLParser.Window_partition_clauseContext):
        pass

    # Exit a parse tree produced by YQLParser#window_partition_clause.
    def exitWindow_partition_clause(self, ctx:YQLParser.Window_partition_clauseContext):
        pass


    # Enter a parse tree produced by YQLParser#window_order_clause.
    def enterWindow_order_clause(self, ctx:YQLParser.Window_order_clauseContext):
        pass

    # Exit a parse tree produced by YQLParser#window_order_clause.
    def exitWindow_order_clause(self, ctx:YQLParser.Window_order_clauseContext):
        pass


    # Enter a parse tree produced by YQLParser#window_frame_clause.
    def enterWindow_frame_clause(self, ctx:YQLParser.Window_frame_clauseContext):
        pass

    # Exit a parse tree produced by YQLParser#window_frame_clause.
    def exitWindow_frame_clause(self, ctx:YQLParser.Window_frame_clauseContext):
        pass


    # Enter a parse tree produced by YQLParser#window_frame_units.
    def enterWindow_frame_units(self, ctx:YQLParser.Window_frame_unitsContext):
        pass

    # Exit a parse tree produced by YQLParser#window_frame_units.
    def exitWindow_frame_units(self, ctx:YQLParser.Window_frame_unitsContext):
        pass


    # Enter a parse tree produced by YQLParser#window_frame_extent.
    def enterWindow_frame_extent(self, ctx:YQLParser.Window_frame_extentContext):
        pass

    # Exit a parse tree produced by YQLParser#window_frame_extent.
    def exitWindow_frame_extent(self, ctx:YQLParser.Window_frame_extentContext):
        pass


    # Enter a parse tree produced by YQLParser#window_frame_between.
    def enterWindow_frame_between(self, ctx:YQLParser.Window_frame_betweenContext):
        pass

    # Exit a parse tree produced by YQLParser#window_frame_between.
    def exitWindow_frame_between(self, ctx:YQLParser.Window_frame_betweenContext):
        pass


    # Enter a parse tree produced by YQLParser#window_frame_bound.
    def enterWindow_frame_bound(self, ctx:YQLParser.Window_frame_boundContext):
        pass

    # Exit a parse tree produced by YQLParser#window_frame_bound.
    def exitWindow_frame_bound(self, ctx:YQLParser.Window_frame_boundContext):
        pass


    # Enter a parse tree produced by YQLParser#window_frame_exclusion.
    def enterWindow_frame_exclusion(self, ctx:YQLParser.Window_frame_exclusionContext):
        pass

    # Exit a parse tree produced by YQLParser#window_frame_exclusion.
    def exitWindow_frame_exclusion(self, ctx:YQLParser.Window_frame_exclusionContext):
        pass


    # Enter a parse tree produced by YQLParser#use_stmt.
    def enterUse_stmt(self, ctx:YQLParser.Use_stmtContext):
        pass

    # Exit a parse tree produced by YQLParser#use_stmt.
    def exitUse_stmt(self, ctx:YQLParser.Use_stmtContext):
        pass


    # Enter a parse tree produced by YQLParser#subselect_stmt.
    def enterSubselect_stmt(self, ctx:YQLParser.Subselect_stmtContext):
        pass

    # Exit a parse tree produced by YQLParser#subselect_stmt.
    def exitSubselect_stmt(self, ctx:YQLParser.Subselect_stmtContext):
        pass


    # Enter a parse tree produced by YQLParser#named_nodes_stmt.
    def enterNamed_nodes_stmt(self, ctx:YQLParser.Named_nodes_stmtContext):
        pass

    # Exit a parse tree produced by YQLParser#named_nodes_stmt.
    def exitNamed_nodes_stmt(self, ctx:YQLParser.Named_nodes_stmtContext):
        pass


    # Enter a parse tree produced by YQLParser#commit_stmt.
    def enterCommit_stmt(self, ctx:YQLParser.Commit_stmtContext):
        pass

    # Exit a parse tree produced by YQLParser#commit_stmt.
    def exitCommit_stmt(self, ctx:YQLParser.Commit_stmtContext):
        pass


    # Enter a parse tree produced by YQLParser#rollback_stmt.
    def enterRollback_stmt(self, ctx:YQLParser.Rollback_stmtContext):
        pass

    # Exit a parse tree produced by YQLParser#rollback_stmt.
    def exitRollback_stmt(self, ctx:YQLParser.Rollback_stmtContext):
        pass


    # Enter a parse tree produced by YQLParser#analyze_table.
    def enterAnalyze_table(self, ctx:YQLParser.Analyze_tableContext):
        pass

    # Exit a parse tree produced by YQLParser#analyze_table.
    def exitAnalyze_table(self, ctx:YQLParser.Analyze_tableContext):
        pass


    # Enter a parse tree produced by YQLParser#analyze_table_list.
    def enterAnalyze_table_list(self, ctx:YQLParser.Analyze_table_listContext):
        pass

    # Exit a parse tree produced by YQLParser#analyze_table_list.
    def exitAnalyze_table_list(self, ctx:YQLParser.Analyze_table_listContext):
        pass


    # Enter a parse tree produced by YQLParser#analyze_stmt.
    def enterAnalyze_stmt(self, ctx:YQLParser.Analyze_stmtContext):
        pass

    # Exit a parse tree produced by YQLParser#analyze_stmt.
    def exitAnalyze_stmt(self, ctx:YQLParser.Analyze_stmtContext):
        pass


    # Enter a parse tree produced by YQLParser#alter_sequence_stmt.
    def enterAlter_sequence_stmt(self, ctx:YQLParser.Alter_sequence_stmtContext):
        pass

    # Exit a parse tree produced by YQLParser#alter_sequence_stmt.
    def exitAlter_sequence_stmt(self, ctx:YQLParser.Alter_sequence_stmtContext):
        pass


    # Enter a parse tree produced by YQLParser#alter_sequence_action.
    def enterAlter_sequence_action(self, ctx:YQLParser.Alter_sequence_actionContext):
        pass

    # Exit a parse tree produced by YQLParser#alter_sequence_action.
    def exitAlter_sequence_action(self, ctx:YQLParser.Alter_sequence_actionContext):
        pass


    # Enter a parse tree produced by YQLParser#identifier.
    def enterIdentifier(self, ctx:YQLParser.IdentifierContext):
        pass

    # Exit a parse tree produced by YQLParser#identifier.
    def exitIdentifier(self, ctx:YQLParser.IdentifierContext):
        pass


    # Enter a parse tree produced by YQLParser#id.
    def enterId(self, ctx:YQLParser.IdContext):
        pass

    # Exit a parse tree produced by YQLParser#id.
    def exitId(self, ctx:YQLParser.IdContext):
        pass


    # Enter a parse tree produced by YQLParser#id_schema.
    def enterId_schema(self, ctx:YQLParser.Id_schemaContext):
        pass

    # Exit a parse tree produced by YQLParser#id_schema.
    def exitId_schema(self, ctx:YQLParser.Id_schemaContext):
        pass


    # Enter a parse tree produced by YQLParser#id_expr.
    def enterId_expr(self, ctx:YQLParser.Id_exprContext):
        pass

    # Exit a parse tree produced by YQLParser#id_expr.
    def exitId_expr(self, ctx:YQLParser.Id_exprContext):
        pass


    # Enter a parse tree produced by YQLParser#id_expr_in.
    def enterId_expr_in(self, ctx:YQLParser.Id_expr_inContext):
        pass

    # Exit a parse tree produced by YQLParser#id_expr_in.
    def exitId_expr_in(self, ctx:YQLParser.Id_expr_inContext):
        pass


    # Enter a parse tree produced by YQLParser#id_window.
    def enterId_window(self, ctx:YQLParser.Id_windowContext):
        pass

    # Exit a parse tree produced by YQLParser#id_window.
    def exitId_window(self, ctx:YQLParser.Id_windowContext):
        pass


    # Enter a parse tree produced by YQLParser#id_table.
    def enterId_table(self, ctx:YQLParser.Id_tableContext):
        pass

    # Exit a parse tree produced by YQLParser#id_table.
    def exitId_table(self, ctx:YQLParser.Id_tableContext):
        pass


    # Enter a parse tree produced by YQLParser#id_without.
    def enterId_without(self, ctx:YQLParser.Id_withoutContext):
        pass

    # Exit a parse tree produced by YQLParser#id_without.
    def exitId_without(self, ctx:YQLParser.Id_withoutContext):
        pass


    # Enter a parse tree produced by YQLParser#id_hint.
    def enterId_hint(self, ctx:YQLParser.Id_hintContext):
        pass

    # Exit a parse tree produced by YQLParser#id_hint.
    def exitId_hint(self, ctx:YQLParser.Id_hintContext):
        pass


    # Enter a parse tree produced by YQLParser#id_as_compat.
    def enterId_as_compat(self, ctx:YQLParser.Id_as_compatContext):
        pass

    # Exit a parse tree produced by YQLParser#id_as_compat.
    def exitId_as_compat(self, ctx:YQLParser.Id_as_compatContext):
        pass


    # Enter a parse tree produced by YQLParser#an_id.
    def enterAn_id(self, ctx:YQLParser.An_idContext):
        pass

    # Exit a parse tree produced by YQLParser#an_id.
    def exitAn_id(self, ctx:YQLParser.An_idContext):
        pass


    # Enter a parse tree produced by YQLParser#an_id_or_type.
    def enterAn_id_or_type(self, ctx:YQLParser.An_id_or_typeContext):
        pass

    # Exit a parse tree produced by YQLParser#an_id_or_type.
    def exitAn_id_or_type(self, ctx:YQLParser.An_id_or_typeContext):
        pass


    # Enter a parse tree produced by YQLParser#an_id_schema.
    def enterAn_id_schema(self, ctx:YQLParser.An_id_schemaContext):
        pass

    # Exit a parse tree produced by YQLParser#an_id_schema.
    def exitAn_id_schema(self, ctx:YQLParser.An_id_schemaContext):
        pass


    # Enter a parse tree produced by YQLParser#an_id_expr.
    def enterAn_id_expr(self, ctx:YQLParser.An_id_exprContext):
        pass

    # Exit a parse tree produced by YQLParser#an_id_expr.
    def exitAn_id_expr(self, ctx:YQLParser.An_id_exprContext):
        pass


    # Enter a parse tree produced by YQLParser#an_id_expr_in.
    def enterAn_id_expr_in(self, ctx:YQLParser.An_id_expr_inContext):
        pass

    # Exit a parse tree produced by YQLParser#an_id_expr_in.
    def exitAn_id_expr_in(self, ctx:YQLParser.An_id_expr_inContext):
        pass


    # Enter a parse tree produced by YQLParser#an_id_window.
    def enterAn_id_window(self, ctx:YQLParser.An_id_windowContext):
        pass

    # Exit a parse tree produced by YQLParser#an_id_window.
    def exitAn_id_window(self, ctx:YQLParser.An_id_windowContext):
        pass


    # Enter a parse tree produced by YQLParser#an_id_table.
    def enterAn_id_table(self, ctx:YQLParser.An_id_tableContext):
        pass

    # Exit a parse tree produced by YQLParser#an_id_table.
    def exitAn_id_table(self, ctx:YQLParser.An_id_tableContext):
        pass


    # Enter a parse tree produced by YQLParser#an_id_without.
    def enterAn_id_without(self, ctx:YQLParser.An_id_withoutContext):
        pass

    # Exit a parse tree produced by YQLParser#an_id_without.
    def exitAn_id_without(self, ctx:YQLParser.An_id_withoutContext):
        pass


    # Enter a parse tree produced by YQLParser#an_id_hint.
    def enterAn_id_hint(self, ctx:YQLParser.An_id_hintContext):
        pass

    # Exit a parse tree produced by YQLParser#an_id_hint.
    def exitAn_id_hint(self, ctx:YQLParser.An_id_hintContext):
        pass


    # Enter a parse tree produced by YQLParser#an_id_pure.
    def enterAn_id_pure(self, ctx:YQLParser.An_id_pureContext):
        pass

    # Exit a parse tree produced by YQLParser#an_id_pure.
    def exitAn_id_pure(self, ctx:YQLParser.An_id_pureContext):
        pass


    # Enter a parse tree produced by YQLParser#an_id_as_compat.
    def enterAn_id_as_compat(self, ctx:YQLParser.An_id_as_compatContext):
        pass

    # Exit a parse tree produced by YQLParser#an_id_as_compat.
    def exitAn_id_as_compat(self, ctx:YQLParser.An_id_as_compatContext):
        pass


    # Enter a parse tree produced by YQLParser#view_name.
    def enterView_name(self, ctx:YQLParser.View_nameContext):
        pass

    # Exit a parse tree produced by YQLParser#view_name.
    def exitView_name(self, ctx:YQLParser.View_nameContext):
        pass


    # Enter a parse tree produced by YQLParser#opt_id_prefix.
    def enterOpt_id_prefix(self, ctx:YQLParser.Opt_id_prefixContext):
        pass

    # Exit a parse tree produced by YQLParser#opt_id_prefix.
    def exitOpt_id_prefix(self, ctx:YQLParser.Opt_id_prefixContext):
        pass


    # Enter a parse tree produced by YQLParser#cluster_expr.
    def enterCluster_expr(self, ctx:YQLParser.Cluster_exprContext):
        pass

    # Exit a parse tree produced by YQLParser#cluster_expr.
    def exitCluster_expr(self, ctx:YQLParser.Cluster_exprContext):
        pass


    # Enter a parse tree produced by YQLParser#id_or_type.
    def enterId_or_type(self, ctx:YQLParser.Id_or_typeContext):
        pass

    # Exit a parse tree produced by YQLParser#id_or_type.
    def exitId_or_type(self, ctx:YQLParser.Id_or_typeContext):
        pass


    # Enter a parse tree produced by YQLParser#opt_id_prefix_or_type.
    def enterOpt_id_prefix_or_type(self, ctx:YQLParser.Opt_id_prefix_or_typeContext):
        pass

    # Exit a parse tree produced by YQLParser#opt_id_prefix_or_type.
    def exitOpt_id_prefix_or_type(self, ctx:YQLParser.Opt_id_prefix_or_typeContext):
        pass


    # Enter a parse tree produced by YQLParser#id_or_at.
    def enterId_or_at(self, ctx:YQLParser.Id_or_atContext):
        pass

    # Exit a parse tree produced by YQLParser#id_or_at.
    def exitId_or_at(self, ctx:YQLParser.Id_or_atContext):
        pass


    # Enter a parse tree produced by YQLParser#id_table_or_type.
    def enterId_table_or_type(self, ctx:YQLParser.Id_table_or_typeContext):
        pass

    # Exit a parse tree produced by YQLParser#id_table_or_type.
    def exitId_table_or_type(self, ctx:YQLParser.Id_table_or_typeContext):
        pass


    # Enter a parse tree produced by YQLParser#id_table_or_at.
    def enterId_table_or_at(self, ctx:YQLParser.Id_table_or_atContext):
        pass

    # Exit a parse tree produced by YQLParser#id_table_or_at.
    def exitId_table_or_at(self, ctx:YQLParser.Id_table_or_atContext):
        pass


    # Enter a parse tree produced by YQLParser#keyword.
    def enterKeyword(self, ctx:YQLParser.KeywordContext):
        pass

    # Exit a parse tree produced by YQLParser#keyword.
    def exitKeyword(self, ctx:YQLParser.KeywordContext):
        pass


    # Enter a parse tree produced by YQLParser#keyword_expr_uncompat.
    def enterKeyword_expr_uncompat(self, ctx:YQLParser.Keyword_expr_uncompatContext):
        pass

    # Exit a parse tree produced by YQLParser#keyword_expr_uncompat.
    def exitKeyword_expr_uncompat(self, ctx:YQLParser.Keyword_expr_uncompatContext):
        pass


    # Enter a parse tree produced by YQLParser#keyword_table_uncompat.
    def enterKeyword_table_uncompat(self, ctx:YQLParser.Keyword_table_uncompatContext):
        pass

    # Exit a parse tree produced by YQLParser#keyword_table_uncompat.
    def exitKeyword_table_uncompat(self, ctx:YQLParser.Keyword_table_uncompatContext):
        pass


    # Enter a parse tree produced by YQLParser#keyword_select_uncompat.
    def enterKeyword_select_uncompat(self, ctx:YQLParser.Keyword_select_uncompatContext):
        pass

    # Exit a parse tree produced by YQLParser#keyword_select_uncompat.
    def exitKeyword_select_uncompat(self, ctx:YQLParser.Keyword_select_uncompatContext):
        pass


    # Enter a parse tree produced by YQLParser#keyword_alter_uncompat.
    def enterKeyword_alter_uncompat(self, ctx:YQLParser.Keyword_alter_uncompatContext):
        pass

    # Exit a parse tree produced by YQLParser#keyword_alter_uncompat.
    def exitKeyword_alter_uncompat(self, ctx:YQLParser.Keyword_alter_uncompatContext):
        pass


    # Enter a parse tree produced by YQLParser#keyword_in_uncompat.
    def enterKeyword_in_uncompat(self, ctx:YQLParser.Keyword_in_uncompatContext):
        pass

    # Exit a parse tree produced by YQLParser#keyword_in_uncompat.
    def exitKeyword_in_uncompat(self, ctx:YQLParser.Keyword_in_uncompatContext):
        pass


    # Enter a parse tree produced by YQLParser#keyword_window_uncompat.
    def enterKeyword_window_uncompat(self, ctx:YQLParser.Keyword_window_uncompatContext):
        pass

    # Exit a parse tree produced by YQLParser#keyword_window_uncompat.
    def exitKeyword_window_uncompat(self, ctx:YQLParser.Keyword_window_uncompatContext):
        pass


    # Enter a parse tree produced by YQLParser#keyword_hint_uncompat.
    def enterKeyword_hint_uncompat(self, ctx:YQLParser.Keyword_hint_uncompatContext):
        pass

    # Exit a parse tree produced by YQLParser#keyword_hint_uncompat.
    def exitKeyword_hint_uncompat(self, ctx:YQLParser.Keyword_hint_uncompatContext):
        pass


    # Enter a parse tree produced by YQLParser#keyword_as_compat.
    def enterKeyword_as_compat(self, ctx:YQLParser.Keyword_as_compatContext):
        pass

    # Exit a parse tree produced by YQLParser#keyword_as_compat.
    def exitKeyword_as_compat(self, ctx:YQLParser.Keyword_as_compatContext):
        pass


    # Enter a parse tree produced by YQLParser#keyword_compat.
    def enterKeyword_compat(self, ctx:YQLParser.Keyword_compatContext):
        pass

    # Exit a parse tree produced by YQLParser#keyword_compat.
    def exitKeyword_compat(self, ctx:YQLParser.Keyword_compatContext):
        pass


    # Enter a parse tree produced by YQLParser#type_id.
    def enterType_id(self, ctx:YQLParser.Type_idContext):
        pass

    # Exit a parse tree produced by YQLParser#type_id.
    def exitType_id(self, ctx:YQLParser.Type_idContext):
        pass


    # Enter a parse tree produced by YQLParser#bool_value.
    def enterBool_value(self, ctx:YQLParser.Bool_valueContext):
        pass

    # Exit a parse tree produced by YQLParser#bool_value.
    def exitBool_value(self, ctx:YQLParser.Bool_valueContext):
        pass


    # Enter a parse tree produced by YQLParser#real.
    def enterReal(self, ctx:YQLParser.RealContext):
        pass

    # Exit a parse tree produced by YQLParser#real.
    def exitReal(self, ctx:YQLParser.RealContext):
        pass


    # Enter a parse tree produced by YQLParser#integer.
    def enterInteger(self, ctx:YQLParser.IntegerContext):
        pass

    # Exit a parse tree produced by YQLParser#integer.
    def exitInteger(self, ctx:YQLParser.IntegerContext):
        pass



del YQLParser